function UserData() {
    fetch("https://answerbook.david888.com/RandomPassword")
    .then(function (rawData){
        return rawData.json();
    })
    .then((data)=>{
        RenderUI(data);
    })
    .catch((err)=>{
        console.log(err)
    })
}
UserData();

function refresh(){
    UserData();
}

function RenderUI(data) {
    let card = document.querySelector(".card");
    card.innerHTML = `<div class="w-full max-w-md">
        <div class="glass-panel rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div class="absolute inset-0 shimmer pointer-events-none"></div>

            <div class="flex items-center justify-between mb-10">
                <div class="flex items-center gap-3">
                    <div class="h-10 w-10 rounded-xl bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30">
                        <i class="fas fa-shield-halved text-indigo-400"></i>
                    </div>
                    <div>
                        <h2 class="text-white font-bold text-lg leading-none">PassGen</h2>
                        <span class="text-indigo-400 text-[10px] uppercase tracking-[0.2em]">Secure Vault</span>
                    </div>
                </div>
                <div class="text-emerald-500 flex items-center gap-2 text-xs font-bold">
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ENCRYPTED
                </div>
            </div>

            <div class="relative group mb-6">
                <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div class="relative bg-black/40 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                    <span class="font-mono text-xl md:text-2xl text-white tracking-wider break-all">
                        ${data.RandomPassword}
                    </span>
                    <button class="ml-4 text-slate-400 hover:text-white transition-colors active:scale-90">
                        <i class="far fa-copy text-xl"></i>
                    </button>
                </div>
            </div>

            <div class="space-y-3 mb-8">
                <div class="flex justify-between items-center px-1">
                    <span class="text-slate-400 text-xs font-medium uppercase tracking-widest">Strength</span>
                    <span class="text-emerald-400 text-xs font-bold">EXCELLENT</span>
                </div>
                <div class="flex gap-1.5 h-1.5">
                    <div class="flex-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    <div class="flex-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    <div class="flex-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    <div class="flex-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
            </div>

            <button onClick="refresh()" class="w-full bg-white hover:bg-indigo-50 text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                <i class="fas fa-arrows-rotate text-sm"></i>
                Generate New Key
            </button>

            <div class="mt-6 flex justify-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                <span class="flex items-center gap-1.5"><i class="fas fa-check text-emerald-500/50"></i> Symbols</span>
                <span class="flex items-center gap-1.5"><i class="fas fa-check text-emerald-500/50"></i> Numbers</span>
                <span class="flex items-center gap-1.5"><i class="fas fa-check text-emerald-500/50"></i> Mixed Case</span>
            </div>
        </div>
        
        <p class="text-center mt-8 text-slate-600 text-xs">
            Keys are generated locally and never stored.
        </p>
    </div>`;
}