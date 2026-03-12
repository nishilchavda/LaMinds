function UserData(){
    fetch("https://api.adviceslip.com/advice")
    .then(function (rawData){
        return rawData.json();
    })
    .then((data)=>{
        RenderUI(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}
UserData();

function refresh() {
    UserData();
}

function RenderUI(data) {
    let card = document.querySelector(".card");
    card.innerHTML = `<div class="max-w-xl w-full">
        <div class="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5 select-none">
            <h1 class="font-syne text-[20vw] leading-none uppercase text-blue-600">GROW</h1>
        </div>

        <div class="brutalist-card relative bg-white border-4 border-blue-600 p-8 md:p-12 overflow-hidden">
            
            <div class="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 font-space text-sm font-bold">
                SLIP #${data.slip.id}
            </div>

            <div class="mb-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-600">
                <i class="fa-solid fa-bolt-lightning text-2xl text-blue-600"></i>
            </div>

            <div class="space-y-6">
                <h2 class="font-syne text-5xl md:text-6xl text-blue-600 uppercase leading-[0.9] tracking-tighter">
                    ${data.slip.advice} <br>
                    
                </h2>
                
                <p class="font-space text-blue-900/60 font-medium text-lg uppercase tracking-widest pt-4">
                    Daily Life Advice
                </p>
            </div>

            <div class="mt-12">
                <button onClick="refresh()" class="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-black text-white px-10 py-5 font-space font-bold uppercase tracking-tighter transition-all active:scale-95">
                    <span>Give me more</span>
                    <i class="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </button>
            </div>

            <div class="absolute -bottom-6 -right-6 opacity-10">
                <i class="fa-solid fa-quote-right text-9xl text-blue-600"></i>
            </div>
        </div>
    </div>`;
}