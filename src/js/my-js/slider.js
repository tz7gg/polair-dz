window.addEventListener('load', () => {

    function randomColor() {
        const R = Math.floor(Math.random() * 255)
        const G = Math.floor(Math.random() * 255)
        const B = Math.floor(Math.random() * 255)
        return `rgb(${R}, ${G}, ${B})`
    }

    new Swiper('.swiper-container', {
        allowTouchMove: true,
        speed: 1400,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        spaceBetween: 120,
        initialSlide: 2,
        on: {
            slideChangeTransitionStart: function() {
                document.body.style.setProperty('--slider-color', randomColor())
            }
        }
    })
    document.querySelector('.slider').classList.add('active')
})