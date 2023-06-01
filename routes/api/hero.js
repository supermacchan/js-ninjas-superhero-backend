const express = require('express')
const router = express.Router()

const { 
    getHeroesController,
    addHeroController,
    updateHeroController,
    deleteHeroController
} = require('../../controllers/heroController');
// const { uploadImage } = require('../../middleware/uploadMiddleware');
// const { upload } = require('../../middleware/test');
const { uploadMiddleware } = require('../../middleware/uploadMiddleware');
// const { fileProcessingMiddleware } = require('../../middleware/fileProcessingMiddleware');

router.get('/', getHeroesController);
router.post('/', uploadMiddleware, addHeroController);
router.put('/:id', updateHeroController);
router.delete('/:id', deleteHeroController);

module.exports = { heroRouter: router };