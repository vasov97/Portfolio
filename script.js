// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth horizontal scroll for projects with drag
const projectsScroll = document.querySelector('.projects-scroll');
if (projectsScroll) {
    let isDown = false;
    let startX;
    let scrollLeft;

    projectsScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        projectsScroll.style.cursor = 'grabbing';
        startX = e.pageX - projectsScroll.offsetLeft;
        scrollLeft = projectsScroll.scrollLeft;
    });

    projectsScroll.addEventListener('mouseleave', () => {
        isDown = false;
        projectsScroll.style.cursor = 'grab';
    });

    projectsScroll.addEventListener('mouseup', () => {
        isDown = false;
        projectsScroll.style.cursor = 'grab';
    });

    projectsScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - projectsScroll.offsetLeft;
        const walk = (x - startX) * 2;
        projectsScroll.scrollLeft = scrollLeft - walk;
    });
}

// Smooth horizontal scroll for testimonials with drag
const testimonialsScroll = document.querySelector('.testimonials-scroll');
if (testimonialsScroll) {
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialsScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        testimonialsScroll.style.cursor = 'grabbing';
        startX = e.pageX - testimonialsScroll.offsetLeft;
        scrollLeft = testimonialsScroll.scrollLeft;
    });

    testimonialsScroll.addEventListener('mouseleave', () => {
        isDown = false;
        testimonialsScroll.style.cursor = 'grab';
    });

    testimonialsScroll.addEventListener('mouseup', () => {
        isDown = false;
        testimonialsScroll.style.cursor = 'grab';
    });

    testimonialsScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialsScroll.offsetLeft;
        const walk = (x - startX) * 2;
        testimonialsScroll.scrollLeft = scrollLeft - walk;
    });
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll('.project-card, .tech-item, .testimonial-card, .flutterflow-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Project card click animation
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Tech stack item hover effect
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Console Easter egg
console.log('%c👋 Hello Developer!', 'font-size: 20px; color: #00ff88; font-weight: bold;');
console.log('%cLike what you see? Let\'s work together!', 'font-size: 14px; color: #a0a0a0;');