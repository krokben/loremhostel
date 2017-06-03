const header = document.querySelector('.header')
const trigram = header.querySelector('.header__trigram')
const navbar = header.querySelector('.navbar-front')
const navbarItems = navbar.querySelectorAll('.navbar-front__item')
const navbarLinks = navbar.querySelectorAll('.navbar-front__link')
const searchbar = document.querySelectorAll('.searchbar')

trigram.addEventListener('click', displayNavbar)
navbarLinks.forEach(x => x.addEventListener('click', shrinkNavbar))

function shrinkNavbar() {
	navbarItems.forEach(x => x.classList.add('navbar-front__item--shrink'))
	searchbar.forEach(x => x.classList.add('searchbar--fade-out'))
	setTimeout(() => {header.classList.add('header--banner-hidden')}, 600)
}

function displayNavbar() {
	if (navbar.classList.contains('navbar--display')) {
		navbar.classList.remove('navbar--display')
		navbar.classList.add('navbar--hide')
	} else if (navbar.classList.contains('navbar--hide')) {
		navbar.classList.remove('navbar--hide')
		navbar.classList.add('navbar--display')
	} else {
		navbar.classList.add('navbar--display')
	}
}