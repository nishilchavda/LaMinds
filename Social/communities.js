document.addEventListener('DOMContentLoaded', () => {

    const discoverGrid = document.getElementById('discover-grid');
    const joinedContainer = document.getElementById('joined-communities');
    const loadingSpinner = document.getElementById('loading-spinner');

    // Mock data for Discover Communities
    const mockCommunities = [
        { id: 1, name: "Frontend Developers", members: "124K", category: "Technology", desc: "A place to discuss React, Vue, Tailwind, and all things frontend web development.", banner: "https://picsum.photos/seed/tech/500/200", icon: "fa-code" },
        { id: 2, name: "Digital Nomads", members: "89K", category: "Travel", desc: "Tips, tricks, and location advice for working remotely around the globe.", banner: "https://picsum.photos/seed/travel/500/200", icon: "fa-plane" },
        { id: 3, name: "PC Master Race", members: "2.1M", category: "Gaming", desc: "PC builds, setup showcases, troubleshooting, and gaming news.", banner: "https://picsum.photos/seed/gaming/500/200", icon: "fa-gamepad" },
        { id: 4, name: "UI/UX Designers", members: "45K", category: "Design", desc: "Share your Figma prototypes, get feedback, and discuss design systems.", banner: "https://picsum.photos/seed/design/500/200", icon: "fa-pen-nib" },
        { id: 5, name: "Home Fitness Hub", members: "312K", category: "Health", desc: "No gym? No problem. Share routines, meal preps, and progress pics.", banner: "https://picsum.photos/seed/fitness/500/200", icon: "fa-dumbbell" },
        { id: 6, name: "Street Photography", members: "156K", category: "Art", desc: "Capturing the raw essence of city life. Share your best urban shots.", banner: "https://picsum.photos/seed/photo/500/200", icon: "fa-camera" }
    ];

    // Mock data for Already Joined Communities (Horizontal Scroll)
    const joinedCommunities = [
        { name: "Tailwind Masters", icon: "https://i.pravatar.cc/150?img=15" },
        { name: "Indie Hackers", icon: "https://i.pravatar.cc/150?img=32" },
        { name: "Web3 Builders", icon: "https://i.pravatar.cc/150?img=54" },
        { name: "AI Enthusiasts", icon: "https://i.pravatar.cc/150?img=12" },
        { name: "Coffee Lovers", icon: "https://i.pravatar.cc/150?img=60" }
    ];

    function loadCommunities() {
        // 1. Render Joined Communities
        let joinedHTML = "";
        joinedCommunities.forEach(comm => {
            joinedHTML += `
            <div class="flex flex-col items-center gap-2 min-w-[90px] cursor-pointer group">
                <div class="w-16 h-16 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-colors shadow-sm relative">
                    <img src="${comm.icon}" class="w-full h-full object-cover">
                    ${Math.random() > 0.5 ? '<div class="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>' : ''}
                </div>
                <p class="text-xs font-semibold text-gray-800 dark:text-gray-200 text-center truncate w-full px-1 group-hover:text-blue-600 transition-colors">${comm.name}</p>
            </div>`;
        });
        joinedContainer.innerHTML = joinedHTML;

        // 2. Render Discover Grid
        let gridHTML = "";
        mockCommunities.forEach((comm, index) => {
            const delay = (index % 3) * 100;

            gridHTML += `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md animate-fade-in-up" style="animation-delay: ${delay}ms;">
                
                <div class="h-24 w-full relative bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img src="${comm.banner}" alt="Cover" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                </div>
                
                <div class="px-5 pb-5 flex-1 flex flex-col relative">
                    
                    <div class="w-14 h-14 bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex items-center justify-center text-2xl text-blue-500 -mt-7 mb-3 z-10">
                        <i class="fa-solid ${comm.icon}"></i>
                    </div>
                    
                    <div class="flex-1">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="font-bold text-gray-900 dark:text-white text-lg leading-tight cursor-pointer hover:text-blue-600 transition-colors">${comm.name}</h3>
                        </div>
                        <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">${comm.category} • ${comm.members} Members</p>
                        <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">${comm.desc}</p>
                    </div>
                    
                    <button class="join-btn w-full py-2 rounded-lg font-bold text-sm transition-all duration-200 bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white active:scale-95 border border-blue-100 dark:border-blue-500/30">
                        Join Community
                    </button>
                </div>
            </div>`;
        });

        loadingSpinner.style.display = 'none';
        discoverGrid.innerHTML = gridHTML;

        setupJoinButtons();
    }

    // Handle Join/Leave logic
    function setupJoinButtons() {
        const joinButtons = document.querySelectorAll('.join-btn');

        joinButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const isJoined = this.classList.contains('joined');

                if (isJoined) {
                    // Leave logic
                    this.classList.remove('joined', 'bg-gray-100', 'text-gray-800', 'border-gray-200', 'hover:bg-gray-200', 'hover:text-gray-900');
                    this.classList.add('bg-blue-50', 'text-blue-600', 'hover:bg-blue-500', 'hover:text-white', 'border-blue-100');
                    this.innerText = 'Join Community';
                } else {
                    // Join logic
                    this.classList.remove('bg-blue-50', 'text-blue-600', 'hover:bg-blue-500', 'hover:text-white', 'border-blue-100');
                    this.classList.add('joined', 'bg-gray-100', 'text-gray-800', 'border-gray-200', 'hover:bg-gray-200', 'hover:text-gray-900');
                    this.innerHTML = '<i class="fa-solid fa-check mr-1"></i> Joined';
                }
            });
        });
    }

    // Simulate network delay then load
    setTimeout(loadCommunities, 300);
});