const express = require("express");
const Recipe = require("./recipe-model");

const router = express.Router();

router.get("/:recipe_id", (req, res, next) => {
  const { recipe_id } = req.params;

  Recipe.getRecipeById(recipe_id)
    .then((scheme) => {
      res.json(scheme);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    sageAdvice: "Finding the real error is 90% of the bug fix",
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;
