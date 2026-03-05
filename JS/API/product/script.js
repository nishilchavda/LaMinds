function Userdata() {
    fetch("https://dummyjson.com/products?limit=50").then(function (rawData){
        console.log(rawData);
        return rawData.json();
    }).then((data)=>{
        console.log(data);

        data.products.forEach(product => {
            RenderUI(product)
        });
    })
    .catch((err)=>{
        console.log(err);
    });
}
Userdata();

function RenderUI(product) {
    let card = document.querySelector(".card");

    card.innerHTML += `<div
        class="flex min-h-screen items-center justify-center bg-slate-950 p-6"
      >
        <div class="group relative w-full max-w-sm">
          <div
            class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-20 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"
          ></div>

          <div
            class="relative flex flex-col overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl"
          >
            <div class="relative h-64 overflow-hidden bg-slate-800">
              <div
                class="absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full bg-pink-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-md"
              >
                ${product.discountPercentage}% OFF
              </div>

              <div
                class=" absolute top-4 right-4 z-10 rounded-full bg-slate-950/50 px-3 py-1 text-[10px] uppercase tracking-widest text-slate-300 backdrop-blur-md border border-slate-700"
              >
                ${product.category}
              </div>

              <img
                src=${product.thumbnail}
                alt="Product Thumbnail"
                class="h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 animate-float"
              />
            </div>

            <div class="p-6">
              <div class="mb-2 flex items-center justify-between">
                <p
                  class="text-xs font-medium text-pink-500 uppercase tracking-tighter"
                >
                  ${product.brand}
                </p>
                <div class="flex items-center gap-1">
                  <span class="text-sm font-bold text-yellow-400">★</span>
                  <span class="text-xs text-slate-400">${product.rating}</span>
                </div>
              </div>

              <h3
                class="mb-2 text-xl font-semibold text-white group-hover:text-pink-400 transition-colors"
              >
                ${product.title}
              </h3>

              <p
                class="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400"
              >
                ${product.description}
              </p>

              <div class="mb-6 flex items-end justify-between">
                <div>
                  <span class="text-2xl font-bold text-white">$${product.price}</span>
                </div>
                <div class="text-right">
                  <p class="text-[10px] text-slate-500 uppercase">
                    Availability
                  </p>
                  <p class="text-xs font-medium text-emerald-400">
                    ${product.stock} in stock
                  </p>
                </div>
              </div>

              <button
                class="w-full relative group/btn overflow-hidden rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 p-px font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]"
              >
                <div
                  class="relative flex items-center justify-center gap-2 rounded-[11px] bg-slate-900 px-6 py-3 transition-all duration-300 group-hover/btn:bg-transparent"
                >
                  <span>Add to Cart</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>`;
}

RenderUI();