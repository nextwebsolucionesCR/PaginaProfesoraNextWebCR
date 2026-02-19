document.addEventListener('DOMContentLoaded', () => {
    // --- Custom Cursor ---
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth follow for outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover Effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(41, 98, 255, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    // --- Scroll Reveal Animation ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve to only animate once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .about-text, .stat-item, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // Apply strict visibility class styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .visible { opacity: 1 !important; transform: translateY(0) !important; }
    `;
    document.head.appendChild(styleSheet);


    // --- 3D Card Carousel Logic ---
    const carouselSection = document.querySelector('.carousel-container');

    if (carouselSection) {
        const cards = document.querySelectorAll('.card');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;
        const totalCards = cards.length;

        function updateCarousel() {
            cards.forEach((card, index) => {
                // Reset classes
                card.classList.remove('active', 'prev', 'next');
                card.style.display = 'flex'; // Ensure visible for transitions

                if (index === currentIndex) {
                    card.classList.add('active');
                    // Update Dynamic Button
                    const link = card.getAttribute('data-link');
                    const btn = document.getElementById('dynamic-service-btn');
                    if (btn && link) {
                        btn.href = link;
                    }
                } else if (index === (currentIndex + 1) % totalCards) {
                    card.classList.add('next');
                } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
                    card.classList.add('prev');
                } else {
                    // For card not in view, hide completely or stack far back
                    // CSS handles opacity/transform for non-active/next/prev
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            updateCarousel();
        }

        // Event Listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        // Click on side cards to navigate
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (card.classList.contains('next')) {
                    nextSlide();
                } else if (card.classList.contains('prev')) {
                    prevSlide();
                }
            });
        });

        // Initialize
        updateCarousel();

        // Swipe Support (Basic)
        let touchStartX = 0;
        let touchEndX = 0;

        carouselSection.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carouselSection.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) nextSlide();
            if (touchEndX > touchStartX + 50) prevSlide();
        }
    }

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-list");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});
