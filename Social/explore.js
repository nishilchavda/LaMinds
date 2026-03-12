document.addEventListener('DOMContentLoaded', () => {
    
    const exploreGrid = document.getElementById('explore-grid');
    const loadingSpinner = document.getElementById('loading-spinner');

    let explorePage = 1;
    let isLoading = false;
    let infiniteScrollObserver;

    // --- MODAL ELEMENTS ---
    const modal = document.getElementById('post-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');
    const modalImage = document.getElementById('modal-image');
    const modalAvatar = document.getElementById('modal-avatar');
    const modalUsername = document.getElementById('modal-username');
    const modalCaptionAvatar = document.getElementById('modal-caption-avatar');
    const modalCaptionUsername = document.getElementById('modal-caption-username');
    const modalCaption = document.getElementById('modal-caption');
    const modalLikes = document.getElementById('modal-likes');

    async function loadExploreData() {
        if (isLoading) return;
        isLoading = true;
        loadingSpinner.style.display = 'flex';

        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${explorePage}&limit=15`);
            const photos = await response.json();
            const savedBookmarks = JSON.parse(localStorage.getItem('flashBookmarks')) || [];

            photos.forEach((photo, index) => {
                const likes = Math.floor(Math.random() * 5000) + 100;
                const comments = Math.floor(Math.random() * 500) + 10;
                const postId = `explore_${explorePage}_${index}`;
                
                const isFeatured = (index === 0 && explorePage === 1);
                const spanClass = isFeatured ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1';

                const isSaved = savedBookmarks.some(b => b.id === postId);
                const bookmarkIconClass = isSaved ? 'fa-solid text-blue-400' : 'fa-regular';

                // Add all necessary data to the object
                const postData = {
                    id: postId,
                    type: 'Post',
                    url: photo.download_url,
                    user: `creator_${Math.floor(Math.random() * 999)}`,
                    avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
                    desc: "Found this amazing gem on the explore page! 📸",
                    likes: likes // Added likes here
                };

                const gridItem = document.createElement('div');
                // Added a specific class 'explore-post' for targeting clicks
                gridItem.className = `explore-post ${spanClass} relative group overflow-hidden rounded-lg sm:rounded-xl cursor-pointer bg-gray-200 aspect-square sm:aspect-auto sm:h-64 ${isFeatured ? 'sm:h-full' : ''}`;
                
                // Store the postData object directly on the element
                gridItem.dataset.postInfo = JSON.stringify(postData);

                gridItem.innerHTML = `
                    <img src="${photo.download_url}" alt="Explore Image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                    
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                        <div class="flex gap-4 text-white font-bold text-sm sm:text-base mb-3 pointer-events-none">
                            <div class="flex items-center gap-1 sm:gap-2"><i class="fa-solid fa-heart"></i><span>${formatNumber(likes)}</span></div>
                            <div class="flex items-center gap-1 sm:gap-2"><i class="fa-solid fa-comment"></i><span>${comments}</span></div>
                        </div>
                        <button class="bookmark-btn pointer-events-auto text-white text-2xl active:scale-75 transition-transform" data-post='${JSON.stringify(postData)}'>
                            <i class="${bookmarkIconClass} fa-bookmark drop-shadow-md"></i>
                        </button>
                    </div>`;

                // Bookmark functionality for explore items
                const bookmarkBtn = gridItem.querySelector('.bookmark-btn');
                bookmarkBtn.addEventListener('click', (e) => {
                    e.stopPropagation(); // VERY IMPORTANT: Prevents the modal from opening when you click bookmark
                    const icon = bookmarkBtn.querySelector('i');
                    let currentBookmarks = JSON.parse(localStorage.getItem('flashBookmarks')) || [];
                    const existingIndex = currentBookmarks.findIndex(b => b.id === postData.id);

                    if (existingIndex > -1) {
                        currentBookmarks.splice(existingIndex, 1);
                        icon.className = 'fa-regular fa-bookmark drop-shadow-md';
                    } else {
                        postData.savedAt = Date.now();
                        currentBookmarks.push(postData);
                        icon.className = 'fa-solid fa-bookmark text-blue-400 drop-shadow-md';
                    }
                    localStorage.setItem('flashBookmarks', JSON.stringify(currentBookmarks));
                });

                exploreGrid.appendChild(gridItem);
            });

            explorePage++;
            isLoading = false;
            loadingSpinner.style.display = 'none';
            setupObserver();
            
            // Call this after new items are added to ensure they get click listeners
            setupModalTriggers(); 

        } catch (error) {
            console.error("Error loading explore feed:", error);
            isLoading = false;
        }
    }

    function setupObserver() {
        if (infiniteScrollObserver) infiniteScrollObserver.disconnect();

        infiniteScrollObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadExploreData();
            }
        }, { rootMargin: '0px 0px 200px 0px' });

        const lastItem = exploreGrid.lastElementChild;
        if (lastItem) infiniteScrollObserver.observe(lastItem);
    }

    function formatNumber(num) {
        return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
    }

    // --- MODAL LOGIC --- //

    function setupModalTriggers() {
        const posts = document.querySelectorAll('.explore-post');
        
        // Remove existing listeners to prevent duplicates if this function runs multiple times
        posts.forEach(post => {
             // Clone node to strip existing event listeners before adding a new one
            const newPost = post.cloneNode(true);
            if(post.parentNode) {
                post.parentNode.replaceChild(newPost, post);
            }
            
            newPost.addEventListener('click', () => {
                const data = JSON.parse(newPost.dataset.postInfo);

                // Populate Modal Data
                modalImage.src = data.url;
                modalAvatar.src = data.avatar;
                modalUsername.innerText = `@${data.user}`;
                modalCaptionAvatar.src = data.avatar;
                modalCaptionUsername.innerText = `@${data.user}`;
                modalCaption.innerText = data.desc;
                modalLikes.innerText = `${formatNumber(data.likes)} likes`;

                openModal();
            });

            // Need to re-attach bookmark event listener since we cloned the node
            const bookmarkBtn = newPost.querySelector('.bookmark-btn');
            bookmarkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const icon = bookmarkBtn.querySelector('i');
                const postData = JSON.parse(newPost.dataset.postInfo);
                let currentBookmarks = JSON.parse(localStorage.getItem('flashBookmarks')) || [];
                const existingIndex = currentBookmarks.findIndex(b => b.id === postData.id);

                if (existingIndex > -1) {
                    currentBookmarks.splice(existingIndex, 1);
                    icon.className = 'fa-regular fa-bookmark drop-shadow-md';
                } else {
                    postData.savedAt = Date.now();
                    currentBookmarks.push(postData);
                    icon.className = 'fa-solid fa-bookmark text-blue-400 drop-shadow-md';
                }
                localStorage.setItem('flashBookmarks', JSON.stringify(currentBookmarks));
            });
        });
    }

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
            modalImage.src = ""; // Clear image to prevent seeing old image on next open
        }, 300);
    }

    // Event Listeners for closing modal
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Start fetching
    loadExploreData();
});