document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.querySelector(".posts");
  const postInput = document.querySelector('input[placeholder="What\'s happening?"]');

  let currentPage = 1;
  let isLoading = false;
  let infiniteScrollObserver;

  // --- 1. FETCH & RENDER FEED --- //
  async function fetchMorePosts() {
    if (isLoading) return;
    isLoading = true;

    try {
      const loader = document.createElement("p");
      loader.id = "feed-loader";
      loader.className = "text-center text-gray-500 my-6 animate-pulse";
      loader.innerText = "Loading more posts...";
      postsContainer.appendChild(loader);

      const [usersRes, dogsRes, photosRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://dog.ceo/api/breeds/image/random/10"),
        fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=10`),
      ]);

      const users = await usersRes.json();
      const dogs = await dogsRes.json();
      const photos = await photosRes.json();

      document.getElementById("feed-loader")?.remove();

      // Read databases from LocalStorage
      const savedBookmarks = JSON.parse(localStorage.getItem("flashBookmarks")) || [];
      const likedPosts = JSON.parse(localStorage.getItem("flashLikedPosts")) || [];
      const allComments = JSON.parse(localStorage.getItem("flashComments")) || {};

      users.forEach((user, index) => {
        const profilePic = dogs.message[index];
        const postImage = photos[index].download_url;
        const postId = `post_${currentPage}_${index}`;

        // Get persistent states
        const isSaved = savedBookmarks.some((b) => b.id === postId);
        const bookmarkIconClass = isSaved ? "fa-solid text-blue-500" : "fa-regular";

        const isLiked = likedPosts.includes(postId);
        const likeIconClass = isLiked ? "fa-solid text-red-500" : "fa-regular";
        const likeColorClass = isLiked ? "text-red-500" : "";

        // Get comments
        const postComments = allComments[postId] || [];
        const baseComments = Math.floor(Math.random() * 300) + 5;
        const totalComments = baseComments + postComments.length;

        // Base likes (add 1 if user liked it)
        let baseLikes = Math.floor(Math.random() * 1000) + 50;
        if (isLiked) baseLikes += 1;

        const postData = {
          id: postId,
          type: "Post",
          url: postImage,
          user: user.username,
          avatar: profilePic,
          desc: `Just sharing this amazing shot I took! Loving the vibes today. ✨ #${user.company.name.replace(/\s+/g, "")} #Photography`,
        };

        const postHTML = createPostHTML(postData, user.name, "2 hours ago", baseLikes, totalComments, Math.floor(Math.random() * 100), likeIconClass, likeColorClass, bookmarkIconClass, postComments);
        postsContainer.insertAdjacentHTML("beforeend", postHTML);
      });

      currentPage++;
      isLoading = false;
      setupObserver();
    } catch (error) {
      console.error("Error fetching data:", error);
      isLoading = false;
    }
  }

  // Unified HTML Generator for both API posts and User-created posts
  function createPostHTML(postData, displayName, timeText, likes, comments, retweets, likeIconClass, likeColorClass, bookmarkIconClass, userCommentsArray = []) {

    // Generate existing comments HTML
    let commentsHTML = userCommentsArray.map(c => `
      <div class="flex gap-2 text-sm mt-3 bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
          <img src="https://i.pravatar.cc/150?img=11" class="w-6 h-6 rounded-full">
          <div>
              <span class="font-bold text-gray-900 dark:text-white">You</span>
              <p class="text-gray-700 dark:text-gray-300">${c}</p>
          </div>
      </div>
    `).join('');

    // If it's a text-only user post, don't render the big media block
    let imageBlock = '';
    if (postData.url) {
      const isVideo = postData.mediaType === 'video' || postData.url.startsWith('data:video');
      if (isVideo) {
        imageBlock = `
        <div class="overflow-hidden rounded-lg mb-4">
            <video src="${postData.url}" class="w-full object-cover max-h-96 cursor-pointer rounded-lg" controls muted playsinline autoplay loop></video>
        </div>`;
      } else {
        imageBlock = `
        <div class="overflow-hidden rounded-lg mb-4">
            <img src="${postData.url}" alt="Post Image" class="w-full object-cover max-h-96 transition-transform duration-500 hover:scale-105 cursor-pointer">
        </div>`;
      }
    }

    return `
      <div class="post-card bg-white dark:bg-gray-900 rounded-xl shadow-sm p-5 mb-6 border border-gray-200 dark:border-gray-800 animate-fade-in-up transition-all duration-300 hover:shadow-md" data-post='${JSON.stringify(postData)}' data-id="${postData.id}">
          <div class="flex justify-between items-center mb-3">
              <div class="flex gap-3 items-center group cursor-pointer">
                  <img src="${postData.avatar}" alt="User" class="w-10 h-10 rounded-full object-cover transition-transform group-hover:scale-105">
                  <div>
                      <h4 class="font-bold text-gray-900 dark:text-white group-hover:underline group-hover:text-blue-600 transition-colors">${displayName}</h4>
                      <p class="text-xs text-gray-500">@${postData.user} • ${timeText}</p>
                  </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full w-8 h-8 transition-colors"><i class="fa-solid fa-ellipsis"></i></button>
          </div>
          
          <p class="mb-4 text-gray-800 dark:text-gray-200">${postData.desc}</p>
          ${imageBlock}
          
          <div class="flex justify-between items-center text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-3">
              <button class="like-btn ${likeColorClass} flex gap-2 items-center hover:text-red-500 transition-colors group active:scale-75 duration-200">
                  <i class="${likeIconClass} fa-heart group-hover:bg-red-50 dark:group-hover:bg-red-900/30 p-2 rounded-full transition-colors"></i> <span>${likes}</span>
              </button>
              <button class="comment-btn flex gap-2 items-center hover:text-blue-500 transition-colors group active:scale-75 duration-200">
                  <i class="fa-regular fa-comment group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 p-2 rounded-full transition-colors"></i> <span class="comment-count">${comments}</span>
              </button>
              <button class="flex gap-2 items-center hover:text-green-500 transition-colors group active:scale-75 duration-200">
                  <i class="fa-solid fa-retweet group-hover:bg-green-50 dark:group-hover:bg-green-900/30 p-2 rounded-full transition-colors"></i> ${retweets}
              </button>
              <button class="bookmark-btn flex gap-2 items-center hover:text-blue-500 transition-colors group active:scale-75 duration-200">
                  <i class="${bookmarkIconClass} fa-bookmark group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 p-2 rounded-full transition-colors"></i>
              </button>
          </div>

          <div class="comments-section hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <div class="flex gap-3">
                  <img src="https://i.pravatar.cc/150?img=11" class="w-8 h-8 rounded-full object-cover">
                  <input type="text" class="comment-input flex-1 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write a comment...">
                  <button class="submit-comment text-blue-500 font-bold px-3 hover:text-blue-600 disabled:opacity-50" disabled>Post</button>
              </div>
              <div class="comments-list mt-2 max-h-40 overflow-y-auto no-scrollbar">
                  ${commentsHTML}
              </div>
          </div>
      </div>`;
  }

  function setupObserver() {
    if (infiniteScrollObserver) infiniteScrollObserver.disconnect();
    infiniteScrollObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) fetchMorePosts();
    }, { rootMargin: "0px 0px 200px 0px" });

    const lastPost = postsContainer.lastElementChild;
    if (lastPost && lastPost.id !== "feed-loader") {
      infiniteScrollObserver.observe(lastPost);
    }
  }

  fetchMorePosts();

  // --- 2. POST INTERACTIONS (Event Delegation) --- //
  postsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const card = btn.closest(".post-card");
    const postId = card.dataset.id;
    const icon = btn.querySelector("i");
    const countSpan = btn.querySelector("span");

    // 2a. Handle Liking
    if (btn.classList.contains("like-btn")) {
      let likedPosts = JSON.parse(localStorage.getItem("flashLikedPosts")) || [];
      const isLiked = icon.classList.contains("fa-solid");
      let count = parseInt(countSpan.innerText);

      if (isLiked) {
        // Unlike
        likedPosts = likedPosts.filter(id => id !== postId);
        icon.className = "fa-regular fa-heart group-hover:bg-red-50 dark:group-hover:bg-red-900/30 p-2 rounded-full transition-colors";
        btn.classList.remove("text-red-500");
        countSpan.innerText = count - 1;
      } else {
        // Like
        likedPosts.push(postId);
        icon.className = "fa-solid fa-heart group-hover:bg-red-50 dark:group-hover:bg-red-900/30 p-2 rounded-full transition-colors text-red-500";
        btn.classList.add("text-red-500");
        countSpan.innerText = count + 1;
      }
      localStorage.setItem("flashLikedPosts", JSON.stringify(likedPosts));
    }

    // 2b. Handle Bookmarking
    if (btn.classList.contains("bookmark-btn")) {
      const postData = JSON.parse(card.dataset.post);
      let savedBookmarks = JSON.parse(localStorage.getItem("flashBookmarks")) || [];
      const existingIndex = savedBookmarks.findIndex((b) => b.id === postId);

      if (existingIndex > -1) {
        savedBookmarks.splice(existingIndex, 1);
        icon.className = "fa-regular fa-bookmark group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 p-2 rounded-full transition-colors";
        icon.classList.remove("text-blue-500");
      } else {
        postData.savedAt = Date.now();
        savedBookmarks.push(postData);
        icon.className = "fa-solid fa-bookmark group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 p-2 rounded-full transition-colors text-blue-500";
      }
      localStorage.setItem("flashBookmarks", JSON.stringify(savedBookmarks));
    }

    // 2c. Handle Toggling Comment Section
    if (btn.classList.contains("comment-btn")) {
      const commentsSection = card.querySelector('.comments-section');
      commentsSection.classList.toggle('hidden');
    }

    // 2d. Handle Submitting a Comment
    if (btn.classList.contains("submit-comment")) {
      const input = card.querySelector('.comment-input');
      const text = input.value.trim();
      if (!text) return;
      const safeText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

      // Save to LocalStorage
      let allComments = JSON.parse(localStorage.getItem("flashComments")) || {};
      if (!allComments[postId]) allComments[postId] = [];
      allComments[postId].push(safeText);
      localStorage.setItem("flashComments", JSON.stringify(allComments));

      // Update UI
      const commentsList = card.querySelector('.comments-list');
      commentsList.insertAdjacentHTML('beforeend', `
        <div class="flex gap-2 text-sm mt-3 bg-gray-50 dark:bg-gray-800 p-2 rounded-lg animate-fade-in-up">
            <img src="https://i.pravatar.cc/150?img=11" class="w-6 h-6 rounded-full">
            <div>
                <span class="font-bold text-gray-900 dark:text-white">You</span>
                <p class="text-gray-700 dark:text-gray-300">${safeText}</p>
            </div>
        </div>
      `);

      // Update Comment Count
      const commentCountSpan = card.querySelector('.comment-count');
      commentCountSpan.innerText = parseInt(commentCountSpan.innerText) + 1;

      input.value = '';
      btn.disabled = true;
    }
  });

  // Enable/Disable comment submit button based on input
  postsContainer.addEventListener('input', (e) => {
    if (e.target.classList.contains('comment-input')) {
      const submitBtn = e.target.nextElementSibling;
      submitBtn.disabled = e.target.value.trim() === '';
    }
  });

  // --- FOLLOW SYSTEM LOGIC --- //
  const followButtons = document.querySelectorAll('.follow-btn');

  // 1. Load initial follow state on page load
  const followedUsers = JSON.parse(localStorage.getItem('flashFollowing')) || [];

  followButtons.forEach(btn => {
    const username = btn.dataset.user;

    // If user is already followed in localStorage, update the button UI
    if (followedUsers.includes(username)) {
      setFollowingUI(btn);
    }

    // 2. Handle click events
    btn.addEventListener('click', () => {
      let currentFollowing = JSON.parse(localStorage.getItem('flashFollowing')) || [];
      const isFollowing = currentFollowing.includes(username);

      if (isFollowing) {
        // Unfollow logic
        currentFollowing = currentFollowing.filter(user => user !== username);
        setFollowUI(btn);
      } else {
        // Follow logic
        currentFollowing.push(username);
        setFollowingUI(btn);
      }

      // Save back to LocalStorage
      localStorage.setItem('flashFollowing', JSON.stringify(currentFollowing));
    });
  });

  // Helper functions for button UI states
  function setFollowingUI(btn) {
    btn.innerText = 'Following';
    // Change to a gray outline style for Dark/Light mode
    btn.className = 'follow-btn border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 text-sm px-4 py-1.5 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all active:scale-95';
  }

  function setFollowUI(btn) {
    btn.innerText = 'Follow';
    // Revert to solid black/white style for Dark/Light mode
    btn.className = 'follow-btn bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm px-4 py-1.5 rounded-full font-bold hover:opacity-80 transition-all active:scale-95';
  }

  // --- 3. CREATE NEW POST LOGIC --- //
  const postBtn = document.getElementById("post-btn");
  const pickImageBtn = document.getElementById("pick-image-btn");
  const pickVideoBtn = document.getElementById("pick-video-btn");
  const imageFileInput = document.getElementById("image-file-input");
  const videoFileInput = document.getElementById("video-file-input");
  const mediaPreview = document.getElementById("media-preview");
  const mediaPreviewContent = document.getElementById("media-preview-content");
  const removeMediaBtn = document.getElementById("remove-media-btn");

  let selectedMediaURL = null;   // base64 data URL
  let selectedMediaType = null;  // "image" or "video"

  // Open file picker when image/video button is clicked
  pickImageBtn.addEventListener("click", () => imageFileInput.click());
  pickVideoBtn.addEventListener("click", () => videoFileInput.click());

  // Handle image file selection
  imageFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      selectedMediaURL = ev.target.result;
      selectedMediaType = "image";
      showMediaPreview();
    };
    reader.readAsDataURL(file);
    imageFileInput.value = ""; // reset so picking same file again works
  });

  // Handle video file selection
  videoFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    // Limit video size to 15MB (base64 in localStorage has limits)
    if (file.size > 15 * 1024 * 1024) {
      alert("Video must be under 15MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      selectedMediaURL = ev.target.result;
      selectedMediaType = "video";
      showMediaPreview();
    };
    reader.readAsDataURL(file);
    videoFileInput.value = "";
  });

  function showMediaPreview() {
    mediaPreview.classList.remove("hidden");
    if (selectedMediaType === "image") {
      mediaPreviewContent.innerHTML = `<img src="${selectedMediaURL}" class="w-full max-h-80 object-contain">`;
    } else {
      mediaPreviewContent.innerHTML = `<video src="${selectedMediaURL}" class="w-full max-h-80 object-contain" controls muted></video>`;
    }
    updatePostBtnState();
  }

  // Remove selected media
  removeMediaBtn.addEventListener("click", () => {
    selectedMediaURL = null;
    selectedMediaType = null;
    mediaPreviewContent.innerHTML = "";
    mediaPreview.classList.add("hidden");
    updatePostBtnState();
  });

  // Enable Post button when there's text or media
  function updatePostBtnState() {
    postBtn.disabled = postInput.value.trim() === "" && !selectedMediaURL;
  }

  postBtn.disabled = true;
  postInput.addEventListener("input", updatePostBtnState);

  // Submit the post
  postBtn.addEventListener("click", () => {
    const text = postInput.value.trim();
    if (!text && !selectedMediaURL) return;
    const safeText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const newPostData = {
      id: "my_post_" + Date.now(),
      type: "Post",
      url: selectedMediaURL || "", // data URL or empty
      mediaType: selectedMediaType || null,
      user: "alexj_creator",
      avatar: "https://i.pravatar.cc/150?img=11",
      desc: safeText || (selectedMediaType === "video" ? "Check out this video! 🎬" : "Check out this photo! 📸"),
      timestamp: Date.now()
    };

    // Save to LocalStorage so Profile page can read it
    let myPosts = JSON.parse(localStorage.getItem("flashMyPosts")) || [];
    myPosts.unshift(newPostData);
    localStorage.setItem("flashMyPosts", JSON.stringify(myPosts));

    // Render it locally right away
    const newPostHTML = createPostHTML(newPostData, "Alex Johnson", "Just now", 0, 0, 0, "fa-regular", "", "fa-regular");
    postsContainer.insertAdjacentHTML("afterbegin", newPostHTML);

    // Reset the composer
    postInput.value = "";
    selectedMediaURL = null;
    selectedMediaType = null;
    mediaPreviewContent.innerHTML = "";
    mediaPreview.classList.add("hidden");
    postBtn.disabled = true;
  });
});