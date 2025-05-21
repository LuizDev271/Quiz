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
                K: letters.K ? true : false,
                L: letters.K ? true : false,
                N: letters.K ? true : false,
                O: letters.K ? true : false,
                Q: letters.K ? true : false,
                V: letters.K ? true : false,
                Y: letters.K ? true : false
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
                
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
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
                K: true,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "L":
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
                K: letters.K ? true : false,
                L: true,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "N":
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: true,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "O":
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: true,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "Q":
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: true,
                V: letters.V ? true : false,
                Y: letters.Y ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "V":
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: true,
                Y: letters.Y ? true : false
            }

            localStorage.setItem("lettersWins", JSON.stringify(obj))
            break
        case "Y":
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
                K: letters.K ? true : false,
                L: letters.L ? true : false,
                N: letters.N ? true : false,
                O: letters.O ? true : false,
                Q: letters.Q ? true : false,
                V: letters.V ? true : false,
                Y: true
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
    } else if(letters.L){
        liWin("L", true)
    } else if(letters.N){
        liWin("N", true)
    } else if(letters.O){
        liWin("O", true)
    } else if(letters.Q){
        liWin("Q", true)
    } else if(letters.V){
        liWin("V", true)
    } else if(letters.Y){
        liWin("Y", true)
    }
    
}

//========================

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
    } else if (letters.L) {
        getWordL()
        activeLetter("L")
    } else if (letters.N) {
        getWordN()
        activeLetter("N")
    } else if (letters.O) {
        getWordO()
        activeLetter("O")
    } else if (letters.Q) {
        getWordQ()
        activeLetter("Q")
    } else if (letters.V) {
        getWordV()
        activeLetter("V")
    } else if (letters.Y) {
        getWordY()
        activeLetter("Y")
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
    } else if (letter == "L") {
        liArray(true, "L")
    } else if (letter == "N") {
        liArray(true, "N")
    } else if (letter == "O") {
        liArray(true, "O")
    } else if (letter == "Q") {
        liArray(true, "Q")
    } else if (letter == "V") {
        liArray(true, "V")
    } else if (letter == "Y") {
        liArray(true, "Y")
    }
}