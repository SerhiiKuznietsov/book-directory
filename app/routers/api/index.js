const router = require("express").Router();
const bookRouter = require("./book");
const policyRouter = require("./policy");
const roleRouter = require("./role");
const userRouter = require("./user");
const authRouter = require("./auth");

router.use("/auth", authRouter);

router.use("/book", bookRouter);
router.use("/policy", policyRouter);
router.use("/role", roleRouter);
router.use("/user", userRouter);

module.exports = router;
