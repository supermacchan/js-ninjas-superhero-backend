const multer  = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('./tmp'));
    },
    filename: async (req, file, cb) => {
        console.log(req.body);
        const [fileName, extension] =  file.originalname.split('.');
        cb(null, `${fileName}.${extension}`);
    }
})

const uploadMiddleware = multer({storage}).array('img');

module.exports = {
    uploadMiddleware
}