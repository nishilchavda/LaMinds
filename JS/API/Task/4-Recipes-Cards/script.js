function recipeData() {
  fetch("https://dummyjson.com/recipes?limit=10")
    .then(function (rawData) {
      console.log(rawData);
      return rawData.json();
    })
    .then((data) => {
      console.log(data);

      data.recipes.forEach((recipes) => {
        RenderUI(recipes);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
recipeData();

function RenderUI(recipes) {
  let div = document.querySelector("div");
  div.innerHTML += `
      
        <div
          class="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
        >
          <div class="relative h-64">
            <img
              src=${recipes.image}
              alt="Margherita Pizza"
              class="w-full h-full object-cover"
            />
            <span
              class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-green-700"
              >${recipes.difficulty}</span
            >
            <span
              class="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold"
              >★ ${recipes.rating}</span
            >
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h2 class="text-2xl font-bold leading-tight">
                ${recipes.name}
              </h2>
              <span class="text-gray-400"
                ><i class="far fa-heart hover:text-red-500 cursor-pointer"></i
              ></span>
            </div>
            <p class="text-gray-500 text-sm mb-4">${recipes.cuisine} • ${recipes.mealType}</p>

            <div class="flex items-center space-x-4 mb-6 text-sm text-gray-600">
              <div class="flex items-center">
                <i class="far fa-clock mr-1"></i> ${recipes.prepTimeMinutes}m
              </div>
              <div class="flex items-center">
                <i class="fas fa-fire mr-1"></i> ${recipes.caloriesPerServing} kcal
              </div>
              <div class="flex items-center">
                <i class="fas fa-user-friends mr-1"></i> ${recipes.servings}
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="font-bold text-gray-800">Ingredients</h3>
              <ul class="text-sm text-gray-600 space-y-1">
                ${recipes.ingredients
                  .map(
                    (ingredient) => `
      <li>• ${ingredient}</li>
    `,
                  )
                  .join("")}
              </ul>
            </div>

            <button
              class="w-full mt-6 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              View Recipe
            </button>
          </div>
        </div>
    `;
}
