// JavaScript Document - Associação Espalhadeiras do Bem
document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE MENU TOGGLE
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. CARD FILTERING SYSTEM
    const filterButtons = document.querySelectorAll('.filter-btn');
    const matchCards = document.querySelectorAll('.match-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active status from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            matchCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'todos' || cardCategory === filterValue) {
                    card.classList.remove('card-hidden');
                    card.classList.add('card-visible');
                } else {
                    card.classList.remove('card-visible');
                    card.classList.add('card-hidden');
                }
            });
        });
    });

    // 3. SMOOTH COUNT-UP INTERACTION FOR STATS
    const counters = document.querySelectorAll('.counter');
    const speed = 150; // Total duration factor

    const startCounterAnimation = () => {
        counters.forEach(counter => {
            const animate = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + increment > target ? target : count + increment;
                    setTimeout(animate, 15);
                } else {
                    counter.innerText = target;
                }
            };
            animate();
        });
    };

    // Intersection Observer to start counters when scrolled into view
    const statsSection = document.querySelector('.counter')?.parentElement?.parentElement?.parentElement;
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounterAnimation();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(statsSection);
    } else {
        // Fallback if section structure changes
        startCounterAnimation();
    }
});
