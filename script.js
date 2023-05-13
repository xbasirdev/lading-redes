// Language Switcher
const langButtons = document.querySelectorAll('.language-switcher button');
const langEn = document.querySelector('.lang-en');
const langEs = document.querySelector('.lang-es');
const langEnMobile = document.querySelector('.lang-en-mobile');
const langEsMobile = document.querySelector('.lang-es-mobile');
const profile = document.querySelector('.profile');
// Get browser language
const browserLanguage = navigator.language.slice(0, 2);

// Default language is English
let currentLanguage = 'en';

// Check if browser language is Spanish
if (browserLanguage === 'es') {
  currentLanguage = 'es';
}

// Set default language
let lang = 'en';

// Change language function
function changeLanguage() {
	// Change active state of language buttons
	if (this === langEn || this === langEnMobile) {
		langEn.classList.add('active');
		langEs.classList.remove('active');
		langEnMobile.classList.add('active');
		langEsMobile.classList.remove('active');
		lang = 'en';
	} else {
		langEs.classList.add('active');
		langEn.classList.remove('active');
		langEsMobile.classList.add('active');
		langEnMobile.classList.remove('active');
		lang = 'es';
	}

	// Update text content of elements
	profile.querySelector('p').textContent = lang === 'en' ? 'Senior Full Stack Web Developer | Technical Leader' : 'Desarrollador Web Full Stack Senior | Líder Técnico';
}

// Add event listeners to language buttons
langEn.addEventListener('click', changeLanguage);
langEs.addEventListener('click', changeLanguage);
langEnMobile.addEventListener('click', changeLanguage);
langEsMobile.addEventListener('click', changeLanguage);

// Dark Mode Switcher
const darkModeSwitcher = document.querySelector('.dark-mode-switcher input[type="checkbox"]');
const body = document.querySelector('body');

// Check if dark mode is set in local storage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeSwitcher.checked = true;
}

// Enable or disable dark mode
darkModeSwitcher.addEventListener('change', () => {
  if (darkModeSwitcher.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
  }
});
