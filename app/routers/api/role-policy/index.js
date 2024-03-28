const router = require("express").Router();
const {
  getList,
  create,
  getSingle,
  update,
  remove,
} = require("../../../controllers/role-policy");
const roleMiddleware = require("../../../middlewares/role");
const policyMiddleware = require("../../../middlewares/policy");

router
  .route("/")
  .get(
    roleMiddleware.readCheckMiddleware,
    policyMiddleware.readCheckMiddleware,
    getList
  )
  .post(
    roleMiddleware.createCheckMiddleware,
    policyMiddleware.createCheckMiddleware,
    create
  );

router
  .route("/:uuid")
  .get(
    roleMiddleware.readCheckMiddleware,
    policyMiddleware.readCheckMiddleware,
    getSingle
  )
  .put(
    roleMiddleware.updateCheckMiddleware,
    policyMiddleware.updateCheckMiddleware,
    update
  )
  .delete(
    roleMiddleware.deleteCheckMiddleware,
    policyMiddleware.deleteCheckMiddleware,
    remove
  );

module.exports = router;
