function getWordA(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskA.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskA.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradA[lastWord('A')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskA[lastWord('A')]

        used.push(wordsTradA[lastWord('A')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradA[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskA[x]

        used.push(wordsTradA[x])
    }

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
function getWordB(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskB.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskB.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradB[lastWord('B')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskB[lastWord('B')]

        used.push(wordsTradB[lastWord('B')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradB[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskB[x]

        used.push(wordsTradB[x])
    }

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
function getWordC(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskC.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskC.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradC[lastWord('C')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskC[lastWord('C')]

        used.push(wordsTradC[lastWord('C')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradC[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskC[x]

        used.push(wordsTradC[x])
    }

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
function getWordD(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskD.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskD.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradD[lastWord('D')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskD[lastWord('D')]

        used.push(wordsTradD[lastWord('D')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradD[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskD[x]

        used.push(wordsTradD[x])
    }

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
function getWordE(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskE.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskE.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradE[lastWord('E')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskE[lastWord('E')]

        used.push(wordsTradE[lastWord('E')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradE[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskE[x]

        used.push(wordsTradE[x])
    }

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
function getWordF(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskF.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskF.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradF[lastWord('F')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskF[lastWord('F')]

        used.push(wordsTradF[lastWord('F')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradF[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskF[x]

        used.push(wordsTradF[x])
    }

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
function getWordG(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskG.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskG.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradG[lastWord('G')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskG[lastWord('G')]

        used.push(wordsTradG[lastWord('G')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradG[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskG[x]

        used.push(wordsTradG[x])
    }

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
function getWordH(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskH.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskH.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradH[lastWord('H')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskH[lastWord('H')]

        used.push(wordsTradH[lastWord('H')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradH[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskH[x]

        used.push(wordsTradH[x])
    }

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
function getWordI(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskI.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskI.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradI[lastWord('I')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskI[lastWord('I')]

        used.push(wordsTradI[lastWord('I')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradI[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskI[x]

        used.push(wordsTradI[x])
    }

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
function getWordJ(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskJ.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskJ.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradJ[lastWord('J')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskJ[lastWord('J')]

        used.push(wordsTradJ[lastWord('J')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradJ[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskJ[x]

        used.push(wordsTradJ[x])
    }

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
function getWordK(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskK.length - 1))
    if (wordsAskK[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskK.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradK[lastWord('K')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskK[lastWord('K')]

        used.push(wordsTradK[lastWord('K')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradK[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskK[x]

        used.push(wordsTradK[x])
    }

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
function getWordL(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskL.length - 1))
    if (wordsAskL[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskL.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradL[lastWord('L')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskL[lastWord('L')]

        used.push(wordsTradL[lastWord('L')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradL[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskL[x]

        used.push(wordsTradL[x])
    }

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskL.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradL[y]) == false) {
                        used.push(wordsTradL[y])

                        if (wordsTradL[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradL[y]
                    }
                }
            }
        })
    }
}
function getWordM(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskM.length - 1))
    if (wordsAskM[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskM.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradM[lastWord('M')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskM[lastWord('M')]

        used.push(wordsTradM[lastWord('M')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradM[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskM[x]

        used.push(wordsTradM[x])
    }

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskM.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradM[y]) == false) {
                        used.push(wordsTradM[y])

                        if (wordsTradM[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradM[y]
                    }
                }
            }
        })
    }
}
function getWordN(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskN.length - 1))
    if (wordsAskN[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskN.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradN[lastWord('N')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskN[lastWord('N')]

        used.push(wordsTradN[lastWord('N')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradN[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskN[x]

        used.push(wordsTradN[x])
    }

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskN.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradN[y]) == false) {
                        used.push(wordsTradN[y])

                        if (wordsTradN[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradN[y]
                    }
                }
            }
        })
    }
}
function getWordO(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskO.length - 1))
    if (wordsAskO[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskO.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradO[lastWord('O')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskO[lastWord('O')]

        used.push(wordsTradO[lastWord('O')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradO[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskO[x]

        used.push(wordsTradO[x])
    }

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskO.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradO[y]) == false) {
                        used.push(wordsTradO[y])

                        if (wordsTradO[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradO[y]
                    }
                }
            }
        })
    }
}
function getWordP(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskP.length - 1))
    if (wordsAskP[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskP.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradP[lastWord('P')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskP[lastWord('P')]

        used.push(wordsTradP[lastWord('P')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradP[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskP[x]

        used.push(wordsTradP[x])
    }

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskP.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradP[y]) == false) {
                        used.push(wordsTradP[y])

                        if (wordsTradP[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradP[y]
                    }
                }
            }
        })
    }
}
function getWordQ(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskQ.length - 1))
    if (wordsAskQ[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskQ.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradQ[lastWord('Q')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskQ[lastWord('Q')]

        used.push(wordsTradQ[lastWord('Q')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradQ[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskQ[x]

        used.push(wordsTradQ[x])
    }

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskQ.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradQ[y]) == false) {
                        used.push(wordsTradQ[y])

                        if (wordsTradQ[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradQ[y]
                    }
                }
            }
        })
    }
}
function getWordU(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskU.length - 1))
    if (wordsAskU[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskU.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradU[lastWord('U')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskU[lastWord('U')]

        used.push(wordsTradU[lastWord('U')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradU[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskU[x]

        used.push(wordsTradU[x])
    }

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskU.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradU[y]) == false) {
                        used.push(wordsTradU[y])

                        if (wordsTradU[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradU[y]
                    }
                }
            }
        })
    }
}
function getWordV(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskV.length - 1))
    if (wordsAskV[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskV.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradV[lastWord('V')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskV[lastWord('V')]

        used.push(wordsTradV[lastWord('V')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradV[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskV[x]

        used.push(wordsTradV[x])
    }

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskV.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradV[y]) == false) {
                        used.push(wordsTradV[y])

                        if (wordsTradV[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradV[y]
                    }
                }
            }
        })
    }
}
function getWordY(lastAlt = false) {
    alts.forEach(tag => {
        tag.removeAttribute('correct')
        tag.innerHTML = '...'
    })

    let x = Math.floor(Math.random().toFixed(2) * (wordsAskY.length - 1))
    if (wordsAskY[x] == "") {
        x = Math.floor(Math.random().toFixed(2) * (wordsAskY.length - 1))
    }
    let z = Math.floor(Math.random() * alts.length)

    if(lastAlt){
        alts[z].innerHTML = wordsTradY[lastWord('Y')]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskY[lastWord('Y')]

        used.push(wordsTradY[lastWord('Y')])
    } else if(!lastAlt){
        alts[z].innerHTML = wordsTradY[x]
        alts[z].setAttribute("Correct", true)

        word.style.color = 'yellow'
        word.innerHTML = wordsAskY[x]

        used.push(wordsTradY[x])
    }

    for (let x = 0; x <= 10; x++) {
        alts.forEach(tag => {

            if (tag.innerHTML == '...') {
                let y = Math.floor(Math.random() * wordsAskY.length)

                for (let x = 0; x <= 1000; x++) {
                    if (used.includes(wordsTradY[y]) == false) {
                        used.push(wordsTradY[y])

                        if (wordsTradY[y] == "") {
                            continue
                        }

                        tag.innerHTML = wordsTradY[y]
                    }
                }
            }
        })
    }
}