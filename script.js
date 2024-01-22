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


let tabLayout = false
tab.addEventListener("click", toggleTabLayout)





/* 
    position: absolute

    classes:
    r1 c1 | r1 c2 | r1 c3 | r1 c4
    r2 c1 | r2 c2 | r2 c3 | r2 c4
    r3 c1 | r3 c2 | r3 c3 | r3 c4

    for(let r = 1; r > (maxSlides / 4))

*/




//* <Typing
let started = false
function initiatePresentation () {
    if(started)
        return
    started = true

    const line1 = document.querySelector(".line1")
    let tempDelay = 3000;
    writeLine('<h1 ',line1.querySelector(".s1"),"left",3); 
    tempDelay += typeSpeed * 4

    setTimeout(() => {
        writeLine('onclick',line1.querySelector(".s2"),"left",0);
    }, tempDelay);
    tempDelay += typeSpeed * 7

    setTimeout(() => {
        writeLine('="',line1.querySelector(".s3"),"left",0);
    }, tempDelay);
    tempDelay += typeSpeed * 2

    setTimeout(() => {
        writeLine('startPresentation',line1.querySelector(".s4"),"left",0);
    }, tempDelay);
    tempDelay += typeSpeed * 17

    setTimeout(() => {
        writeLine('()',line1.querySelector(".s5"),"left",0);
    }, tempDelay);
    tempDelay += typeSpeed * 2

    setTimeout(() => {
        writeLine('"',line1.querySelector(".s6"),"left",0);
    }, tempDelay);
    tempDelay += typeSpeed * 1
    
    setTimeout(() => {
        writeLine('>',line1.querySelector(".s7"),"left",0);
    }, tempDelay);
     
    let delay = (typeSpeed * 34) + 3000




    setTimeout(() => {
        writeLine('Start Presentation', document.querySelector(".line2"),"left",0)
        document.querySelector(".indentLine2").style.opacity="1"
    }, delay);
    delay += typeSpeed * 18




    setTimeout(() => {
        writeLine('</h1>', document.querySelector(".line3"),"left",0)
    }, delay);
    delay += typeSpeed * 5
    



    setTimeout(() => {
        tempDelay = 0;
        const line4 = document.querySelector(".line4")
        writeLine('body ', line4.querySelector(".s1"),"left",0); tempDelay += 5 * typeSpeed
        setTimeout(() => {
            writeLine('{', line4.querySelector(".s2"),"left",0);
        }, tempDelay);
    }, delay);
    delay += typeSpeed * 6
    



    setTimeout(() => {
        tempDelay = 0;
        const line5 = document.querySelector(".line5")
        writeLine('display', line5.querySelector(".s1"),"left",0)
        tempDelay += typeSpeed * 7
        setTimeout(() => {
            writeLine(': ', line5.querySelector(".s2"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 2
        setTimeout(() => {
            writeLine('flex', line5.querySelector(".s3"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 4
        setTimeout(() => {
            writeLine(';', line5.querySelector(".s4"),"left",0)
        }, tempDelay);
    }, delay);
    delay += typeSpeed * 14
    


    
    setTimeout(() => {
        tempDelay = 0;
        const line6 = document.querySelector(".line6")
        writeLine('justify-content', line6.querySelector(".s1"),"left",0)
        tempDelay += typeSpeed * 15
        setTimeout(() => {
            writeLine(': ', line6.querySelector(".s2"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 2
        setTimeout(() => {
            writeLine('center', line6.querySelector(".s3"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 6
        setTimeout(() => {
            writeLine(';', line6.querySelector(".s4"),"left",0)
        }, tempDelay);
    }, delay);
    delay += typeSpeed * 24
    



    setTimeout(() => {
        tempDelay = 0;
        const line7 = document.querySelector(".line7")
        writeLine('align-items', line7.querySelector(".s1"),"left",0)
        tempDelay += typeSpeed * 11
        setTimeout(() => {
            writeLine(': ', line7.querySelector(".s2"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 2
        setTimeout(() => {
            writeLine('center', line7.querySelector(".s3"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 6
        setTimeout(() => {
            writeLine(';', line7.querySelector(".s4"),"left",0)
        }, tempDelay);
    }, delay);
    delay += typeSpeed * 20
    



    setTimeout(() => {
        writeLine('}', document.querySelector(".line8"),"left", 0)
    }, delay);
    delay += typeSpeed * 1
    



    setTimeout(() => {
        tempDelay = 0;
        const line9 = document.querySelector(".line9")
        writeLine('h1 ', line9.querySelector(".s1"),"left",0); tempDelay += 3 * typeSpeed
        setTimeout(() => {
            writeLine('{', line9.querySelector(".s2"),"left",0);
        }, tempDelay);
    }, delay);
    delay += typeSpeed * 4
    



    setTimeout(() => {
        tempDelay = 0;
        const line = document.querySelector(".line10")
        writeLine('padding', line.querySelector(".s1"),"left",0)
        tempDelay += typeSpeed * 7
        setTimeout(() => {
            writeLine(': ', line.querySelector(".s2"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 2
        setTimeout(() => {
            writeLine('1em', line.querySelector(".s3"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 3
        setTimeout(() => {
            writeLine(';', line.querySelector(".s4"),"left",0)
        }, tempDelay);
    }, delay);
    delay += typeSpeed * 13
    



    setTimeout(() => {
        tempDelay = 0;
        const line = document.querySelector(".line11")
        writeLine('font-size', line.querySelector(".s1"),"left",0)
        tempDelay += typeSpeed * 9
        setTimeout(() => {
            writeLine(': ', line.querySelector(".s2"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 2
        setTimeout(() => {
            writeLine('2em', line.querySelector(".s3"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 3
        setTimeout(() => {
            writeLine(';', line.querySelector(".s4"),"left",0)
        }, tempDelay);
    }, delay);
    delay += typeSpeed * 15
    



    setTimeout(() => {
        tempDelay = 0;
        const line = document.querySelector(".line12")
        writeLine('border', line.querySelector(".s1"),"left",0)
        tempDelay += typeSpeed * 6
        setTimeout(() => {
            writeLine(': ', line.querySelector(".s2"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 2
        setTimeout(() => {
            writeLine('solid 3px #0AA', line.querySelector(".s3"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 14
        setTimeout(() => {
            writeLine(';', line.querySelector(".s4"),"left",0)
        }, tempDelay);
    }, delay);
    delay += typeSpeed * 23
    



    setTimeout(() => {
        tempDelay = 0;
        const line = document.querySelector(".line13")
        writeLine('color', line.querySelector(".s1"),"left",0)
        tempDelay += typeSpeed * 5
        setTimeout(() => {
            writeLine(': ', line.querySelector(".s2"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 2
        setTimeout(() => {
            writeLine('#0AA', line.querySelector(".s3"),"left",0)
        }, tempDelay);
        tempDelay += typeSpeed * 4
        setTimeout(() => {
            writeLine(';', line.querySelector(".s4"),"left",0)
        }, tempDelay);
    }, delay);
    delay += typeSpeed * 12




    setTimeout(() => {
        writeLine('}', document.querySelector(".line14"),"left",0)
    }, delay);
    delay += typeSpeed * 1
    
    startCounter()
}
//* </Typing


//* <Counter
const clock = document.querySelector("#counter");

function startCounter (){
    clock.style.opacity="1";
    var time = 600;
    var tracker = false;
    const countdown = setInterval(() => {
        if(time != 0 && tracker == false){
            time = time - 1;
            clock.innerHTML=`${time}`;
        }else{
            tracker = true;
            if(time < 900){
                time = time + 1;
                clock.innerHTML=`${time}`;
            }
            //clearInterval(countdown);
        }
    }, 1000);
}
//* </Counter

//* <Typing functions
const typeSpeed = 65;

const breakDownString = (str, charactersVisible, alignment = "left") => {
    console.log(str)
    const originalStr = str
    let newStr = ""

    let spaceType = alignment == "center" ? "&nbsp;" : " "
    
    for(let i = originalStr.length - 1; i > -1; i--){
        if(i <= charactersVisible){
            if(originalStr[i] == "<"){
                newStr = "&lt;" + newStr
            }else if(originalStr[i] == ">"){
                newStr = "&gt;" + newStr
            }else if(originalStr[i] == " "){
                newStr = "&nbsp;" + newStr
            }else{
                newStr = originalStr[i] + newStr
            }
        }else{
            if(i == charactersVisible + 1){
                newStr = "_" + newStr
            }else{
                newStr = spaceType + newStr
            }
        }
    }
    return newStr
}

const writeLine = (string, placement, alignment = "left", time = 3) => {
    time = time * 1000
    blinkingEffect(string, placement, alignment, time)

    setTimeout(() => {
        for(let i = 0; i < string.length; i++){
            setTimeout(() => {
                placement.innerHTML = breakDownString(string, i, alignment)
            }, typeSpeed * i);
        }
    }, time);
}

const blinkingEffect = (string, placement, alignment = "left", time) => {
    let space = ""
    let _space = ""

    //let spaceType = alignment == "center" ? "&nbsp;" : " "
    spaceType = "&nbsp;"
    
    for(let i = 0; i < string.length; i++){
        space = space + spaceType
        if(i == 0){
            _space = _space + "_"
        }else{
            _space = _space + spaceType
        }
    }

    //? amount of times it blinks before typing
    let blinks = Math.floor(time / 1000)

    blinks = blinks * 2
    placement.innerHTML = _space
    let visibility = true
    for(let i = 0; i < blinks; i++){
        setTimeout(() => {
            if(visibility == true){
                placement.innerHTML = space
                visibility = false
            }else{
                placement.innerHTML = _space
                visibility = true
            }
        }, time / blinks * i);
    }
}
//* </Typing functions





/* Utility */

const trailer = document.querySelector("#trailer")
function startPresentation () {
    trailer.classList.add("off")
}

function toggleTabLayout () {
    main.classList.toggle("selectSlideView")
    tab.classList.toggle("on")
    tabLayout = !tabLayout
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

document.querySelectorAll("main>section>div").forEach((div, index) => {
    div.addEventListener("click", () => {
        if(tabLayout){
            slide = index
            main.style.marginLeft = `-${slide * 100}vw`
            checkAndUpdateButtons()
            
            toggleTabLayout()
        }
    })
})
