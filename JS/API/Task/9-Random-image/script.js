function UserData(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (rawData){
        console.log(rawData);
        return rawData.json();
    })
    .then((data)=>{
        RenderUi(data);
        console.log(data.message);
    })
    .catch((err)=>{
        console.log(err);
    })
}
UserData();

function refresh() {
    UserData();
}

function RenderUi(data) {
    let card = document.querySelector(".card");
    card.innerHTML = `<div class="relative max-w-sm w-full">
      <i
        class="fa-solid fa-paw absolute -top-12 -right-8 text-yellow-500 text-8xl opacity-50 floating-paw"
      ></i>

      <div
        class="dog-card bg-white p-4 pb-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-4 border-black rounded-sm"
      >
        <div
          class="relative aspect-square overflow-hidden border-4 border-black bg-gray-100"
        >
          <img
            src=${data.message}
            alt="Welsh Terrier"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div
            class="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest"
          >
            Status: ${data.status}
          </div>
        </div>

        <div class="mt-6 text-center">
        </div>

        <div class="mt-8">
          <button
            onClick="refresh()"    class="w-full group relative flex items-center justify-center gap-3 bg-red-500 hover:bg-black text-white py-4 font-bold text-lg uppercase tracking-tighter transition-all active:translate-y-1"
          >
            <i
              class="fa-solid fa-bone group-hover:rotate-45 transition-transform"
            ></i>
            Get New Dog
            <div
              class="absolute inset-0 border-2 border-black translate-x-1 translate-y-1 -z-10"
            ></div>
          </button>
        </div>
      </div>

      <div class="mt-8 text-center">
        <a
          href="https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg"
          target="_blank"
          class="text-black/60 text-xs font-bold hover:text-black transition-colors underline decoration-2 underline-offset-4"
        >
          VIEW SOURCE RAW URL
        </a>
      </div>
    </div>`;
}