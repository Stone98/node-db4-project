exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_number: 1,
          step_instructions:
            "Preheat the oven to 375 degrees F (190 degrees C). Grease a pie plate and dust with bread crumbs",
          recipe_id: 1,
        },
        {
          step_number: 2,
          step_instructions:
            "Combine melted butter, 1/2 cup sugar, and vanilla bean seeds in a bowl. Add eggs and stir to combine. Mix flour, baking powder, and salt in a bowl and add to butter mixture. Add milk if batter is too thick",
          recipe_id: 1,
        },
        {
          step_number: 3,
          step_instructions:
            "Pour batter into the prepared pie plate. Distribute apple slices in a thick layer on top of the batter. Dot with cubed butter and sprinkle with 1/4 cup sugar.",
          recipe_id: 1,
        },
        {
          step_number: 1,
          step_instructions:
            "Bring a large pot of lightly salted water to a boil. Cook spaghetti in the boiling water, stirring occasionally, until tender yet firm to the bite, about 12 minutes.",
          recipe_id: 2,
        },
        {
          step_number: 2,
          step_instructions:
            "Meanwhile, heat 2 tablespoons olive oil in a large skillet over medium heat and cook onion until golden brown, about 5 minutes. Add pancetta and cook, stirring occasionally, until crisp, 2 to 3 minutes. Pour in passata, water, and sugar; cook until sauce has thickened, 10 to 15 minutes",
          recipe_id: 2,
        },
        {
          step_number: 3,
          step_instructions:
            "Drain spaghetti and toss with sauce, remaining olive oil, Parmesan cheese, and red pepper flakes. Season with salt and pepper.",
          recipe_id: 2,
        },
        {
          step_number: 1,
          step_instructions: "Preheat an oven to 450 degrees F",
          recipe_id: 3,
        },
        {
          step_number: 2,
          step_instructions:
            "Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper.",
          recipe_id: 3,
        },
      ]);
    });
};
