const header_nav = document.querySelector('.header-nav')


function elementForOtherDoc () {

    let referenceElementWindow = parseInt(document.querySelector('body').getBoundingClientRect().bottom  / 15)
    let positionNavbar = parseInt(window.scrollY)

    if(positionNavbar < referenceElementWindow) {
        header_nav.style = 'background-color: transparent;'        
        return
    }
    header_nav.style = 'background-color: var(--azul);'
}



export default elementForOtherDoc