const { ValidationError } = require('../helpers/errors');

const fileProcessingMiddleware = async (req, res, next) => {
    try {
        if (!req.body.img && req.files.length === 0) {
            next();
            return;
        }

        let images = []; 

        if (req.body.img) {
            if (typeof(req.body.img) === 'string') {
                images.push(req.body.img);
            } else {
                images = req.body.img;
            }
        }

        if (req.files.length > 0) {
            const files = req.files;

            for (let file of files) {
                images.push(file.path);
            }
        }

        req.body.images = images;

        next();
    } catch (err) {
        console.log(err);
        throw new ValidationError('Bad request.')
    }
}

module.exports = {
    fileProcessingMiddleware
}