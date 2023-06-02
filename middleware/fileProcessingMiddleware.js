const { ValidationError } = require('../helpers/errors');

const fileProcessingMiddleware = async (req, res, next) => {
    try {
        if (req.files.length > 0) {
            const images = [];  
            const files = req.files;

            for (let file of files) {
                images.push(file.path);
            }

            req.body.images = images;
        }

        next();
    } catch (err) {
        throw new ValidationError('Bad request.')
    }
}

module.exports = {
    fileProcessingMiddleware
}