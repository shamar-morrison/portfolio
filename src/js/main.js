const aboutSec = document.querySelector('#about');
const navbar = document.querySelector('.navbar');

/** Apply CSS style on navbar scroll */
const navbarObserver = new IntersectionObserver(
	function (entries) {
		if (!entries[0].isIntersecting) {
			navbar.classList.remove('sticky');
		} else {
			navbar.classList.add('sticky');
		}
	},
	{ threshold: 0.2 }
);

navbarObserver.observe(aboutSec);
