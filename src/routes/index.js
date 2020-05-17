const { Router } = require('express');

const router = Router();

const authRoutes = require('./auth');

// define as rotas com prefixo auth
router.use('/auth', authRoutes);

module.exports = router;
