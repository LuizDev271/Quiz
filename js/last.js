function lastWord(letter) {
    let lastLetter
    let number

    switch (letter) {
        case 'A':
            lastLetter = wordsTradA.filter(item => !correct.includes(item))[0]

            wordsTradA.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'B':
            lastLetter = wordsTradB.filter(item => !correct.includes(item))[0]

            wordsTradB.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'C':
            lastLetter = wordsTradC.filter(item => !correct.includes(item))[0]

            wordsTradC.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'D':
            lastLetter = wordsTradD.filter(item => !correct.includes(item))[0]

            wordsTradD.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'E':
            lastLetter = wordsTradE.filter(item => !correct.includes(item))[0]

            wordsTradE.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'F':
            lastLetter = wordsTradF.filter(item => !correct.includes(item))[0]

            wordsTradF.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'G':
            lastLetter = wordsTradG.filter(item => !correct.includes(item))[0]

            wordsTradG.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'H':
            lastLetter = wordsTradH.filter(item => !correct.includes(item))[0]

            wordsTradH.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'I':
            lastLetter = wordsTradI.filter(item => !correct.includes(item))[0]

            wordsTradI.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'J':
            lastLetter = wordsTradJ.filter(item => !correct.includes(item))[0]

            wordsTradJ.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
        case 'K':
            lastLetter = wordsTradK.filter(item => !correct.includes(item))[0]

            wordsTradK.forEach((word, index) => {
                if (lastLetter == word) {
                    number = index
                }
            })

            break
    }

    return number
}