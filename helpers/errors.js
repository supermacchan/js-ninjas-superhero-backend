class ServerError extends Error {
    constructor(message) {
        super(message);
        this.status = 500;
    }
}

class ValidationError extends ContactListAppError {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class NotFoundError extends ContactListAppError {
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