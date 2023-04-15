import backendNote from "./pages/backend.js"
import elementForOtherDoc from "./components/getMenu.js"



const buttonMenu = document.getElementById('btn_menu_show')
const prevent = document.getElementById('btnPrevent')
const next = document.getElementById('btnNext')
const viewBackend = document.getElementById('viewBackend')
const menuShow = document.getElementById('menuShow')



window.addEventListener('DOMContentLoaded', () => {
    window.scroll({top:0})
    currentCarrusel(positionInitial);
    
})

viewBackend.addEventListener('click', (e) => {
    setTimeout(() => {
        backendNote()
        e.preventDefault()
    }, 600)
})

window.addEventListener('scroll', () => elementForOtherDoc())

buttonMenu.addEventListener('click', () => ShowMenu())


function ShowMenu (){
    let initializing = menuShow.clientWidth
    let widthReference = window.innerWidth
    
    if(initializing === 0){
        buttonMenu.firstElementChild.setAttribute('src', './assets/icons/closeBTN.svg')
        menuShow.style.width = `${widthReference}px`
        return
    }

    buttonMenu.firstElementChild.setAttribute('src', './assets/icons/menuBTN.svg')
    menuShow.style.width = `0px`
    
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

