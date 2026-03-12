document.addEventListener('DOMContentLoaded', () => {

    const profileGrid = document.getElementById('profile-grid');
    const loadingSpinner = document.getElementById('loading-spinner');
    const profileTabs = document.querySelectorAll('.flex.border-t.border-gray-200 > button');

    // Modal Elements
    const modal = document.getElementById('post-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');
    let modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const modalLikes = document.getElementById('modal-likes');
    const deletePostBtn = document.getElementById('delete-post-btn'); // Grab the delete button

    let currentOpenPostId = null; // Track which post is currently open in the modal

    async function loadUserPosts() {
        try {
            let gridHTML = "";

            // 1. LOAD USER'S REAL POSTS FROM LOCALSTORAGE
            const myPosts = JSON.parse(localStorage.getItem('flashMyPosts')) || [];

            myPosts.forEach((post, index) => {
                const delay = (index % 3) * 100;
                // Added data-id to track the specific post for deletion
                gridHTML += `
                <div class="profile-post relative group cursor-pointer bg-blue-50 dark:bg-gray-800 border border-blue-100 dark:border-gray-700 aspect-square overflow-hidden animate-fade-in-up sm:rounded-lg p-4 flex flex-col justify-center items-center text-center hover:shadow-md transition-all" 
                     style="animation-delay: ${delay}ms;"
                     data-id="${post.id}" 
                     data-type="text" data-desc="${post.desc}" data-likes="0">
                    
                    <i class="fa-solid fa-quote-left text-blue-200 dark:text-gray-600 text-3xl mb-2 absolute top-4 left-4"></i>
                    <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 line-clamp-4 z-10 relative pointer-events-none">${post.desc}</p>
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/40 transition-colors duration-300"></div>
                    <span class="absolute bottom-3 text-xs font-bold text-blue-500 uppercase tracking-wide">Text Post</span>
                </div>`;
            });

            // 2. LOAD MOCK IMAGES TO FILL THE REST OF THE GRID
            const response = await fetch("https://picsum.photos/v2/list?page=4&limit=15");
            const photos = await response.json();

            photos.forEach((photo, index) => {
                const likes = Math.floor(Math.random() * 2000) + 50;
                const comments = Math.floor(Math.random() * 200) + 5;
                const delay = ((index + myPosts.length) % 3) * 100;

                gridHTML += `
                <div class="profile-post relative group cursor-pointer bg-gray-200 dark:bg-gray-800 aspect-square overflow-hidden animate-fade-in-up sm:rounded-lg" 
                     style="animation-delay: ${delay}ms;"
                     data-id="mock_${index}"
                     data-type="image" data-url="${photo.download_url}" data-desc="Just another beautiful day! ✨" data-likes="${likes}">
                    
                    <img src="${photo.download_url}" alt="User Post" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                    
                    <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-bold text-sm sm:text-base">
                        <div class="flex items-center gap-2"><i class="fa-solid fa-heart"></i><span>${formatNumber(likes)}</span></div>
                        <div class="flex items-center gap-2 hidden sm:flex"><i class="fa-solid fa-comment"></i><span>${comments}</span></div>
                    </div>
                </div>`;
            });

            loadingSpinner.style.display = 'none';
            profileGrid.innerHTML = gridHTML;

            setupModalTriggers();

        } catch (error) {
            console.error("Error loading profile posts:", error);
            loadingSpinner.innerHTML = '<p class="text-red-500">Failed to load posts.</p>';
        }
    }

    // Handle Tab Switching
    profileTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            profileTabs.forEach(t => {
                t.classList.remove('text-blue-500', 'border-blue-500', 'dark:text-blue-400', 'dark:border-blue-400');
                t.classList.add('text-gray-500', 'border-transparent', 'dark:text-gray-400');
            });
            const clickedTab = e.currentTarget;
            clickedTab.classList.remove('text-gray-500', 'border-transparent', 'dark:text-gray-400');
            clickedTab.classList.add('text-blue-500', 'border-blue-500', 'dark:text-blue-400', 'dark:border-blue-400');

            profileGrid.innerHTML = '';
            loadingSpinner.style.display = 'flex';
            setTimeout(loadUserPosts, 600);
        });
    });

    function formatNumber(num) {
        return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
    }

    // --- MODAL LOGIC --- //

    function setupModalTriggers() {
        const posts = document.querySelectorAll('.profile-post');

        posts.forEach(post => {
            post.addEventListener('click', () => {
                const type = post.dataset.type;
                const desc = post.dataset.desc;
                const likes = post.dataset.likes;
                currentOpenPostId = post.dataset.id; // Store the ID of the clicked post

                // Populate Modal Data
                modalCaption.innerText = desc;
                modalLikes.innerText = `${formatNumber(likes)} likes`;

                if (type === 'image') {
                    const url = post.dataset.url;
                    modalImage.src = url;
                    modalImage.style.display = 'block';
                    deletePostBtn.classList.add('hidden'); // Hide trash can for mock images
                } else {
                    modalImage.style.display = 'none';
                    modalImage.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-blue-50 dark:bg-gray-800 p-8 text-center"><p class="text-xl font-bold text-gray-800 dark:text-white">${desc}</p></div>`;
                    deletePostBtn.classList.remove('hidden'); // SHOW trash can for user's own text posts
                }

                openModal();
            });
        });
    }

    // Handle Deleting a Post
    if (deletePostBtn) {
        deletePostBtn.addEventListener('click', () => {
            if (!currentOpenPostId) return;

            // 1. Remove from LocalStorage
            let myPosts = JSON.parse(localStorage.getItem('flashMyPosts')) || [];
            myPosts = myPosts.filter(post => post.id !== currentOpenPostId);
            localStorage.setItem('flashMyPosts', JSON.stringify(myPosts));

            // 2. Close Modal
            closeModal();

            // 3. Refresh the Grid to show it's gone
            setTimeout(() => {
                profileGrid.innerHTML = '';
                loadingSpinner.style.display = 'flex';
                loadUserPosts();
            }, 300); // Wait for modal close animation to finish
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
        currentOpenPostId = null; // Reset the ID

        setTimeout(() => {
            modal.classList.add('hidden');
            modalImage.parentElement.innerHTML = `<img id="modal-image" src="" alt="Post Media" class="w-full h-full object-contain">`;
            modalImage = document.getElementById('modal-image');
        }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    loadUserPosts();
});