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
const topNavLinks = document.querySelectorAll('.nav__top-link'); // top links
const header = document.querySelector('.header');

const scrollActive = () => {
    const scrollY = window.pageYOffset;
    const headerHeight = header.offsetHeight;

    // Remove active-link from all links first
    navLinks.forEach(link => link.classList.remove('active-link'));
	topNavLinks.forEach(link => link.classList.remove('active-link'));

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
		const topLink = document.querySelector('.nav__top a[href="#' + sectionId + '"]');
        // For last section, activate if scroll passed its top
        if (
            (index === sections.length - 1 && scrollY + 1 >= sectionTop) ||
            (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight)
        ) {
           
			if (link) link.classList.add('active-link');
			if (topLink) topLink.classList.add('active-link');
        }
    });
};

// Handle click highlighting
navLinks.forEach(link => {
    link.addEventListener('click', function() {
		topNavLinks.forEach(l => l.classList.remove('active-link'));
        navLinks.forEach(l => l.classList.remove('active-link'));
        this.classList.add('active-link');
    });
});

window.addEventListener('scroll', scrollActive);
/*=============== LIGHT DARK THEME ===============*/ 
/*=============== LIGHT / DARK THEME ===============*/
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconSun = 'bx-sun';
const iconMoon = 'bx-moon';
const STORAGE_KEY = 'shreya-theme';

const bodyHasLight = () => document.body.classList.contains(lightTheme);
const getStored = () => { try { return localStorage.getItem(STORAGE_KEY); } catch { return null; } };

(function initTheme(){
  const saved = getStored(); // 'dark' | 'light' | null
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  if (saved === 'light' || (saved === null && prefersLight)) {
    document.body.classList.add(lightTheme);
  }

  // Icon + aria
  if (bodyHasLight()){
    themeButton.classList.remove(iconMoon);
    themeButton.classList.add(iconSun);
    themeButton.setAttribute('aria-pressed', 'true');
  } else {
    themeButton.classList.remove(iconSun);
    themeButton.classList.add(iconMoon);
    themeButton.setAttribute('aria-pressed', 'false');
  }
})();

themeButton.addEventListener('click', () => {
  const isLight = bodyHasLight();
  document.body.classList.toggle(lightTheme, !isLight);

  themeButton.classList.toggle(iconSun, !isLight); // light mode shows sun
  themeButton.classList.toggle(iconMoon, isLight); // dark mode shows moon
  themeButton.setAttribute('aria-pressed', String(!isLight));

  try { localStorage.setItem(STORAGE_KEY, !isLight ? 'light' : 'dark'); } catch {}
});



/*=============== SCROLL REVEAL ANIMATION ===============*/

