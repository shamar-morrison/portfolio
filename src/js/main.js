const heroSec = document.querySelector('#hero');
const navbar = document.querySelector('.navbar');

/** Apply CSS style on navbar scroll */
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

/** Auto-Update Copyright Date */
const copyrightDate = new Date().getFullYear();
document.querySelector('.copyright-date').textContent = copyrightDate;
