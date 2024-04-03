const router = require('express').Router();
const {
  getList,
  create,
  getSingle,
  update,
  remove,
} = require('../../../controllers/book');
const {
  readCheckMiddleware,
  createCheckMiddleware,
  updateCheckMiddleware,
  deleteCheckMiddleware,
} = require('../../../middlewares/book');

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
