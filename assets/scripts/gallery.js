const body = document.querySelector('body')
const galleryImg = body.querySelectorAll('.gallery__img')
const lightbox = body.querySelector('.lightbox')
const lightboxContainer = lightbox.querySelector('.lightbox__container')
const lightboxExit = lightbox.querySelector('.lightbox__exit')
const lightboxImgContainer = lightbox.querySelector('.lightbox__img-container')

galleryImg.forEach(x => x.addEventListener('click', showLightbox))
lightboxExit.addEventListener('click', closeLightbox)

lightbox.classList.add('lightbox--hidden')

function showLightbox(e) {
	const img = e.target.src.replace('gallery-sm', 'gallery-lg')
	lightbox.classList.remove('lightbox--hidden')
	lightboxImgContainer.innerHTML = `<img src="${img}" class="lightbox__img" />`
	body.style.overflow = 'hidden'
}

function closeLightbox() {
	lightbox.classList.add('lightbox--hidden')
	body.style.overflow = 'auto'
}