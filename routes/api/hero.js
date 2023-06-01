const express = require('express')
const router = express.Router()



router.get('/heroes');
router.post('/heroes');
router.put('/heroes/:id');
router.delete('/heroes/:id');

// router.post('/signup', validateBody(registerSchema), registrationController);
// router.post('/login', validateBody(loginSchema), loginController);

module.exports = { heroRouter: router };