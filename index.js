const buttonMenu = document.getElementById('btn_menu_show')
const prevent = document.getElementById('btnPrevent')
const next = document.getElementById('btnNext')

const menuShow = document.getElementById('menuShow')


prevent.addEventListener('click', () => plusCarrusel(-1))
next.addEventListener('click', () => plusCarrusel(1))

buttonMenu.addEventListener('click', () => {
    ShowMenu()
})


function ShowMenu (){
    // let width = menuShow.scrollWidth
    let initializing = menuShow.clientWidth
    let widthReference = window.innerWidth
    
    
    if(initializing === 0){
        return menuShow.style.width = `${widthReference}px`
    }
    
    menuShow.style.width = `0px`
    
}


let positionInitial = 1;

window.addEventListener('DOMContentLoaded', () => {
    currentCarrusel(positionInitial);
})



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

