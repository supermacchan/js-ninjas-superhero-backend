class ServerError extends Error {
    constructor(message) {
        super(message);
        this.status = 500;
    }
}

class ValidationError extends ServerError {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class NotFoundError extends ServerError {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}


module.exports = {
    ServerError,
    ValidationError,
    NotFoundError
}