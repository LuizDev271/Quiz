function checked(tag, param = false, event) {
    letters = JSON.parse(localStorage.getItem("letters"))

    if (!param) {
        if (chance == 0) {

            if (tag.hasAttribute('correct')) {
                attempt++
                sequence.innerHTML = attempt
                used = []

                if (!correct.includes(tag.innerHTML)) {
                    correct.push(tag.innerHTML)
                }

                alts.forEach(tag => {
                    tag.innerHTML = '...'
                })

                if (letters.A) {
                    if(attempt >= 150 && (wordsTradA.length - correct.length) == 1){
                        getWordA(true)
                    } else {
                        getWordA(false)
                    }

                    words.innerHTML = `${wordsAskA.length - correct.length}`
                    
                    if (correct.length == wordsTradA.length) {
                        liWin("A")
                        letterWin("A")
                    }
                } else if (letters.B) {
                    if(attempt >= 150 && (wordsTradB.length - correct.length) == 1){
                        getWordB(true)
                    } else {
                        getWordB(false)
                    }

                    words.innerHTML = `${wordsAskB.length - correct.length}`

                    if (correct.length == wordsTradB.length) {
                        liWin("B")
                        letterWin("B")
                    }
                } else if (letters.C) {
                    if(attempt >= 150 && (wordsTradC.length - correct.length) == 1){
                        getWordC(true)
                    } else {
                        getWordC(false)
                    }

                    words.innerHTML = `${wordsAskC.length - correct.length}`

                    if (correct.length == wordsTradC.length) {
                        liWin("C")
                        letterWin("C")
                    }
                } else if (letters.D) {
                    if(attempt >= 150 && (wordsTradD.length - correct.length) == 1){
                        getWordD(true)
                    } else {
                        getWordD(false)
                    }

                    words.innerHTML = `${wordsAskD.length - correct.length}`

                    if (correct.length == wordsTradD.length) {
                        liWin("D")
                        letterWin("D")
                    }
                } else if (letters.E) {
                    if(attempt >= 150 && (wordsTradE.length - correct.length) == 1){
                        getWordE(true)
                    } else {
                        getWordE(false)
                    }

                    words.innerHTML = `${wordsAskE.length - correct.length}`

                    if (correct.length == wordsTradE.length) {
                        liWin("E")
                        letterWin("E")
                    }
                } else if (letters.F) {
                    if(attempt >= 150 && (wordsTradF.length - correct.length) == 1){
                        getWordF(true)
                    } else {
                        getWordF(false)
                    }
                    words.innerHTML = `${wordsAskF.length - correct.length}`

                    if (correct.length == wordsTradF.length) {
                        liWin("F")
                        letterWin("F")
                    }
                } else if (letters.G) {
                    if(attempt >= 150 && (wordsTradG.length - correct.length) == 1){
                        getWordG(true)
                    } else {
                        getWordG(false)
                    }

                    words.innerHTML = `${wordsAskG.length - correct.length}`

                    if (correct.length == wordsTradG.length) {
                        liWin("G")
                        letterWin("G")
                    }
                } else if (letters.H) {
                    if(attempt >= 150 && (wordsTradH.length - correct.length) == 1){
                        getWordH(true)
                    } else {
                        getWordH(false)
                    }

                    words.innerHTML = `${wordsAskH.length - correct.length}`

                    if (correct.length == wordsTradH.length) {
                        liWin("H")
                        letterWin("H")
                    }
                } else if (letters.I) {
                    if(attempt >= 150 && (wordsTradI.length - correct.length) == 1){
                        getWordI(true)
                    } else {
                        getWordI(false)
                    }

                    words.innerHTML = `${wordsAskI.length - correct.length}`

                    if (correct.length == wordsTradI.length) {
                        liWin("I")
                        letterWin("I")
                    }
                } else if (letters.J) {
                    if(attempt >= 150 && (wordsTradJ.length - correct.length) == 1){
                        getWordJ(true)
                    } else {
                        getWordJ(false)
                    }
                    
                    words.innerHTML = `${wordsAskJ.length - correct.length}`

                    if (correct.length == wordsTradJ.length) {
                        liWin("J")
                        letterWin("J")
                    }
                } else if (letters.K) {
                    if(attempt >= 150 && (wordsTradK.length - correct.length) == 1){
                        getWordK(true)
                    } else {
                        getWordK(false)
                    }

                    words.innerHTML = `${wordsAskK.length - correct.length}`

                    if (correct.length == wordsTradK.length) {
                        liWin("K")
                        letterWin("K")
                    }
                }

            } else {
                chance++
                check.style.display = 'flex'
                check.classList.add('wrong')
                check.innerHTML = 'X'

                used = []
            }
        }
    }

    if (param) {
        if (event.keyCode == 13 /*ENTER*/) {
            chance = 0
            check.style.display = 'none'
            check.classList.remove('wrong')
            check.innerHTML = ''

        } else if(event.keyCode == 8/*BACKSPACE*/){
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
            Array.from(document.querySelectorAll('li')).forEach(li => {
                li.classList.remove('win')
            })
        } else if(event.keyCode == 16 /*SHIFT*/){
            attempt = 140
        }
    }
}

//==============
//Active Letter

letters.forEach(tag => {

    tag.addEventListener('click', () => {
        words.innerHTML = ""
        liArray(false)

        tag.classList.add("active")

        attempt = 1
        sequence.innerHTML = attempt

        if (tag.innerHTML == 'A') {
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

            getWordA()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'B') {
            let obj = {
                A: false,
                B: true,
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

            getWordB()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'C') {
            let obj = {
                A: false,
                B: false,
                C: true,
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

            getWordC()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'D') {
            let obj = {
                A: false,
                B: false,
                C: false,
                D: true,
                E: false,
                F: false,
                G: false,
                H: false,
                I: false,
                J: false,
                K: false
            }

            localStorage.setItem("letters", JSON.stringify(obj))
            getWordD()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'E') {
            let obj = {
                A: false,
                B: false,
                C: false,
                D: false,
                E: true,
                F: false,
                G: false,
                H: false,
                I: false,
                J: false,
                K: false
            }

            localStorage.setItem("letters", JSON.stringify(obj))

            getWordE()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'F') {
            let obj = {
                A: false,
                B: false,
                C: false,
                D: false,
                E: false,
                F: true,
                G: false,
                H: false,
                I: false,
                J: false,
                K: false
            }

            localStorage.setItem("letters", JSON.stringify(obj))

            getWordF()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'G') {
            let obj = {
                A: false,
                B: false,
                C: false,
                D: false,
                E: false,
                F: false,
                G: true,
                H: false,
                I: false,
                J: false,
                K: false
            }

            localStorage.setItem("letters", JSON.stringify(obj))

            getWordG()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'H') {
            let obj = {
                A: false,
                B: false,
                C: false,
                D: false,
                E: false,
                F: false,
                G: false,
                H: true,
                I: false,
                J: false,
                K: false
            }

            localStorage.setItem("letters", JSON.stringify(obj))

            getWordH()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'I') {
            let obj = {
                A: false,
                B: false,
                C: false,
                D: false,
                E: false,
                F: false,
                G: false,
                H: false,
                I: true,
                J: false,
                K: false
            }

            localStorage.setItem("letters", JSON.stringify(obj))

            getWordI()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'J') {
            let obj = {
                A: false,
                B: false,
                C: false,
                D: false,
                E: false,
                F: false,
                G: false,
                H: false,
                I: false,
                J: true,
                K: false
            }

            localStorage.setItem("letters", JSON.stringify(obj))

            getWordJ()
            used = []
            correct = []
            missing.innerHTML = ''
        } else if (tag.innerHTML == 'K') {
            let obj = {
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
                K: true
            }

            localStorage.setItem("letters", JSON.stringify(obj))

            getWordK()
            used = []
            correct = []
            missing.innerHTML = ''
        }
    })
})