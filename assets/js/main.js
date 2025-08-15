/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// Select all sections that have an id

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');

const scrollActive = () => {
    const scrollY = window.pageYOffset;
    const headerHeight = header.offsetHeight;

    // Remove active-link from all links first
    navLinks.forEach(link => link.classList.remove('active-link'));

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        // For last section, activate if scroll passed its top
        if (
            (index === sections.length - 1 && scrollY + 1 >= sectionTop) ||
            (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight)
        ) {
            link.classList.add('active-link');
        }
    });
};

// Handle click highlighting
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active-link'));
        this.classList.add('active-link');
    });
});

window.addEventListener('scroll', scrollActive);



/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

