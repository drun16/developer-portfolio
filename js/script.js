/* =================== MOBILE NAV MENU =================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'); 

// Show menu
// We check if navToggle exists before adding the event listener
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

// Hide menu when a link is clicked
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));


/* =================== ACTIVE LINK ON SCROLL =================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // -50 to trigger a bit earlier
        const sectionId = current.getAttribute('id');
        const correspondingLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            correspondingLink.classList.add('active-link');
        } else {
            correspondingLink.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* =================== FADE-IN ANIMATION ON SCROLL =================== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            // Optional: Remove the class if you want the animation to repeat every time
            // entry.target.classList.remove('fade-in'); 
        }
    });
});

const sectionsToAnimate = document.querySelectorAll('.section');
sectionsToAnimate.forEach((el) => observer.observe(el));