const db = require("../../data/db-config");

async function getRecipeById(recipe_id) {
  let data = await db("recipes as r")
    .where("r.recipe_id", recipe_id)
    .leftJoin("steps as st", "st.recipe_id", "r.recipe_id")
    .leftJoin("step_ingredients as sti", "sti.step_id", "st.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "sti.ingredient_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "r.created_at",
      "st.step_id",
      "st.step_number",
      "st.step_instructions",
      "i.ingredient_id",
      "i.ingredient_name",
      "sti.quantity"
    );
  const recipe = {
    recipe_id: null,
    recipe_name: null,
    created_at: null,
    steps: [],
  };

  let lastStep = null;

  for (let i = 0; i < data.length; i++) {
    let row = data[i];
    recipe.recipe_id = row.recipe_id;
    recipe.recipe_name = row.recipe_name;
    recipe.created_at = row.created_at;
    if (lastStep === null || lastStep.step_id !== row.step_id) {
      lastStep = {
        step_id: row.step_id,
        step_number: row.step_number,
        step_instructions: row.step_instructions,
        ingredients: [],
      };
      recipe.steps.push(lastStep);
    }
    if (row.step_id === null) {
      lastStep = null;
    }
    if (lastStep !== null && row.ingredient_id !== null) {
      let ingredient = {
        ingredient_id: row.ingredient_id,
        ingredient_name: row.ingredient_name,
        quantity: row.quantity,
      };
      lastStep.ingredients.push(ingredient);
    }
  }

  return recipe;
}

module.exports = {
  getRecipeById,
};
