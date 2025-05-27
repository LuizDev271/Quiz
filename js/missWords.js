let missing = document.getElementById('missing')

function missingWords(text){
    let missWord = document.createElement('div')
    missWord.className = 'miss'
    missWord.style.color = 'white'
    missWord.style.textAlign = 'start'
    missWord.style.fontFamily = 'Arial'
    missWord.style.fontSize = '36px'
    missWord.style.fontWeight = 'bold'
    missWord.style.textShadow = '3px 3px 3px black'
    missWord.style.background = 'transparent'
    missWord.style.height = '50px'
    missWord.innerHTML = `${text}`

    return missWord
}

function funcMiss(){
    let diference

    if(letters.A){
        diference = wordsTradA.filter(item => !correct.includes(item))

    } else if(letters.B){
        diference = wordsTradB.filter(item => !correct.includes(item))

    } else if(letters.C){
        diference = wordsTradC.filter(item => !correct.includes(item))

    } else if(letters.D){
        diference = wordsTradD.filter(item => !correct.includes(item))

    } else if(letters.E){
        diference = wordsTradE.filter(item => !correct.includes(item))

    } else if(letters.F){
        diference = wordsTradF.filter(item => !correct.includes(item))

    } else if(letters.G){
        diference = wordsTradG.filter(item => !correct.includes(item))

    } else if(letters.H){
        diference = wordsTradH.filter(item => !correct.includes(item))

    } else if(letters.I){
        diference = wordsTradI.filter(item => !correct.includes(item))

    } else if(letters.J){
        diference = wordsTradJ.filter(item => !correct.includes(item))

    } else if(letters.K){
        diference = wordsTradK.filter(item => !correct.includes(item))

    } else if(letters.L){
        diference = wordsTradL.filter(item => !correct.includes(item))

    } else if(letters.M){
        diference = wordsTradM.filter(item => !correct.includes(item))

    } else if(letters.N){
        diference = wordsTradN.filter(item => !correct.includes(item))

    } else if(letters.O){
        diference = wordsTradO.filter(item => !correct.includes(item))

    } else if(letters.P){
        diference = wordsTradP.filter(item => !correct.includes(item))

    } else if(letters.Q){
        diference = wordsTradQ.filter(item => !correct.includes(item))

    } else if(letters.U){
        diference = wordsTradU.filter(item => !correct.includes(item))

    } else if(letters.V){
        diference = wordsTradV.filter(item => !correct.includes(item))

    } else if(letters.Y){
        diference = wordsTradY.filter(item => !correct.includes(item))

    }
    
    return diference
}


