const router = require('express').Router();
const {
  getList,
  create,
  getSingle,
  update,
  remove,
} = require('../../../controllers/user');
const {
  readCheckMiddleware,
  createCheckMiddleware,
  updateCheckMiddleware,
  deleteCheckMiddleware,
} = require('../../../middlewares/user');

router
  .route('/')
  .get(readCheckMiddleware, getList)
  .post(createCheckMiddleware, create);

router
  .route('/:id(\\d+)')
  .get(readCheckMiddleware, getSingle)
  .put(updateCheckMiddleware, update)
  .delete(deleteCheckMiddleware, remove);

module.exports = router;
