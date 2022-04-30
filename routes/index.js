const router = require('express').Router();
const apiRoutes = require('./api');

// api routes
router.use('/api', apiRoutes);

// handles if a non-prescribed route is called
router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;

