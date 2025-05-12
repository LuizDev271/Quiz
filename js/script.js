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
        K: false
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
        K: false
    }

    localStorage.setItem("lettersWins", JSON.stringify(obj2))
}

function lastLetter() {
    let letters = JSON.parse(localStorage.getItem("letters"))

    if (letters.A) {
        getWordA()
        activeLetter("A")
    } else if (letters.B) {
        getWordB()
        activeLetter("B")
    } else if (letters.C) {
        getWordC()
        activeLetter("C")
    } else if (letters.D) {
        getWordD()
        activeLetter("D")
    } else if (letters.E) {
        getWordE()
        activeLetter("E")
    } else if (letters.F) {
        getWordF()
        activeLetter("F")
    } else if (letters.G) {
        getWordG()
        activeLetter("G")
    } else if (letters.H) {
        getWordH()
        activeLetter("H")
    } else if (letters.I) {
        getWordI()
        activeLetter("I")
    } else if (letters.J) {
        getWordJ()
        activeLetter("J")
    } else if (letters.K) {
        getWordK()
        activeLetter("K")
    }
}

function activeLetter(letter) {

    if (letter == "A") {
        liArray(true, "A")
    } else if (letter == "B") {
        liArray(true, "B")
    } else if (letter == "C") {
        liArray(true, "C")
    } else if (letter == "D") {
        liArray(true, "D")
    } else if (letter == "E") {
        liArray(true, "E")
    } else if (letter == "F") {
        liArray(true, "F")
    } else if (letter == "G") {
        liArray(true, "G")
    } else if (letter == "H") {
        liArray(true, "H")
    } else if (letter == "I") {
        liArray(true, "I")
    } else if (letter == "J") {
        liArray(true, "J")
    } else if (letter == "K") {
        liArray(true, "K")
    }
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

function letterWin(param) {
    let letters = JSON.parse(localStorage.getItem("lettersWins"))
    let obj

    switch (param) {
        case "A":
            obj = {
                A: true,
                B: letters.B ? true : false,
                C: letters.C ? true : false,
                D: letters.D ? true : false,
                E: letters.E ? true : false,
                F: letters.F ? true : false,
                G: letters.G ? true : false,
                H: letters.H ? true : false,
                I: letters.I ? true : false,
                J: letters.J ? true : false,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "B":
            obj = {
                A: letters.A ? true : false,
                B: true,
                C: letters.C ? true : false,
                D: letters.D ? true : false,
                E: letters.E ? true : false,
                F: letters.F ? true : false,
                G: letters.G ? true : false,
                H: letters.H ? true : false,
                I: letters.I ? true : false,
                J: letters.J ? true : false,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "C":
            obj = {
                A: letters.A ? true : false,
                B: letters.B ? true : false,
                C: true,
                D: letters.D ? true : false,
                E: letters.E ? true : false,
                F: letters.F ? true : false,
                G: letters.G ? true : false,
                H: letters.H ? true : false,
                I: letters.I ? true : false,
                J: letters.J ? true : false,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "D":
            obj = {
                A: letters.A ? true : false,
                B: letters.B ? true : false,
                C: letters.C ? true : false,
                D: true,
                E: letters.E ? true : false,
                F: letters.F ? true : false,
                G: letters.G ? true : false,
                H: letters.H ? true : false,
                I: letters.I ? true : false,
                J: letters.J ? true : false,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "E":
            obj = {
                A: letters.A ? true : false,
                B: letters.B ? true : false,
                C: letters.C ? true : false,
                D: letters.D ? true : false,
                E: true,
                F: letters.F ? true : false,
                G: letters.G ? true : false,
                H: letters.H ? true : false,
                I: letters.I ? true : false,
                J: letters.J ? true : false,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "F":
            obj = {
                A: letters.A ? true : false,
                B: letters.B ? true : false,
                C: letters.C ? true : false,
                D: letters.D ? true : false,
                E: letters.E ? true : false,
                F: true,
                G: letters.G ? true : false,
                H: letters.H ? true : false,
                I: letters.I ? true : false,
                J: letters.J ? true : false,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "G":
            obj = {
                A: letters.A ? true : false,
                B: letters.B ? true : false,
                C: letters.C ? true : false,
                D: letters.D ? true : false,
                E: letters.E ? true : false,
                F: letters.F ? true : false,
                G: true,
                H: letters.H ? true : false,
                I: letters.I ? true : false,
                J: letters.J ? true : false,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "H":
            obj = {
                A: letters.A ? true : false,
                B: letters.B ? true : false,
                C: letters.C ? true : false,
                D: letters.D ? true : false,
                E: letters.E ? true : false,
                F: letters.F ? true : false,
                G: letters.G ? true : false,
                H: true,
                I: letters.I ? true : false,
                J: letters.J ? true : false,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "I":
            obj = {
                A: letters.A ? true : false,
                B: letters.B ? true : false,
                C: letters.C ? true : false,
                D: letters.D ? true : false,
                E: letters.E ? true : false,
                F: letters.F ? true : false,
                G: letters.G ? true : false,
                H: letters.H ? true : false,
                I: true,
                J: letters.J ? true : false,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "J":
            obj = {
                A: letters.A ? true : false,
                B: letters.B ? true : false,
                C: letters.C ? true : false,
                D: letters.D ? true : false,
                E: letters.E ? true : false,
                F: letters.F ? true : false,
                G: letters.G ? true : false,
                H: letters.H ? true : false,
                I: letters.I ? true : false,
                J: true,
                K: letters.K ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "K":
            obj = {
                A: letters.A ? true : false,
                B: letters.B ? true : false,
                C: letters.C ? true : false,
                D: letters.D ? true : false,
                E: letters.E ? true : false,
                F: letters.F ? true : false,
                G: letters.G ? true : false,
                H: letters.H ? true : false,
                I: letters.I ? true : false,
                J: letters.J ? true : false,
                K: true
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
    }
}

function getLetterWin(){
    let letters = JSON.parse(localStorage.getItem("lettersWins"))
    
    if(letters.A){
        liWin("A", true)
    } else if(letters.B){
        liWin("B", true)
    } else if(letters.C){
        liWin("C", true)
    } else if(letters.D){
        liWin("D", true)
    } else if(letters.E){
        liWin("E", true)
    } else if(letters.F){
        liWin("F", true)
    } else if(letters.G){
        liWin("G", true)
    } else if(letters.H){
        liWin("H", true)
    } else if(letters.I){
        liWin("I", true)
    } else if(letters.J){
        liWin("J", true)
    } else if(letters.K){
        liWin("K", true)
    }
    
}

alts.forEach(tag => {
    tag.addEventListener("click", () => {
        checked(tag, false, event)
    })
})


