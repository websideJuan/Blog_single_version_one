// import  "../assets/blog/ecommerce-gb2880d7bf_1280.jpg"


function backendNote () {

    let DOMrender = document.querySelector('header')
    let containerRender = document.createElement('div')

    DOMrender.innerHTML = ''

    
    
    containerRender.innerHTML = `<div class="docs activate">
        <div class="nav_docs">
            <ul class="nav_item_docs">
                <li>
                    <a href="#">home</a>
                </li>

                <li>
                    <a href="#">home</a>
                </li>

                <li>
                    <a href="#">home</a>
                </li>
            </ul>
        </div>

        <div class="header_docs">
            <div class="hero_docs">
                <h2 class="title_header_docs">Backend</h2>

                <button class="btn" id="btn_hero" >
                    <img src="../assets/icons/navegation.svg" alt="none"/>
                </button>

                
            </div>

            <div class="container_docs container">
                <div class="cards_docs">
                    <img src="../assets/icons/bolloon.svg" alt="none" class="image_cards_docs"/>

                    <div class="cards_content_docs">
                        <h2>Backend from javascript fullStack</h2>
                        <p>
                            Bienvenido a la recopilacion de mis estudios autodidactas
                        </p>

                        <p>
                            El principal motivo de aprender el arte de programar 
                            ganar mucho y trabajar poco, ajaja.
                        </p>

                        <p>
                            Ya hablando en serio, la compania de las computadoras me ayudo con todo en mi vida, aun siendo algo de lo que se burlaban
                        </p>

                    </div>
                </div>
                <div class="cards_docs">
                    <h2>Server side render</h2>
                    <div class="cards_content_docs">

                    </div>
                </div>
            </div>
        </div>
    </div>`
    
    
    DOMrender.appendChild(containerRender)
    

    let btn_hero_docs = DOMrender.querySelector('#btn_hero')
    btn_hero_docs.addEventListener('click', (e) => showMenuDocs(e))




    const showMenuDocs = ({target:{parentElement}}) => {


        setShowMenuDocs(parentElement.parentElement.parentElement.parentElement)
       

    
    }

}


const setShowMenuDocs = (reference) => {
    if(reference.classList.contains('activate')){  
        reference.classList.remove('activate')
        return
    }

    reference.classList.add('activate')
}
 


export default backendNote