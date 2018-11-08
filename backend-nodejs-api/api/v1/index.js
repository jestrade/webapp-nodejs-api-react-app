"use strict";

const router = require("express").Router();

const usersRoutes = require("./routes/users");
router.use("/users", usersRoutes);
const messagesRoutes = require("./routes/messages");
router.use("/messages", messagesRoutes);

module.exports = router;
