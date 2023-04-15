
    let DOMrender = document.querySelector('header')
    let containerRender = document.createElement('div')
// import  "../assets/blog/ecommerce-gb2880d7bf_1280.jpg"


function backendNote () {

    DOMrender.innerHTML = ''

    
    
    containerRender.innerHTML = `
    <div class="docs activate">

        <div class="hero_docs">
                
            <h2 class="title_header_docs">Backend</h2>

            <button class="btn" id="btn_hero" >
                <img src="../assets/icons/navegation.svg" alt="none"/>
            </button>
        </div>
    
        <div class="nav_docs">
            <div class="nav_container_docs">
                <ul class="nav_item_docs">
                    <li>
                        <a href="#">home</a>
                    </li>

                    <li>
                        <a href="#serverSR">home</a>
                    </li>

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
        </div>

        <div class="header_docs">



            <div class="container_docs" id="bienvenidoSR">
                <div class="cards_docs">

                    <img src="../assets/icons/bolloon.svg" alt="none" class="image_cards_docs"/>
                    <div class="cards_content_docs">
                        <h2>Servidor JS</h2>
                        <p>Entrar al backend es el siguiente nivel para un desarrollador frontend, llegando a ser fullstack</p>

                        <p>Esto lleva a comprender el lenguaje en si mismo, conociendo temas como el callback en profundidad</p>
                    </div>
                </div>

                <div class="cards_docs">

                    <img src="../assets/icons/bolloon.svg" alt="none" class="image_cards_docs"/>
                    <div class="cards_content_docs">
                        <h2>Node js</h2>
                        <p></p>
                    </div>
                </div>

                <div class="cards_docs" id="serverSR">

                    <img src="../assets/icons/bolloon.svg" alt="none" class="image_cards_docs"/>
                    <div class="cards_content_docs">
                        <h2 >Server side render</h2>
                        <p>texto de la siente bentana</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    
    
    DOMrender.appendChild(containerRender)
    

    let btn_hero_docs = DOMrender.querySelector('#btn_hero')
    let containerDOM = DOMrender.querySelector('.header_docs')

    btn_hero_docs.addEventListener('click', (e) => {
        e.stopPropagation()
        showMenuDocs(e)
    })



    const showMenuDocs = ({target:{parentElement}}) => {
        setShowMenuDocs(parentElement.parentElement.parentElement)    
    }


    
    containerDOM.addEventListener('scroll', () => {
        setLocationElementDOM()
    })




}

function setLocationElementDOM () {
    const location = [...DOMrender.querySelectorAll('.header_docs div')]

    location.forEach(address => {
        parseInt(address.getBoundingClientRect().bottom)
    })

    return location
}


const setShowMenuDocs = (reference) => {
    if(reference.classList.contains('activate')){  
        reference.classList.remove('activate')
        return
    }

    reference.classList.add('activate')
}
 


export default backendNote