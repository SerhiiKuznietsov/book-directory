const router = require("express").Router();
const bookRouter = require("./book");
const policyRouter = require("./policy");
const roleRouter = require("./role");
const userRouter = require("./user");
const authRouter = require("./auth");
const rolePolicyRouter = require("./role-policy");

router
  .use("/auth", authRouter)
  .use("/role-policy", rolePolicyRouter)
  .use("/book", bookRouter)
  .use("/policy", policyRouter)
  .use("/role", roleRouter)
  .use("/user", userRouter);

module.exports = router;
