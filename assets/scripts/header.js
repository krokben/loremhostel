const header = document.querySelector('.header')
const trigram = header.querySelector('.header__trigram')
const bannerLogo = header.querySelector('.header__logo-link')
const navbar = header.querySelector('.navbar')
const links = navbar.querySelectorAll('.navbar__link')

trigram.addEventListener('click', expandHeader)
bannerLogo.addEventListener('click', hideBannerFromLogo)
links.forEach(x => x.addEventListener('click', hideBanner))

function expandHeader() {
	if (header.classList.contains('header--expand')) {
		header.classList.remove('header--expand')
		header.classList.add('header--shrink')
		navbar.classList.remove('navbar--display')
		navbar.classList.add('navbar--hide')
	} else if (header.classList.contains('header--shrink')) {
		header.classList.remove('header--shrink')
		header.classList.add('header--expand')
		navbar.classList.remove('navbar--hide')
		navbar.classList.add('navbar--display')
	} else {
		header.classList.add('header--expand')
		navbar.classList.add('navbar--display')
	}
}

function hideBanner() {
	header.classList.add('header--shrink')
	navbar.classList.add('navbar--hide')
	setTimeout(() => header.classList.add('header--hide'), 600)
}

function hideBannerFromLogo() {
	header.classList.add('header--hide')
}