function jokeData() {
  fetch("https://teehee.dev/api/joke")
    .then(function (rawData) {
      console.log(rawData);
      return rawData.json();
    })
    .then((data) => {
        RenderUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
jokeData();

function refresh(){
    jokeData();

}

function RenderUI(data) {
  let card = document.querySelector(".card");

  card.innerHTML = `<div class="w-full max-w-xl bg-[#0a0a0a] border-2 border-green-500/30 rounded-lg overflow-hidden terminal-shadow">
        
        <div class="bg-[#111] border-b-2 border-green-500/30 px-4 py-2 flex justify-between items-center">
            <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span class="text-[10px] text-green-500/50 uppercase tracking-tighter">joke-processor.exe</span>
            <span class="text-[10px] text-green-500/50 font-bold">v1.0.4</span>
        </div>

        <div class="p-8 space-y-8">
            
            <div class="space-y-2">
                <div class="flex items-center gap-2">
                    <span class="text-green-500 text-sm">guest@teehee:~$</span>
                    <span class="text-zinc-500 text-xs">fetch --id ${data.id}</span>
                </div>
                <h2 class="text-xl md:text-2xl text-white leading-relaxed typing-cursor">
                    ${data.question}
                </h2>
            </div>

            <div class="bg-green-500/5 border-l-4 border-green-500 p-4 transform transition-all hover:scale-[1.01]">
                <p class="text-green-500 font-bold text-2xl glitch-hover">
                    > ${data.answer} 
                </p>
            </div>

            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                    <p class="text-[10px] text-zinc-500 uppercase">Permalink</p>
                    <a href="https://teehee.dev/joke" class="text-[11px] text-green-500/80 hover:underline truncate block">
                        teehee.dev/joke/
                    </a>
                </div>
                <div class="text-right">
                    <p class="text-[10px] text-zinc-500 uppercase">Status</p>
                    <p class="text-[11px] text-blue-400">RESOLVED [200]</p>
                </div>
            </div>

            <div class="flex justify-center pt-4">
                <button onClick="refresh()" class="group relative px-8 py-3 bg-green-500 text-black font-bold text-sm uppercase tracking-widest hover:bg-white transition-all active:translate-y-1">
                    <span class="flex items-center gap-2">
                        <i class="fas fa-terminal text-xs"></i>
                        Execute Refresh
                    </span>
                    <div class="absolute inset-0 border-2 border-green-500 translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                </button>
            </div>
        </div>
    </div>`;
}
