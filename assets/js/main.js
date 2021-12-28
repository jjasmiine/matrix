/*  ()  */

/*SHOW-MENU*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu') //found in css not html
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*SWIPER JS*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})
let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
        swiper: galleryThumbs,
    }
})

/*POPUP*/
const btnOpenVideo = document.querySelectorAll('.pills__video-content')
const pillsPopup = document.getElementById('popup')

function popUp() {
    pillsPopup.classList.add('show-popup')
}

btnOpenVideo.forEach(b => b.addEventListener('click', popUp))

const btnCloseVideo = document.getElementById('popup-close')

btnCloseVideo.addEventListener('click', () => {
    pillsPopup.classList.remove('show-popup')
})

/*GSAP ANIMATION*/

const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation() {
    gsap.from('.pills__subtitle', { opacity: 0, duration: .2, delay: .2, y: -20 })
    gsap.from('.pill__title', { opacity: 0, duration: .3, delay: .3, y: -20 })
    gsap.from('.pills__description', { opacity: 0, duration: .4, delay: .4, y: -20 })
    gsap.from('.pills__button', { opacity: 0, duration: .5, delay: .5, y: -20 })
    gsap.from('.pills__video-content', { opacity: 0, duration: .6, delay: .6, y: -20 })

    pillsPopup.classList.remove('show-popup')
}

controlImg.forEach(c => c.addEventListener('click', ScrollAnimation))