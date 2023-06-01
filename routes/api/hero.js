const express = require('express')
const router = express.Router()

const { 
    getHeroesController,
    addHeroController
} = require('../../controllers/heroController');

router.get('/', getHeroesController);
router.post('/', addHeroController);
router.put('/:id');
router.delete('/:id');

// router.post('/signup', validateBody(registerSchema), registrationController);
// router.post('/login', validateBody(loginSchema), loginController);

module.exports = { heroRouter: router };