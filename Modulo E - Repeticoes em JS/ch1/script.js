function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpasso')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert(`[ERRO] Digite um número para realizar o cálculo`)
    } else {
        res.innerHTML = `Contando: <br> `
        let numDig = Number(ini.value)
        let numFim = Number(fim.value)
        let numPas = Number (pas.value)
        
        if(numPas <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            numPas = 1
        }
        if (numDig < numFim) {
            /* crescente */
        for (let i = numDig; i <= numFim; i += numPas) {
            res.innerHTML += `${i} \u{1F449}`
        }
        
        } else {
            /* decrescente */
            for (let i = numDig; i >= numFim; i -= numPas) {
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        res.innerHTML += `<br> \u{1F3C1}`
    }

}

