document.addEventListener('DOMContentLoaded', () => {
    
    const bookmarksGrid = document.getElementById('bookmarks-grid');
    const loadingSpinner = document.getElementById('loading-spinner');

    // Modal Elements
    const modal = document.getElementById('post-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');
    const modalMediaContainer = document.getElementById('modal-media-container');
    const modalAvatar = document.getElementById('modal-avatar');
    const modalUsername = document.getElementById('modal-username');
    const modalCaptionAvatar = document.getElementById('modal-caption-avatar');
    const modalCaptionUsername = document.getElementById('modal-caption-username');
    const modalCaption = document.getElementById('modal-caption');

    function loadBookmarksFromStorage() {
        loadingSpinner.style.display = 'none';
        const savedBookmarks = JSON.parse(localStorage.getItem('flashBookmarks')) || [];

        if (savedBookmarks.length === 0) {
            renderEmptyState();
            return;
        }

        let gridHTML = "";

        // Reverse so the newest saved items show up first
        savedBookmarks.reverse().forEach((item, index) => {
            const delay = (index % 4) * 100; 
            
            const isReel = item.type === 'Reel';
            const mediaHTML = isReel 
                ? `<video src="${item.url}#t=0.1" class="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 pointer-events-none"></video>`
                : `<img src="${item.url}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none">`;
            
            const badgeHTML = isReel
                ? `<div class="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded"><i class="fa-solid fa-video mr-1"></i> Reel</div>`
                : `<div class="absolute top-2 left-2 bg-blue-500/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded"><i class="fa-solid fa-image mr-1"></i> Post</div>`;

            // Store the raw item data on the card for the modal to read
            gridHTML += `
            <div class="bookmark-card bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden group animate-fade-in-up transition-all duration-300 hover:shadow-lg cursor-pointer" 
                 style="animation-delay: ${delay}ms;" 
                 data-id="${item.id}"
                 data-info='${JSON.stringify(item)}'>
                
                <div class="relative h-48 sm:h-64 overflow-hidden bg-black">
                    ${mediaHTML}
                    ${badgeHTML}
                    
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex justify-center items-center pointer-events-none">
                        <button class="remove-btn pointer-events-auto bg-white/90 hover:bg-red-500 hover:text-white text-gray-800 font-semibold text-sm px-4 py-2 rounded-full shadow-lg transition-colors transform active:scale-95 flex items-center gap-2">
                            <i class="fa-solid fa-bookmark-slash"></i> Unsave
                        </button>
                    </div>
                </div>
                
                <div class="p-3 flex items-center gap-3">
                    <img src="${item.avatar}" class="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700">
                    <div>
                        <h3 class="font-bold text-gray-900 dark:text-white text-sm line-clamp-1">@${item.user}</h3>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">${item.desc}</p>
                    </div>
                </div>
            </div>`;
        });

        bookmarksGrid.innerHTML = gridHTML;
        setupInteractions();
    }

    function setupInteractions() {
        const cards = document.querySelectorAll('.bookmark-card');
        
        cards.forEach(card => {
            // 1. Handle Unsaving
            const removeBtn = card.querySelector('.remove-btn');
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent modal from opening
                const idToRemove = card.dataset.id;
                
                let savedBookmarks = JSON.parse(localStorage.getItem('flashBookmarks')) || [];
                savedBookmarks = savedBookmarks.filter(b => b.id !== idToRemove);
                localStorage.setItem('flashBookmarks', JSON.stringify(savedBookmarks));

                card.style.transform = 'scale(0.9)';
                card.style.opacity = '0';
                
                setTimeout(() => {
                    card.remove();
                    if (savedBookmarks.length === 0) renderEmptyState();
                }, 300);
            });

            // 2. Handle Opening Modal
            card.addEventListener('click', () => {
                const data = JSON.parse(card.dataset.info);

                modalAvatar.src = data.avatar;
                modalUsername.innerText = `@${data.user}`;
                modalCaptionAvatar.src = data.avatar;
                modalCaptionUsername.innerText = `@${data.user}`;
                modalCaption.innerText = data.desc;

                // Handle Media Type (Video vs Image)
                if (data.type === 'Reel') {
                    modalMediaContainer.innerHTML = `<video src="${data.url}" class="w-full h-full object-contain" autoplay loop muted playsinline></video>`;
                } else {
                    modalMediaContainer.innerHTML = `<img src="${data.url}" class="w-full h-full object-contain">`;
                }

                openModal();
            });
        });
    }

    // --- MODAL LOGIC ---
    function openModal() {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        }, 10);
    }

    function closeModal() {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            modalMediaContainer.innerHTML = ''; // Clear media to stop audio/video playing
        }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function renderEmptyState() {
        bookmarksGrid.style.display = 'flex';
        bookmarksGrid.innerHTML = `
            <div class="w-full py-20 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                <i class="fa-regular fa-folder-open text-6xl mb-4 text-gray-300 dark:text-gray-600"></i>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">No bookmarks left</h3>
                <p class="text-sm">Explore and save posts to see them here.</p>
                <a href="index.html" class="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition">Go to Home</a>
            </div>
        `;
    }

    loadBookmarksFromStorage();
});