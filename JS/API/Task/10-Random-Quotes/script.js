function UserData() {
    fetch("https://corsproxy.io/?https://buddha-api.com/api/random")
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

function refresh(){
    UserData();
}

function RenderUI(data) {
    let card = document.querySelector(".card");

    card.innerHTML = `<div class="relative w-full max-w-2xl">
        <div class="absolute -top-20 -left-20 w-64 h-64 bg-orange-200/40 rounded-full blur-[100px]"></div>

        <div class="float-slow relative bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-[3rem] p-10 md:p-16 text-center">
            
            <div class="absolute -top-12 left-1/2 -translate-x-1/2">
                <div class="relative group">
                    <div class="absolute inset-0 bg-orange-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img src=${data.byImage} 
                         alt="Buddha" 
                         class="relative w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover bg-white">
                </div>
            </div>

            <div class="mt-8 space-y-8">
                <i class="fa-solid fa-quote-left text-3xl text-orange-200"></i>
                
                <h2 class="serif-quote text-3xl md:text-4xl text-slate-800 leading-relaxed italic antialiased">
                    ${data.text}
                </h2>

                <div class="flex flex-col items-center gap-1">
                    <span class="h-px w-12 bg-orange-200 mb-2"></span>
                    <h3 class="font-semibold text-slate-900 tracking-widest uppercase text-sm">${data.byName}</h3>
                    <p class="text-xs text-slate-400 font-medium tracking-tighter">Source: ${data.id}</p>
                </div>
            </div>

            <div class="mt-12 flex justify-center gap-4">
                <button class="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                    <i class="fa-solid fa-leaf"></i>
                    Reflect
                </button>
                <button class="p-3 border border-slate-200 text-slate-400 rounded-full hover:bg-white hover:text-orange-500 transition-all">
                    <i class="fa-solid fa-share-nodes"></i>
                </button>
            </div>
        </div>

        <div class="mt-12 text-center">
            <button onClick="refresh()" class="group text-slate-400 hover:text-slate-600 transition-colors">
                <p class="text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">New Wisdom</p>
                <div class="flex justify-center">
                    <i class="fa-solid fa-chevron-down animate-bounce group-hover:text-orange-500"></i>
                </div>
            </button>
        </div>
    </div>`;
}