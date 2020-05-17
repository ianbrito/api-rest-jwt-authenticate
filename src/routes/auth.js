const { Router } = require('express');

const AuthenticationController = require('../controllers/AuthenticationController');
const authMiddleware = require('../middlewares/auth');

const authRoutes = Router();

authRoutes.post('/signup', AuthenticationController.signUp);
authRoutes.post('/signin', AuthenticationController.signIn);

authRoutes.use(authMiddleware);

authRoutes.get('/signout', AuthenticationController.signOut);

module.exports = authRoutes;
