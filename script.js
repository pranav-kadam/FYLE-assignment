// Services Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Clone first 3 slides and append to the end
for (let i = 0; i < 3; i++) {
    const clone = slides[i].cloneNode(true);
    slider.appendChild(clone);
}

function showSlide(index) {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${index * 25}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index % slides.length);
    });
    
    currentSlide = index;
    
    // If we're on a cloned slide, prepare to jump back
    if (index >= slides.length) {
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = `translateX(-${(index % slides.length) * 25}%)`;
            currentSlide = index % slides.length;
        }, 500);
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    if (currentSlide === 0) {
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${slides.length * 25}%)`;
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
            showSlide(slides.length - 1);
        }, 10);
    } else {
        showSlide(currentSlide - 1);
    }
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

setInterval(nextSlide, 5000);

// Project Carousel
document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const carousel = new bootstrap.Carousel(document.getElementById('projectCarousel'), {
        interval: 100000000
    });

    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            projectItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            const slideIndex = this.getAttribute('data-bs-slide-to');
            carousel.to(slideIndex);
        });
    });
});

// Growth Cards Hover Effect
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.growth-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            cards.forEach(c => c.style.opacity = '0.5');
            this.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            cards.forEach(c => c.style.opacity = '1');
        });
    });
});

