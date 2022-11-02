function MobileMenu() {
    const menu = document.querySelector('.mobile-menu')
    const menuBtn = document.querySelector('.header__main__menu__mobile-menu')
    const menuClose = document.querySelector('.mobile-menu__close')
    const menuFade = document.querySelector('.mobile-menu__fade')

    menuBtn.onclick = () => {
        ActiveMobileMenu(menu)
    }
    menuClose.onclick = () => {
        DisactiveMobileMenu(menu)
    }
    menuFade.onclick = () => {
        DisactiveMobileMenu(menu)
    }
}

window.addEventListener('load', function() {
    MobileMenu()
})