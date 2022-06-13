const menuBar = document.querySelector('.menu')
const allLi = document.querySelectorAll('li')

allLi.forEach((li, index) => {

    li.addEventListener ("click", e => {
        menuBar.querySelector(".lista-ativa").classList.remove("lista-ativa")
        li.classList.add("lista-ativa")

        const indicator = document.querySelector(".indicator")
        indicator.style.transform = `translateX(calc(${index * 90}px))`
    })
})