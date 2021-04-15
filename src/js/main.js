const heroSec = document.querySelector('#hero');
const navbar = document.querySelector('.navbar');

/** Apply sticky navbar style on scroll */
const navbarObserver = new IntersectionObserver(
	function (entries) {
		console.debug(entries);
		if (!entries[0].isIntersecting) {
			navbar.classList.add('sticky');
		} else {
			navbar.classList.remove('sticky');
		}
	},
	{ threshold: 0.85 }
);

navbarObserver.observe(heroSec);

/** onload */
window.onload = function () {
	// Remove Preloader Gif
	document.querySelector('.preloader').style.opacity = '0';
	document.querySelector('.preloader').classList.add('invisible');
	document.querySelector('body').style.overflowY = 'scroll';

	/** Apply sticky navbar if on mobile */
	const viewportwidth = document.documentElement.clientWidth;
	console.debug('vp width', viewportwidth);

	if (viewportwidth <= 992) {
		navbar.classList.add('sticky');
		navbarObserver.unobserve(heroSec);
	}
};

/** Auto-Update Copyright Date */
const copyrightDate = new Date().getFullYear();
document.querySelector('.copyright-date').textContent = copyrightDate;
