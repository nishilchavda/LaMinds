function UserData() {
  fetch("https://ghibliapi.vercel.app/films")
    .then(function (rawData) {
      return rawData.json();
    })
    .then((data) => {
      data.forEach((user) => {
        RenderUI(user);
      });
    });
}
UserData();
function RenderUI(user) {
  let card = document.querySelector(".card");
  card.innerHTML += `<div class="movie-card relative rounded-[2.5rem] overflow-hidden group shadow-2xl">
            <div class="absolute inset-0 z-0">
                <img src=${user.movie_banner} 
                     class="w-full h-full object-cover opacity-20 blur-md scale-110">
                <div class="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent"></div>
            </div>

            <div class="relative z-10 grid md:grid-cols-12 gap-8 p-8 md:p-12">
                
                <div class="md:col-span-4 lg:col-span-3">
                    <div class="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                        <img src=${user.image}
                             alt="Castle in the Sky" 
                             class="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute top-4 right-4 rt-badge text-white px-3 py-1 rounded-full text-xs font-800 flex items-center gap-1 shadow-lg">
                            <i class="fas fa-apple-whole text-[10px]"></i>
                            ${user.rt_score}%
                        </div>
                    </div>
                </div>

                <div class="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
                    <div class="space-y-1 mb-6">
                        <span class="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">${user.release_date} • ${user.running_time} min</span>
                        <h1 class="text-4xl md:text-5xl font-800 text-white tracking-tight">${user.title}</h1>
                        <p class="jp-font text-lg text-white/40 font-light">${user.original_title} <span class="text-sm italic ml-2">${user.original_title_romanised}</span></p>
                    </div>

                    <p class="text-slate-300 leading-relaxed text-sm md:text-base mb-8 max-w-3xl line-clamp-3 md:line-clamp-none">
                        ${user.description}
                    </p>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-t border-white/5 pt-8">
                        <div>
                            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Director</p>
                            <p class="text-sm text-white font-semibold">${user.director}</p>
                        </div>
                        <div>
                            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Producer</p>
                            <p class="text-sm text-white font-semibold">${user.producer}</p>
                        </div>
                        <div>
                            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Characters</p>
                            <p class="text-sm text-white font-semibold">${user.people} People</p>
                        </div>
                        <div class="flex items-end">
                            <button class="bg-white hover:bg-blue-500 hover:text-white transition-all text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-tighter">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}
