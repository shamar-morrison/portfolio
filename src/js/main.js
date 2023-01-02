const heroSec = document.querySelector('#hero');
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile__menu--container');
const mobileMenuLinks = document.querySelector('.mobile__menu--links');
const mobileMenuOverlay = document.querySelector('.mobile__menu--overlay');

/** Apply sticky navbar style on scroll */
const navbarObserver = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  },
  { threshold: 0.85 }
);
navbarObserver.observe(heroSec);

/** onload Event */
window.onload = function () {
  // Remove Preloader Gif
  document.querySelector('.preloader').style.opacity = '0';
  document.querySelector('.preloader').classList.add('invisible');
  document.querySelector('body').style.overflowY = 'scroll';
};

/** Auto-Update Copyright Date */
const copyrightDate = new Date().getFullYear();
document.querySelector('.copyright-date').textContent = `2021 - ${copyrightDate}`;

/** Mobile Menu */
const mobileMenuCallback = function () {
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.style.transform = 'translateX(-100%)';
    mobileMenu.classList.remove('open');

    mobileMenuOverlay.classList.add('invisible');
  } else {
    mobileMenu.style.transform = 'translateX(0)';
    mobileMenu.classList.add('open');

    mobileMenuOverlay.classList.remove('invisible');
  }
};
document.querySelector('.navbar-toggler').addEventListener('click', mobileMenuCallback);
mobileMenuLinks.addEventListener('click', mobileMenuCallback);
mobileMenuOverlay.addEventListener('click', mobileMenuCallback);

/**
 * Projects Section - Filter
 */
const tabItems = document.querySelectorAll('.tab-item');
tabItems.forEach(tabItem => {
  tabItem.addEventListener('click', filterProjects);
});

function filterProjects(e) {
  const tabItem = e.target.dataset.target;

  // Check if the tab is already active
  if (document.querySelector(`#${tabItem}`).classList.contains('active')) {
    return;
  }

  const children = Array.from(document.querySelector(`#projects-list`).children);
  children.forEach(child => {
    child.classList.remove('active');
  });
  document.querySelector(`#${tabItem}`).classList.add('active');
  updateProjectDescription(tabItem);
  updateTabItemActiveState(tabItem);
}

/**
 * Updates the project description
 */
function updateProjectDescription(item) {
  const desc = document.querySelector('.project-desc');

  if (item === 'website-projects') {
    desc.textContent =
      'These are some of the websites I have built for clients and myself. I have used a variety of technologies to build these websites including JavaScript, TypeScript, HTML and CSS. I have also used a variety of frameworks and libraries including React, Next JS, Bootstrap and Tailwind CSS.';
    return;
  }

  if (item === 'mobile-projects') {
    desc.textContent =
      'These are some of the mobile applications I have built for clients and myself. I have used a variety of technologies to build these applications, including React Native, Java and Styled Components.';
    return;
  }
}

/**
 * Update tab item active state
 */
function updateTabItemActiveState(tabItem) {
  const tabItems = document.querySelectorAll('.tab-item');
  tabItems.forEach(tabItem => {
    tabItem.classList.remove('active');
  });
  document.querySelector(`[data-target=${tabItem}]`).classList.add('active');
}