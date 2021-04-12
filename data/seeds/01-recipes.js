exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      let currentdate = new Date();
      let datetime =
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      return knex("recipes").insert([
        {
          recipe_name: "Torta di Mele (Italian Apple Cake)",
          created_at: datetime,
        },
        {
          recipe_name: "Traditional Spaghetti all'Amatriciana",
          created_at: datetime,
        },
        { recipe_name: "Chicken Parmesan", created_at: datetime },
      ]);
    });
};
