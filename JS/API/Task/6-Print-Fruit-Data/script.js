function fruitData() {
    fetch("https://corsproxy.io/?https://www.fruityvice.com/api/fruit/all")
    .then(function(rawData){
        console.log(rawData);
        return rawData.json();
    })
    .then((data)=>{
        console.log(data);

        data.forEach(fruit => {
            RenderUI(fruit)
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}
fruitData();

function RenderUI(fruit) {
    let div = document.querySelector("div");
    div.innerHTML += `<div
        class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
      >
        <div
          class="p-5 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-orange-50 to-transparent"
        >
          <div>
            <span
              class="text-xs font-bold text-orange-600 uppercase tracking-widest"
              >ID #${fruit.id}</span
            >
            <h2 class="text-2xl font-bold text-slate-800">${fruit.name}</h2>
          </div>
        </div>

        <div class="px-5 py-4 bg-slate-50/50">
          <div class="grid grid-cols-3 gap-2 text-center">
            <div>
              <p class="text-[10px] uppercase font-bold text-slate-400">
                Family
              </p>
              <p class="text-sm font-semibold text-slate-700">${fruit.family}</p>
            </div>
            <div>
              <p class="text-[10px] uppercase font-bold text-slate-400">
                Order
              </p>
              <p class="text-sm font-semibold text-slate-700">${fruit.order}</p>
            </div>
            <div>
              <p class="text-[10px] uppercase font-bold text-slate-400">
                Genus
              </p>
              <p class="text-sm font-semibold text-slate-700">${fruit.genus}</p>
            </div>
          </div>
        </div>

        <div class="p-5">
          <h3
            class="text-xs font-bold text-slate-500 uppercase mb-4 flex items-center"
          >
            <i class="fas fa-chart-simple mr-2"></i> Nutrition per 100g
          </h3>

          <div class="space-y-3">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="font-medium text-slate-600">Calories</span>
                <span class="font-bold text-slate-900">${fruit.nutritions.calories} kcal</span>
              </div>
              <div class="w-full bg-slate-100 h-1.5 rounded-full">
                <div
                  class="bg-orange-400 h-1.5 rounded-full"
                  style="width: ${fruit.nutritions.calories}px"
                ></div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div
                class="flex items-center justify-between border-b border-slate-100 pb-1"
              >
                <span class="text-xs text-slate-500">Fat</span>
                <span class="text-xs font-bold text-slate-800">${fruit.nutritions.fat}g</span>
              </div>
              <div
                class="flex items-center justify-between border-b border-slate-100 pb-1"
              >
                <span class="text-xs text-slate-500">Sugar</span>
                <span class="text-xs font-bold text-slate-800">${fruit.nutritions.sugar}g</span>
              </div>
              <div
                class="flex items-center justify-between border-b border-slate-100 pb-1"
              >
                <span class="text-xs text-slate-500">Carbs</span>
                <span class="text-xs font-bold text-slate-800">${fruit.nutritions.carbohydrates}g</span>
              </div>
              <div
                class="flex items-center justify-between border-b border-slate-100 pb-1"
              >
                <span class="text-xs text-slate-500">Protein</span>
                <span class="text-xs font-bold text-slate-800">${fruit.nutritions.protein}g</span>
              </div>
            </div>
          </div>
        </div>
      </div>`;
}