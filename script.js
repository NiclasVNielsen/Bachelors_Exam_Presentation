const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
const tab = document.querySelector("#tab")

const main = document.querySelector("main")

let slide = 0
const maxSlides = document.querySelectorAll("main>section").length - 1

next.addEventListener("click", () => {
    if(slide < maxSlides){
        slide++
        main.style.marginLeft = `-${slide * 100}vw`
        checkAndUpdateButtons()
    }
})

prev.addEventListener("click", () => {
    if(slide > 0){
        slide--
        main.style.marginLeft = `-${slide * 100}vw`
        checkAndUpdateButtons()
    }
})


tab.addEventListener("click", toggleTabLayout)





/* 
    position: absolute

    classes:
    r1 c1 | r1 c2 | r1 c3 | r1 c4
    r2 c1 | r2 c2 | r2 c3 | r2 c4
    r3 c1 | r3 c2 | r3 c3 | r3 c4

    for(let r = 1; r > (maxSlides / 4))

*/












/* Utility */

function toggleTabLayout () {
    main.classList.toggle("selectSlideView")
    tab.classList.toggle("on")
}


const checkAndUpdateButtons = () => {
    checkButtons()
    updateButtons()
}

nextState = true
prevState = true
const checkButtons = () => {
    if(slide == maxSlides){
        nextState = false
    }else{
        nextState = true
    }

    if(slide == 0){
        prevState = false
    }else{
        prevState = true
    }
}

const updateButtons = () => {
    if(nextState == false){
        next.classList.add("disabled")
    }else{
        next.classList.remove("disabled")
    }

    if(prevState == false){
        prev.classList.add("disabled")
    }else{
        prev.classList.remove("disabled")
    }
}