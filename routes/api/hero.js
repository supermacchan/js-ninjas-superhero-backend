const express = require('express')
const router = express.Router()

const { 
    getHeroesController,
    addHeroController,
    updateHeroController
} = require('../../controllers/heroController');

router.get('/', getHeroesController);
router.post('/', addHeroController);
router.put('/:id', updateHeroController);
router.delete('/:id');

module.exports = { heroRouter: router };