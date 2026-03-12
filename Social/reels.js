document.addEventListener('DOMContentLoaded', () => {
    
    const reelsContainer = document.getElementById('reels-container');
    const loadingSpinner = document.getElementById('loading-spinner');

    // We use a pool of open-source videos to simulate an infinite API feed
    const videoPool = [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    ];

    // Observers
    let playObserver;
    let infiniteScrollObserver;

    // Simulate an API call fetching 3 new reels at a time
    async function fetchMoreReels() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newReels = [];
                for (let i = 0; i < 3; i++) {
                    const randomVideo = videoPool[Math.floor(Math.random() * videoPool.length)];
                    const randomId = 'reel_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
                    
                    newReels.push({
                        id: randomId,
                        url: randomVideo,
                        user: `user_${Math.floor(Math.random() * 9999)}`,
                        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
                        desc: "Just another amazing day! ✨ Keep scrolling for more. #viral #trending",
                        audio: "Original Audio - Trending",
                        likes: Math.floor(Math.random() * 900) + 10 + "K",
                        comments: Math.floor(Math.random() * 5000)
                    });
                }
                resolve(newReels);
            }, 800); // 800ms artificial network delay
        });
    }

    async function loadInitialReels() {
        const reels = await fetchMoreReels();
        loadingSpinner.style.display = 'none';
        appendReelsToDOM(reels);
        setupObservers();
    }

    function appendReelsToDOM(reels) {
        // Get currently saved bookmarks to highlight the icon if already saved
        const savedBookmarks = JSON.parse(localStorage.getItem('flashBookmarks')) || [];

        reels.forEach((video) => {
            const isSaved = savedBookmarks.some(b => b.id === video.id);
            const bookmarkIconClass = isSaved ? 'fa-solid text-blue-400' : 'fa-regular';

            const reelElement = document.createElement('div');
            reelElement.className = "reel-item relative w-full h-full snap-start bg-black flex justify-center items-center overflow-hidden";
            // Store data directly on the element for easy saving later
            reelElement.dataset.reelInfo = JSON.stringify(video);

            reelElement.innerHTML = `
                <video src="${video.url}" class="absolute inset-0 w-full h-full object-cover cursor-pointer" loop muted playsinline></video>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>

                <div class="absolute right-4 bottom-24 md:bottom-20 flex flex-col gap-6 items-center z-10">
                    <div class="relative group cursor-pointer hover:scale-105 transition-transform">
                        <img src="${video.avatar}" class="w-12 h-12 rounded-full border-2 border-white object-cover">
                    </div>
                    
                    <button class="text-white flex flex-col items-center gap-1 group active:scale-75 transition-transform">
                        <div class="p-2 rounded-full group-hover:bg-gray-800/50 transition-colors"><i class="fa-solid fa-heart text-3xl drop-shadow-md"></i></div>
                        <span class="text-xs font-semibold drop-shadow-md">${video.likes}</span>
                    </button>
                    
                    <button class="text-white flex flex-col items-center gap-1 group active:scale-75 transition-transform">
                        <div class="p-2 rounded-full group-hover:bg-gray-800/50 transition-colors"><i class="fa-solid fa-comment text-3xl drop-shadow-md"></i></div>
                        <span class="text-xs font-semibold drop-shadow-md">${video.comments}</span>
                    </button>
                    
                    <button class="bookmark-btn text-white flex flex-col items-center gap-1 group active:scale-75 transition-transform">
                        <div class="p-2 rounded-full group-hover:bg-gray-800/50 transition-colors">
                            <i class="${bookmarkIconClass} fa-bookmark text-3xl drop-shadow-md transition-colors"></i>
                        </div>
                    </button>

                    <div class="mt-2 relative w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center bg-black overflow-hidden animate-spin-slow">
                        <img src="${video.avatar}" class="w-6 h-6 rounded-full object-cover">
                    </div>
                </div>

                <div class="absolute left-4 bottom-24 md:bottom-20 text-white max-w-[70%] z-10">
                    <h3 class="font-bold text-lg drop-shadow-md">@${video.user}</h3>
                    <p class="text-sm mt-2 line-clamp-2 drop-shadow-md">${video.desc}</p>
                </div>
            `;

            // Add click event for bookmarking
            const bookmarkBtn = reelElement.querySelector('.bookmark-btn');
            bookmarkBtn.addEventListener('click', () => toggleBookmark(video, bookmarkBtn));

            // Add click event for play/pause
            const videoEl = reelElement.querySelector('video');
            videoEl.addEventListener('click', () => {
                videoEl.paused ? videoEl.play() : videoEl.pause();
            });

            reelsContainer.appendChild(reelElement);
        });

        // Re-connect the infinite scroll observer to the NEW last element
        if (infiniteScrollObserver) {
            infiniteScrollObserver.disconnect();
            const newLastReel = reelsContainer.lastElementChild;
            if (newLastReel) infiniteScrollObserver.observe(newLastReel);
        }

        // Connect the play/pause observer to the new elements
        const allReels = document.querySelectorAll('.reel-item');
        allReels.forEach(reel => playObserver.observe(reel));
    }

    function setupObservers() {
        // 1. Observer for Auto-Play / Auto-Pause
        playObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target.querySelector('video');
                if (entry.isIntersecting) {
                    video.play().catch(e => console.log("Autoplay blocked by browser."));
                } else {
                    video.pause();
                    video.currentTime = 0; 
                }
            });
        }, { root: reelsContainer, threshold: 0.6 });

        // 2. Observer for Infinite Scrolling
        infiniteScrollObserver = new IntersectionObserver(async (entries) => {
            const lastReel = entries[0];
            if (lastReel.isIntersecting) {
                // Show a mini loader at the bottom if you want, or just fetch quietly
                const moreReels = await fetchMoreReels();
                appendReelsToDOM(moreReels);
            }
        }, { root: reelsContainer, rootMargin: '0px 0px 200px 0px' }); // Trigger slightly before they hit the very bottom

        // Attach infinite scroll to the current last element
        const lastReelElement = reelsContainer.lastElementChild;
        if (lastReelElement) infiniteScrollObserver.observe(lastReelElement);
    }

    // Function to handle saving/removing from LocalStorage
    function toggleBookmark(videoData, buttonEl) {
        const icon = buttonEl.querySelector('i');
        let savedBookmarks = JSON.parse(localStorage.getItem('flashBookmarks')) || [];
        
        const existingIndex = savedBookmarks.findIndex(b => b.id === videoData.id);

        if (existingIndex > -1) {
            // It's already saved, so remove it
            savedBookmarks.splice(existingIndex, 1);
            icon.className = 'fa-regular fa-bookmark text-3xl drop-shadow-md transition-colors';
        } else {
            // Not saved yet, add it! We add a 'type' so the bookmark page knows it's a Reel
            videoData.type = 'Reel';
            videoData.savedAt = Date.now();
            savedBookmarks.push(videoData);
            icon.className = 'fa-solid fa-bookmark text-blue-400 text-3xl drop-shadow-md transition-colors';
        }

        // Save back to local storage
        localStorage.setItem('flashBookmarks', JSON.stringify(savedBookmarks));
    }

    // Initialize the page
    loadInitialReels();
});