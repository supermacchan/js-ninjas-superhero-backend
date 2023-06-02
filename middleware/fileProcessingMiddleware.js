const { imageResizingMiddleware } = require('./imageResizingMiddleware');
const { ValidationError } = require('../helpers/errors');

const fileProcessingMiddleware = async (req, res, next) => {
    try {
        if (req.files) {
            const images = [];  
            const files = req.files;
    
            for (let file of files) {
                const [fileName, extension] =  file.filename.split('.');
                const filePath = `./tmp/${fileName}.${extension}`;
    
                const newFileLocation = await imageResizingMiddleware(filePath, extension);
                images.push(newFileLocation);
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