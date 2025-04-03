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

//=======================
// Arrays Words 

let wordsAskA = ['a', 'accumulated', 'actor', 'adreess',
    'afternoon', 'ago', 'agree', 'agreement',
    'ahead', 'airport', 'allow', 'allowing',
    'along', 'also', 'although', 'always',
    'am', 'and', 'angles', 'annoy', 'apartment',
    'apps', 'are', 'argue', 'arrest',
    'arrive', 'artist', 'asleep', 'at',
    'attempts', 'awful']
let wordsAskB = ['bad', 'badge', 'bag', 'bank',
    'bat', 'be', 'beach', 'beard',
    'beautiful', 'bed', 'been', 'beer',
    'behind', 'being', 'belly', 'belong',
    'bested', 'bet', 'big', 'bike',
    'bird', 'birthday', 'blame', 'blamed',
    'blog', 'blouse', 'boat', 'book',
    'boots', 'boredom', 'boring', 'boss',
    'brain', 'break', 'breakfast', 'bring',
    'bringing', 'brings', 'bummer', 'bump',
    'bus', 'business', 'busy', 'but',
    'buy', 'box']
let wordsAskC = ['cabin', 'came', 'camera', 'can',
    'candy', 'cannot', 'careful', 'careless',
    'caring', 'carry', 'catch', 'cents',
    'chain', 'cheap', 'check', 'cheese',
    'child', 'cities', 'city', 'claims',
    'clained', 'class', 'click', 'clock',
    'clothes', 'cloudy', 'coat', 'cold',
    'coming', 'complain', 'comply', 'concerned',
    'cook', 'cool', 'cost', 'could',
    'crawl', 'crouch', 'crowds', 'cup',
    'cute']
let wordsAskD = ['dance', 'dangerous', 'dark', 'darting',
    'date', 'daughter', 'day', 'dealt',
    'deed', 'delicious', 'dentist', 'depleting',
    'desk', 'diary', 'dictionary', 'Did',
    'different', 'dinner', 'dirty', 'dish',
    'dishes', 'do', 'dogs', 'dool',
    'downstairs', 'dress', 'drink', 'drinks',
    'drive', 'drums', 'dunno']
let wordsAskE = ['each', 'early', 'earthlings', 'elegant',
    'else', 'enjoy', 'enough', 'even',
    'evening', 'ever', 'every', 'exam',
    'exchange', 'excuse', 'exercise', 'exhale',
    'expensive']
let wordsAskF = ['factory', 'fair', 'fall', 'family',
    'famous', 'farm', 'fast', 'fat',
    'father', 'fatter', 'favorite', 'feels',
    'feet', 'fever', 'few', 'fill',
    'find', 'fine', 'first', 'fish',
    'flat', 'flavor', 'flick', 'fliendly',
    'flower', 'flowerbed', 'flute', 'fly',
    'flying', 'food', 'fool', 'fooling',
    'forget', 'forhead', 'fouth', 'free',
    'fresh', 'fridge', 'friend', 'froom',
    'fruit', 'fry', 'fulfill', 'funny',
    'furtner']
let wordsAskG = ['game', 'garden', 'gates', 'gateway',
    'genius', 'get', 'getting', 'girlfriend',
    'give', 'glad', 'glasses', 'glew',
    'go', 'going', 'gonna', 'good',
    'goodbye', 'gotta', 'gotten', 'grandparents',
    'grass', 'great', 'grind', 'grown',
    'grows', 'guess', 'guest']
let wordsAskH = ['half', 'halt', 'hand', 'handwriting',
    'happy', 'hard', 'harsh', 'has',
    'hat', 'have', 'hear', 'heaven',
    'heavenly', 'heck', 'heed', 'help',
    'here', 'hi', 'hideous', 'him',
    'hired', 'his', 'holds', 'holiday',
    'home', 'homework', 'honey', 'hop',
    'house', 'how', 'however', 'hungry',
    'hurry', 'husband']
let wordsAskI = ['i', 'impact', 'improved', 'in',
    'increase', 'indeed', 'inhale', 'interesting',
    'into', 'invitation', 'invite', 'is']
let wordsAskJ = ['jacket', 'janitor', 'job']
let wordsAskK = ['keep', 'keys', 'kitchen', 'knew',
    'knife', 'know']

let wordsTradA = ['um', 'acumulado', 'ator', 'endereço',
    'tarde', 'atrás', 'concordar', 'acordo',
    'à frente', 'aeroporto', 'permitir', 'permitindo',
    'junto', 'também', 'embora', 'sempre',
    'sou', 'e', 'ângulos', 'irritar',
    'apartamento', 'aplicativos', 'são', 'discutir',
    'prender', 'chegar', 'artista', 'dormindo', 'no',
    'tentativas', 'horrível']
let wordsTradB = ['ruim', 'distintivo', 'bolsa', 'banco',
    'bastão', 'ser', 'praia', 'barba',
    'lindo', 'cama', 'estive', 'cerveja',
    'atrás', 'sendo', 'barriga', 'pertencer',
    'superado', 'aposta', 'grande', 'bicicleta',
    'pássaro', 'aniversário', 'culpa', 'culpado',
    'blog', 'blusa', 'barco', 'livro',
    'botas', 'tédio', 'tedioso', 'chefe',
    'cérebro', 'quebrar', 'café da manhã', 'trazer',
    'trazendo', 'traz', 'desapontamento', 'ressalto',
    'ônibus', 'negócios', 'ocupado', 'mas',
    'comprar', 'caixa']
let wordsTradC = ['cabine', 'veio', 'câmera', 'pode',
    'doce', 'não pode', 'cuidadoso', 'descuidado',
    'cuidadoso', 'carregar', 'pegar', 'centavos',
    'corrente', 'barato', 'verificar', 'queijo',
    'criança', 'cidades', 'cidade', 'reivindicações',
    'reivindicou', 'aula', 'clique', 'relógio',
    'roupas', 'nublado', 'casaco', 'frio',
    'chegando', 'reclamar', 'cumprir', 'preocupado',
    'cozinhar', 'legal', 'custo', 'poderia',
    'arrastar', 'agachar', 'multidões', 'xícara',
    'bonitinho']
let wordsTradD = ['dança', 'perigoso', 'escuro', 'arremessando',
    'data', 'filha', 'dia', 'tratado',
    'obra', 'delicioso', 'dentista', 'esgotando',
    'mesa', 'diário', 'dicionário', 'Fez',
    'diferente', 'jantar', 'sujo', 'prato',
    'pratos', 'fazer', 'cães', 'boneca',
    'lá embaixo', 'vestir', 'bebida', 'bebidas',
    'dirigir', 'bateria', 'não sei']
let wordsTradE = ['cada', 'cedo', 'terráqueos', 'elegante',
    'outro', 'aproveitar', 'suficiente', 'até',
    'noite', 'sempre', 'todo', 'exame',
    'intercâmbio', 'desculpa', 'exercício', 'expirar',
    'caro']
let wordsTradF = ['fábrica', 'justo', 'cair', 'família',
    'famoso', 'fazenda', 'rápido', 'gordo',
    'pai', 'mais gordo', 'favorito', 'sentimentos',
    'pés', 'febre', 'alguns', 'preencher',
    'encontrar', 'multar', 'primeiro', 'peixe',
    'plano', 'sabor', 'filme', 'amigável',
    'flor', 'canteiro de flores', 'flauta', 'voar',
    'vôo', 'comida', 'enganar', 'enganando',
    'esquecer', 'testa', 'quarto', 'livre',
    'fresco', 'geladeira', 'amigo', 'da sala',
    'fruta', 'fritar', 'completar', 'engraçado',
    'mais adiante']
let wordsTradG = ['jogo', 'jardim', 'portões', 'porta de entrada',
    'gênio', 'pegar', 'recebendo', 'namorada',
    'dar', 'alegre', 'copos', 'brilhou',
    'ir', 'indo', 'vai', 'bom',
    'adeus', 'preciso', 'pego', 'avós',
    'grama', 'ótimo', 'moer', 'crescido',
    'cresce', 'adivinhar', 'convidado']
let wordsTradH = ['metade', 'parar', 'mão', 'caligrafia',
    'feliz', 'duro', 'severo', 'tem',
    'chapéu', 'ter', 'ouvir', 'paraíso',
    'celestial', 'diabos', 'preste atenção', 'ajuda',
    'aqui', 'oi', 'horrível', 'ele',
    'contratado', 'dele', 'detém', 'feriado',
    'lar', 'trabalho de casa', 'mel', 'saltar',
    'casa', 'como', 'no entanto', 'com fome',
    'pressa', 'marido']
let wordsTradI = ['eu', 'impacto', 'melhorou', 'em',
    'aumentar', 'de fato', 'inalar', 'interessante',
    'dentro', 'convite', 'convidar', 'é']
let wordsTradJ = ['jaqueta', 'zelador', 'trabalho']
let wordsTradK = ['manter', 'chaves', 'cozinha', 'sabia',
    'faca', 'saber']

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

//=======================
// Functions Words

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

alts.forEach(tag => {
    tag.addEventListener("click", () => {
        checked(tag, false, event)
    })
})

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

//=======================
// Functions 