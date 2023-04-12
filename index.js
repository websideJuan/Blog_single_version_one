const buttonMenu = document.getElementById('btn_menu_show')
const prevent = document.getElementById('btnPrevent')
const next = document.getElementById('btnNext')

const menuShow = document.getElementById('menuShow')


window.addEventListener('DOMContentLoaded', () => {
    window.scroll({top:0})
    currentCarrusel(positionInitial);
})



// console.log( "console 1", document.querySelector('#btn_menu_show').getBoundingClientRect().bottom)
window.addEventListener('scroll', () => {
    let referenceElement = menuShow.getBoundingClientRect().bottom
    let referenceElementWindow = document.querySelector('body').getBoundingClientRect().bottom
    let positionNavbar = window.scrollY

    // console.log(`elemento DOM menu ${parseInt(referenceElement)}`)
    // console.log(`elemento Body ${parseInt(referenceElementWindow / 4) }`)
    // console.log(`Barra posicionada en el docuemnto ${parseInt(positionNavbar)}`)

    console.log(referenceElementWindow / 4 <= positionNavbar)

    if(referenceElementWindow / 4 <= positionNavbar) {
        document.querySelector('.header-nav').style.backgroundColor = 'var(--azul)'
        return 
    }
    
    document.querySelector('.header-nav').style.backgroundColor = 'initial'
})

const showConsole = () => {

    const options = {
        top: window.innerHeight,
        left:0,
        behavior: "smooth"
    }

    window.scroll(options)
}

buttonMenu.addEventListener('click', () => {
    ShowMenu()
})


function ShowMenu (){
    let initializing = menuShow.clientWidth
    let widthReference = window.innerWidth
    
    if(initializing === 0){
        buttonMenu.firstElementChild.setAttribute('src', './assets/icons/closeBTN.svg')
        return menuShow.style.width = `${widthReference}px`
    }

    menuShow.style.width = `0px`
    buttonMenu.firstElementChild.setAttribute('src', './assets/icons/menuBTN.svg')
    
}


let positionInitial = 1;

prevent.addEventListener('click', () => plusCarrusel(-1))
next.addEventListener('click', () => plusCarrusel(1))


function plusCarrusel(n)  {
    carruselController(positionInitial += n)
}

function currentCarrusel(n) {
    carruselController(positionInitial = n)
}

function carruselController (numberGenerated) {
    let i;

    let carrusel = [...document.querySelectorAll('.carrusel .hero')]
    let banner = [...document.querySelectorAll('.carrusel .round')]

    if(numberGenerated > carrusel.length){positionInitial = 1}
    if(numberGenerated < 1){positionInitial = carrusel.length}


    for( i = 0 ; i < carrusel.length; i++){
        carrusel[i].classList.remove('hero_view')
    }

    for(i = 0; i < banner.length; i++){
        banner[i].classList.remove('roundSelected')
    }

    carrusel[positionInitial-1].classList.add('hero_view')
    banner[positionInitial - 1].classList.add('roundSelected')
}

