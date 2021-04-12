exports.seed = function (knex) {
  return knex("step_ingredients")
    .truncate()
    .then(function () {
      return knex("step_ingredients").insert([
        { step_id: 1, ingredient_id: 1, quantity: 5 },
        { step_id: 2, ingredient_id: 3, quantity: 4.5 },
        { step_id: 3, ingredient_id: 2, quantity: 2 },
        { step_id: 4, ingredient_id: 4, quantity: 0.08 },
        { step_id: 5, ingredient_id: 5, quantity: 0.9 },
        { step_id: 6, ingredient_id: 6, quantity: 11 },
        { step_id: 7, ingredient_id: 7, quantity: 4 },
        { step_id: 7, ingredient_id: 8, quantity: 0.2 },
        { step_id: 8, ingredient_id: 9, quantity: 0.04 },
      ]);
    });
};
