// import  "../assets/blog/ecommerce-gb2880d7bf_1280.jpg"


function backendNote () {

    let DOMrender = document.querySelector('header')
    let containerRender = document.createElement('div')

    DOMrender.innerHTML = ''

    const consoleLogFrom = (e) => {
        if(e.target.parentElement.parentElement.parentElement.classList.contains('activate')){  
            e.target.parentElement.parentElement.parentElement.classList.remove('activate')
            return
        }
        e.target.parentElement.parentElement.parentElement.classList.add('activate')
    
    }
    
    containerRender.innerHTML = `<div class="docs activate">
        <div class="nav_docs">Hello world</div>
        <div class="header_docs">
            <div class="hero_docs">
                <h2>Titulo One</h2>

                <button class="btn" id="btn_hero" >
                    <img href="../assets/icons/navegation.svg" alt="none"/>
                </button>
            </div>

            <div class="container_docs">
                <div class="cards_docs">
                </div>

                <div class="cards_docs">
                </div>

                <div class="cards_docs">
                </div>
            </div>
        </div>
    </div>`
    
    
    DOMrender.appendChild(containerRender)
    

    let btn_hero_docs = DOMrender.querySelector('#btn_hero')

    btn_hero_docs.addEventListener('click', (e) => consoleLogFrom(e))
}
 


export default backendNote