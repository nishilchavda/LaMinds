function UserData() {
    fetch("https://api.disneyapi.dev/character")
    .then(function (rawData){
        return rawData.json();
    })
    .then((data)=>{
        data.data.forEach(user => {
            RenderUI(user);
            console.log(user);
        });

        
    })
    .catch((err)=>{
        console.log(err);
    })
}
UserData();

function RenderUI(user) {
    let card = document.querySelector(".card");
    card.innerHTML += `
            <div class="character-card rounded-[2.5rem] p-6 relative overflow-hidden group">
                <div class="absolute inset-0 shimmer-gold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div class="relative h-72 w-full rounded-[2rem] overflow-hidden mb-6 shadow-2xl">
                    <img src=${user.imageUrl}
                         alt="Achilles" 
                         class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    <div class="absolute bottom-4 left-6">
                        <span class="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-1 block">ID: ${user._id}</span>
                        <h2 class="text-3xl font-bold text-white tracking-tight">${user.name}</h2>
                    </div>
                </div>

                <div class="space-y-4 px-2">
                    <div class="flex items-start gap-3">
                        <div class="mt-1 h-6 w-6 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                            <i class="fas fa-film text-[10px] text-yellow-500"></i>
                        </div>
                        <div class="flex-1">
                            <p class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Feature Films</p>
                            <p class="text-sm text-slate-200">${user.films}</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <div class="mt-1 h-6 w-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                            <i class="fas fa-tv text-[10px] text-blue-500"></i>
                        </div>
                        <div class="flex-1">
                            <p class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">TV Series</p>
                            <p class="text-sm text-slate-200">${user.tvShows}</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <div class="mt-1 h-6 w-6 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                            <i class="fas fa-gamepad text-[10px] text-purple-500"></i>
                        </div>
                        <div class="flex-1">
                            <p class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Video Games</p>
                            <p class="text-sm text-slate-200">${user.videoGames}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                    <a href="https://api.disneyapi.dev/characters/112" class="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                        Raw Profile
                    </a>
                    <button class="bg-white text-black text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-tighter hover:bg-yellow-500 transition-all active:scale-95">
                        Favorite
                    </button>
                </div>
            </div>`;
}