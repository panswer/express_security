const Router = require('express').Router;

const router = Router();

router.use(require('./door'));

module.exports = router;