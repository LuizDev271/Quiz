//=======================
// Variables

let check = document.getElementById('check')
let word = document.getElementById('text')
let alts = Array.from(document.getElementsByClassName('alt-text'))
let sequence = document.getElementById('count-question')
let letters = Array.from(document.getElementsByTagName('li'))
let words = document.getElementById("words")

let chance = 0
let attempt = 1

let used = []
let correct = []

//=======================
// Local Storage Word Continuity

if (!localStorage.getItem("letters")) {
    let obj = {
        A: true,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        N: false,
        O: false,
        Q: false,
        V: false,
        Y: false
    }

    localStorage.setItem("letters", JSON.stringify(obj))
}

if (!localStorage.getItem("lettersWins")) {
    let obj2 = {
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        N: false,
        O: false,
        Q: false,
        V: false,
        Y: false
    }

    localStorage.setItem("lettersWins", JSON.stringify(obj2))
}

function liArray(param = false, param2, paramClass = false, param3) {
    let times = 0

    if (!param) {
        Array.from(document.querySelectorAll('li')).forEach(li => {
            li.classList.remove('active')
        })

    } else if (param) {
        Array.from(document.querySelectorAll('li')).forEach(li => {
            if (li.innerHTML == param2) {
                li.classList.add('active')
            }
        })

    } else if (paramClass) {
        if (times == 0) {
            Array.from(document.querySelectorAll('li')).forEach(li => {
                if (li.innerHTML == param3) {
                    li.classList.remove('active')
                    li.classList.add('win')
                }
            })

            times++
        }

    }
}

function liWin(param, time = false) {
    let letters = JSON.parse(localStorage.getItem("lettersWins"))
    let times = 0

    if (!time) {
        Array.from(document.querySelectorAll('li')).forEach(li => {
            if (li.innerHTML == param) {
                li.classList.add('win')
            }
        })

        times++
    }

    if(time){
        letters = Object.entries(JSON.parse(localStorage.getItem("lettersWins")))
        letters.forEach(letter => {
            if(letter[1]){
                liWin(letter[0], false)
            }
        })
    }
}

alts.forEach(tag => {
    tag.addEventListener("click", () => {
        checked(tag, false, event)
        missing.innerHTML = ''
        let miss = funcMiss()
        
        if(miss.length <= 10){
            miss.forEach(word => {
                missing.appendChild(missingWords(word))  
            })
        }
    })
})


