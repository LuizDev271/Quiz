function getWordA() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskA.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskA.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradA[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskA[x]

    used.push(wordsTradA[x])

    for (let x = 0; x <= 5; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskA.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradA[y]) == false) {
                        used.push(wordsTradA[y])

                        if (wordsTradA[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradA[y]
                    }
                }
            }
        })
    }
}
function getWordB() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskB.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskB.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradB[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskB[x]

    used.push(wordsTradB[x])

    for (let x = 0; x <= 5; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskB.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradB[y]) == false) {
                        used.push(wordsTradB[y])

                        if (wordsTradB[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradB[y]
                    }
                }
            }
        })
    }
}
function getWordC() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskC.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskC.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradC[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskC[x]

    used.push(wordsTradC[x])

    for (let x = 0; x <= 5; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskC.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradC[y]) == false) {
                        used.push(wordsTradC[y])

                        if (wordsTradC[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradC[y]
                    }
                }
            }
        })
    }
}
function getWordD() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskD.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskD.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradD[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskD[x]

    used.push(wordsTradD[x])

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskD.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradD[y]) == false) {
                        used.push(wordsTradD[y])

                        if (wordsTradD[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradD[y]
                    }
                }
            }
        })
    }
}
function getWordE() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskE.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskE.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradE[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskE[x]

    used.push(wordsTradE[x])

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskE.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradE[y]) == false) {
                        used.push(wordsTradE[y])

                        if (wordsTradE[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradE[y]
                    }
                }
            }
        })
    }
}
function getWordF() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskF.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskF.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradF[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskF[x]

    used.push(wordsTradF[x])

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskF.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradF[y]) == false) {
                        used.push(wordsTradF[y])

                        if (wordsTradF[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradF[y]
                    }
                }
            }
        })
    }
}
function getWordG() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskG.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskG.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradG[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskG[x]

    used.push(wordsTradG[x])

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskG.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradG[y]) == false) {
                        used.push(wordsTradG[y])

                        if (wordsTradG[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradG[y]
                    }
                }
            }
        })
    }
}
function getWordH() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskH.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskH.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradH[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskH[x]

    used.push(wordsTradH[x])

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskH.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradH[y]) == false) {
                        used.push(wordsTradH[y])

                        if (wordsTradH[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradH[y]
                    }
                }
            }
        })
    }
}
function getWordI() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskI.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskI.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradI[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskI[x]

    used.push(wordsTradI[x])

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskI.length)
                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradI[y]) == false) {
                        used.push(wordsTradI[y])

                        if (wordsTradI[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradI[y]
                    }
                }
            }
        })
    }
}
function getWordJ() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskJ.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskJ.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradJ[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskJ[x]

    used.push(wordsTradJ[x])

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskJ.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradJ[y]) == false) {
                        used.push(wordsTradJ[y])

                        if (wordsTradJ[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradJ[y]
                    }
                }
            }
        })
    }
}
function getWordK() {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskK.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskK.length - 1))
    }

    let z = Math.floor(Math.random() * alts.length)

    alts[z].innerHTML = wordsTradK[x]
    alts[z].setAttribute("Correct", true)

    word.style.color = 'yellow'
    word.innerHTML = wordsAskK[x]

    used.push(wordsTradK[x])

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskK.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradK[y]) == false) {
                        used.push(wordsTradK[y])

                        if (wordsTradK[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradK[y]
                    }
                }
            }
        })
    }
}