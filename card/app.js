document.addEventListener("DOMContentLoaded", () => {
    // Product Data
    const product = {
        title: "Nike Airforce1 Premium",
        tagline: "Own the Airforce",
        description: "Step back into classic hoops style with a durable leather.",
        price: "$111",
        images: [
            "shoe.png",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop"
        ]
    };

    // DOM Elements
    const titleEl = document.getElementById("product-title");
    const taglineEl = document.getElementById("product-tagline");
    const descEl = document.getElementById("product-description");
    const priceEl = document.getElementById("product-price");
    const carouselEl = document.getElementById("carousel");
    const dotsContainer = document.getElementById("carousel-dots");

    // Initialize Content
    titleEl.textContent = product.title;
    taglineEl.textContent = product.tagline;
    descEl.textContent = product.description;
    priceEl.textContent = product.price;

    // Render Carousel
    product.images.forEach((imgSrc, index) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `${product.title} - View ${index + 1}`;
        carouselEl.appendChild(img);

        const dot = document.createElement("div");
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    let currentIndex = 0;

    function goToSlide(index) {
        currentIndex = index;
        const offset = -index * 100;
        carouselEl.style.transform = `translateX(${offset}%)`;

        // Update dots
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % product.images.length;
        goToSlide(currentIndex);
    }, 5000);

    // Buy Button Interaction
    const buyBtn = document.getElementById("buy-btn");
    buyBtn.addEventListener("click", () => {
        buyBtn.innerHTML = "Added! ✓";
        buyBtn.style.background = "#22c55e"; // Success green
        setTimeout(() => {
            buyBtn.innerHTML = 'Buy Now <span class="arrow-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>';
            buyBtn.style.background = "var(--accent-color)";
        }, 2000);
    });
});
