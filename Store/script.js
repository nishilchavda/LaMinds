function CardData() {
    fetch("https://dummyjson.com/products?limit=4")
    .then(function (rawData){
        return rawData.json();
    })
    .then((data)=>{
        data.products.forEach(card => {
            featureCard(card);
        });
    })
}

CardData();

function featureCard (card) {
    let product = document.querySelector("#product-grid");
    product.innerHTML += `<div class="group relative flex flex-col bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
          
          <div class="absolute top-4 left-4 z-20 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-md">
            New Arrival
          </div>

          <div class="relative h-72 w-full overflow-hidden bg-stone-100">
            <img 
              src="${card.images}" 
              class="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
              alt="Fresh Berries" 
            />
          </div>

          <div class="p-6 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <div>
                <p class="text-xs text-stone-400 uppercase tracking-widest mb-1">Groceries</p>
                <h3 class="text-lg font-medium text-stone-900 leading-tight">Fresh Berries Mix</h3>
              </div>
              <p class="text-lg font-serif font-bold text-stone-800">$12.99</p>
            </div>

            <div class="flex items-center gap-2 mb-4 text-xs">
              <div class="flex items-center text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-stone-800 font-bold ml-1">4.96</span>
                <span class="text-stone-400 font-normal ml-1">(76 reviews)</span>
              </div>
              <span class="text-stone-300">•</span>
              <span class="bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">0.5 Km</span>
            </div>

            <p class="text-sm text-stone-500 mb-6 line-clamp-2 font-light">
              Premium, hand-picked seasonal berries. Perfect for healthy snacking or culinary creations.
            </p>

            <button class="mt-auto w-full bg-stone-900 text-white font-semibold py-3 rounded-sm hover:bg-amber-600 transition-colors uppercase tracking-widest text-xs flex justify-center items-center gap-2">
              <i class="fa-solid fa-bag-shopping"></i> Add to Bag
            </button>
          </div>
        </div>`
}