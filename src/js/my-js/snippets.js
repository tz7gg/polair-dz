function DisactiveMobileMenu(closeEl) {
    closeEl.classList.remove('active')
    document.body.classList.remove('no-scroll')
}

function ActiveMobileMenu(OpenEL) {
    document.body.classList.add('no-scroll')
    OpenEL.classList.add('active')
}