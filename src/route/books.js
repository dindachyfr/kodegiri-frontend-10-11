const express = require("express");
const booksController = require("../controller/books"); //belom ada wkwkwk
const { protect } = require("../midware/headers");

const route = express.Router();

route
    .post("/", protect, booksController.postBooks)
    .get("/", protect, booksController.getBooks)
module.exports = route;
