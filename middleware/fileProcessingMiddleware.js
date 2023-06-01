// const { imageResizingMiddleware } = require('./imageResizingMiddleware');

// const fileProcessingMiddleware = async (req, res, next) => {
//     try {
//         const data = req.body; 
//         console.log(req.files);

//         if (req.files) {
//             data.images = [];
                
//             req.files.forEach(async img => {
//                 const [fileName, extension] =  img.filename.split('.');
//                 const filePath = `./tmp/${fileName}.${extension}`;

//                 const newFileLocation = await imageResizingMiddleware(filePath, extension);
//                 data.images.push(newFileLocation);
//                 console.log(data.images);
//                 console.log(newFileLocation);
//             });
//         }

//         next();
//     } catch (err) {
//         console.log(err);
//     }
// }

// module.exports = {
//     fileProcessingMiddleware
// }