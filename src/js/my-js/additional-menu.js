function additionalMobileMenu() {
    const menu = document.querySelector('.additional-mobile-menu')
    const menuItemsWrap = menu.querySelector('.additional-mobile-menu__items')
    const menuTitle = menu.querySelector('.additional-mobile-menu__title')
    const menuClose = menu.querySelector('.additional-mobile-menu__close')
    const menuFade = menu.querySelector('.additional-mobile-menu__fade')
    const links = document.querySelectorAll('.header__second__items__item.mobile')

    links.forEach(item => {
        item.onclick = function() {
            ActiveMobileMenu(menu)
            const links = this.querySelectorAll('li a')
            const titleText = this.querySelector('.header__second__items__item__text').innerText

            menuItemsWrap.innerHTML = ''
            menuTitle.innerText = titleText
            let content = ''

            links.forEach(item => {
                const el = `<a href="${item.href}" class="additional-mobile-menu__items__item">${item.innerText}</a>`
                content += el
            })
            menuItemsWrap.innerHTML = content
        }
    })

    menuClose.onclick = () => {
        DisactiveMobileMenu(menu)
    }
    menuFade.onclick = () => {
        DisactiveMobileMenu(menu)
    }
}

window.addEventListener('load', function() {
    additionalMobileMenu()
})