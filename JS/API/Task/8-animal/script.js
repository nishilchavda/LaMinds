function animalData() {
    fetch("https://extinct-api.herokuapp.com/api/v1/animal/")
    .then(function (rawData){
        return rawData.json();
    })
    .then((data1)=>{
            RenderUI(data1);
            console.log(data1.data)
    })
    .catch((err)=>{
        console.log(err);
    })
}
animalData();

function refresh(){
    animalData();
}

function RenderUI(data1){

    let animal = data1.data[Math.floor(Math.random() * data1.data.length)];
    let card = document.querySelector(".card");
    card.innerHTML = `<div class="max-w-4xl mx-auto">
        <div class="mb-8 flex items-center gap-2">
            <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Database Connection: ${data1.status}</span>
        </div>
        <article class="archive-card relative bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-200 overflow-hidden rounded-sm">
            
            <div class="grid md:grid-cols-12">
                
                <div class="md:col-span-5 border-r border-stone-100 p-8 bg-stone-50/50">
                    <div class="sticky top-8">
                        <div class="relative group">
                            <img src="https://via.placeholder.com/400"
                                 alt="Skeleton" 
                                 class="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border border-stone-300 p-2 bg-white shadow-inner">
                            <div class="absolute inset-0 border border-black/5 pointer-events-none"></div>
                        </div>
                        
                        <div class="mt-8 space-y-4">
                            <div class="border-l-2 border-amber-700 pl-4">
                                <p class="text-[10px] uppercase font-bold text-stone-400 tracking-tighter">Last Recorded</p>
                                <p class="text-xl font-bold text-stone-800 tracking-tight">${animal.lastRecord}</p>
                            </div>
                            <div class="border-l-2 border-stone-200 pl-4">
                                <p class="text-[10px] uppercase font-bold text-stone-400 tracking-tighter">Status</p>
                                <p class="text-sm font-bold text-red-700 uppercase">Extinct (Hunted)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-7 p-8 md:p-12">
                    <header class="mb-8">
                        <h1 class="serif text-4xl text-stone-900 mb-2 italic">${animal.commonName}</h1>
                        <p class="text-amber-800 font-medium italic serif tracking-wide">${animal.binomialName}</p>
                    </header>

                    <div class="space-y-6">
                        <section>
                            <h3 class="text-[11px] font-bold uppercase text-stone-400 mb-2 flex items-center gap-2">
                                <i class="fas fa-location-dot"></i> Known Range
                            </h3>
                            <p class="text-sm text-stone-600 leading-relaxed italic">
                                ${animal.location}
                            </p>
                        </section>

                        <section>
                            <h3 class="text-[11px] font-bold uppercase text-stone-400 mb-2">Observation Log</h3>
                            <p class="text-stone-700 leading-relaxed text-sm antialiased">
                                ${animal.shortDesc}                            
                            </p>
                        </section>

                        <footer class="pt-8 flex items-center justify-between border-t border-stone-100">
                            <a href="https://en.wikipedia.org/wiki/Steller%27s_sea_cow" target="_blank" class="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-800 hover:text-amber-800 transition-colors">
                                <span>Full Wiki Archive</span>
                                <i class="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                            </a>
                            
                            <button onClick="refresh()" class="bg-stone-900 text-stone-100 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-amber-900 transition-all active:scale-95 shadow-lg shadow-stone-200">
                                <i class="fas fa-rotate-right mr-2"></i> Next Specimen
                            </button>
                        </footer>
                    </div>
                </div>

            </div>
        </article>
    </div>`;
}