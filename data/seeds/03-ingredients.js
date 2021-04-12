exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Unseasoned bread crumbs" },
        { ingredient_name: "eggs" },
        { ingredient_name: "white sugar" },
        { ingredient_name: "spaghetti" },
        { ingredient_name: "Extra-virgin olive oil" },
        { ingredient_name: "Onion" },
        { ingredient_name: "Chicken breast halves" },
        { ingredient_name: "Parmesan cheese" },
        { ingredient_name: "Flour" },
      ]);
    });
};
