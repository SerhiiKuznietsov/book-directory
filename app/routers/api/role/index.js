const router = require("express").Router();

const {
  getList,
  create,
  getSingle,
  update,
  remove,
} = require("../../../controllers/role");

router.route("/").get(getList).post(create);
router.route("/:id(\\d+)").get(getSingle).put(update).delete(remove);

module.exports = router;
