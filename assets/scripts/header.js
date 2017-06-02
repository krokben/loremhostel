const header = document.querySelector('.header')
const trigram = header.querySelector('.header__trigram')
const navbar = header.querySelector('.navbar')
const navbarItems = navbar.querySelectorAll('.navbar__item')
const navbarLinks = navbar.querySelectorAll('.navbar__link')
// const searchbar = document.querySelectorAll('.searchbar')

// navbarLinks.forEach(x => x.addEventListener('click', (e) => shrinkNavbar(e)))

// function shrinkNavbar(e) {
// 	navbarItems.forEach(x => x.classList.add('navbar__item--shrink'))
// 	searchbar.forEach(x => x.classList.add('searchbar--fade-out'))
// 	setTimeout(() => {header.classList.add('header--banner-hidden')}, 600)
// }

trigram.addEventListener('click', expandNavbar)

function expandNavbar() {
	if (header.classList.contains('header--expand')) {
		header.classList.remove('header--expand')
		header.classList.add('header--shrink')
		navbar.classList.remove('navbar--display-navbar')
	} else if (header.classList.contains('header--shrink')) {
		header.classList.remove('header--shrink')
		header.classList.add('header--expand')
		navbar.classList.add('navbar--display-navbar')
	} else {
		header.classList.add('header--expand')
		navbar.classList.add('navbar--display-navbar')
	}
}