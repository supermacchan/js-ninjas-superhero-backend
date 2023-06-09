const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { v4: uuid } = require('uuid');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const imgParams = {
  dimensions: {
    width: 400,
    height: 600,
  },
  maxFileSize: 100000,
  acceptableFileTypes: ['jpg', 'png'],
};

const multerPicture = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const imgName = uuid();

    return {
      folder: 'superhero',
      allowed_formats: imgParams.acceptableFileTypes,
      public_id: imgName,
      transformation: [
        {
          height: imgParams.dimensions.height,
          width: imgParams.dimensions.width,
          crop: 'fill',
        },
      ],
      bytes: imgParams.maxFileSize,
    };
  },
});

const uploadMiddleware = multer({
  storage: multerPicture,
}).array('img');

module.exports = { uploadMiddleware };