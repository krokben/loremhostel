const header = document.querySelector('.header')
const trigram = header.querySelector('.header__trigram')
const navbar = header.querySelector('.navbar')
const navbarItems = navbar.querySelectorAll('.navbar__item')
const navbarLinks = navbar.querySelectorAll('.navbar__link')
const searchbar = document.querySelectorAll('.searchbar')

navbarLinks.forEach(x => x.addEventListener('click', (e) => shrinkNavbar(e)))

function shrinkNavbar(e) {
	navbarItems.forEach(x => x.classList.add('navbar__item--shrink'))
	searchbar.forEach(x => x.classList.add('searchbar--fade-out'))
	setTimeout(() => {header.classList.add('header--banner-hidden')}, 600)
}

function delay(url, time) {
	setTimeout(() => {window.location = url}, time)
}

console.log(window.location.pathname)
console.log(window.location.pathname.split('/'))