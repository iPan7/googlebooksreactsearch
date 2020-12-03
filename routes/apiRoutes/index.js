const router = require('express').Router();
const savedbooksRoutes = require('./savedbooksRoutes')

router.use('/savedbooks', savedbooksRoutes);

module.exports = router;