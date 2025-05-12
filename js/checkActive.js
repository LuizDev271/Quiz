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
                    getWordA()
                    words.innerHTML = `${wordsAskA.length - correct.length}`
                    
                    if (correct.length == wordsTradA.length) {
                        liWin("A")
                        letterWin("A")
                    }
                } else if (letters.B) {
                    getWordB()
                    words.innerHTML = `${wordsAskB.length - correct.length}`

                    if (correct.length == wordsTradB.length) {
                        liWin("B")
                        letterWin("B")
                    }
                } else if (letters.C) {
                    getWordC()
                    words.innerHTML = `${wordsAskC.length - correct.length}`

                    if (correct.length == wordsTradC.length) {
                        liWin("C")
                        letterWin("C")
                    }
                } else if (letters.D) {
                    getWordD()
                    words.innerHTML = `${wordsAskD.length - correct.length}`

                    if (correct.length == wordsTradD.length) {
                        liWin("D")
                        letterWin("D")
                    }
                } else if (letters.E) {
                    getWordE()
                    words.innerHTML = `${wordsAskE.length - correct.length}`

                    if (correct.length == wordsTradE.length) {
                        liWin("E")
                        letterWin("E")
                    }
                } else if (letters.F) {
                    getWordF()
                    words.innerHTML = `${wordsAskF.length - correct.length}`

                    if (correct.length == wordsTradF.length) {
                        liWin("F")
                        letterWin("F")
                    }
                } else if (letters.G) {
                    getWordG()
                    words.innerHTML = `${wordsAskG.length - correct.length}`

                    if (correct.length == wordsTradG.length) {
                        liWin("G")
                        letterWin("G")
                    }
                } else if (letters.H) {
                    getWordH()
                    words.innerHTML = `${wordsAskH.length - correct.length}`

                    if (correct.length == wordsTradH.length) {
                        liWin("H")
                        letterWin("H")
                    }
                } else if (letters.I) {
                    getWordI()
                    words.innerHTML = `${wordsAskI.length - correct.length}`

                    if (correct.length == wordsTradI.length) {
                        liWin("I")
                        letterWin("I")
                    }
                } else if (letters.J) {
                    getWordJ()
                    words.innerHTML = `${wordsAskJ.length - correct.length}`

                    if (correct.length == wordsTradJ.length) {
                        liWin("J")
                        letterWin("J")
                    }
                } else if (letters.K) {
                    getWordK()
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
        if (event.keyCode == 13) {
            chance = 0
            check.style.display = 'none'
            check.classList.remove('wrong')
            check.innerHTML = ''

        } else if(event.keyCode == 8){
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
        }
    })
})