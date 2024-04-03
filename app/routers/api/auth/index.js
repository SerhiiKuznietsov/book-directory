const router = require('express').Router();
const { signIn, signOut } = require('../../../controllers/auth');

router.post('/sign-in', signIn);
router.get('/sign-out', signOut);

module.exports = router;
