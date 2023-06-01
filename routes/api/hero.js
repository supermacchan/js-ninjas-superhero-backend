const express = require('express')
const router = express.Router()

const { getHeroesController } = require('../../controllers/heroController');

router.get('/', getHeroesController);
router.post('/');
router.put('/:id');
router.delete('/:id');

// router.post('/signup', validateBody(registerSchema), registrationController);
// router.post('/login', validateBody(loginSchema), loginController);

module.exports = { heroRouter: router };