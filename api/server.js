const express = require("express");
const helmet = require("helmet");

const server = express();

const RecipeRouter = require("./recipes/recipe-router");

server.use(express.json());
server.use(helmet());
server.use("/api/recipes", RecipeRouter);

module.exports = server;
