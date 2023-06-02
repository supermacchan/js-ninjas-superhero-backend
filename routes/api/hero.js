const express = require('express')
const router = express.Router()

const { 
    getHeroesController,
    addHeroController,
    updateHeroController,
    deleteHeroController
} = require('../../controllers/heroController');

const { uploadMiddleware } = require('../../middleware/uploadMiddleware');
const { fileProcessingMiddleware } = require('../../middleware/fileProcessingMiddleware');

router.get('/', getHeroesController);
router.post('/', uploadMiddleware, fileProcessingMiddleware, addHeroController);
router.put('/:id', uploadMiddleware, fileProcessingMiddleware, updateHeroController);
router.delete('/:id', deleteHeroController);

module.exports = { heroRouter: router };