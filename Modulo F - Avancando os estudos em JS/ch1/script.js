let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')
let valores = []


function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if(isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        valores.sort()
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado a lista`
        tab.appendChild(item)
    } else {
        alert('Valor inválido ou já adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
            let total = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            
            for (let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior) 
                    maior = valores[pos] 
                if (valores[pos] < menor)
                    menor = valores[pos]                  
                }
                media = soma/total

            res.innerHTML = `O total de números adicionados foi de ${total}`
            res.innerHTML += `<br>O maior valor adicionado foi de ${maior}`
            res.innerHTML += `<br>O menor valor adicionado foi de ${menor}`
    
            res.innerHTML += `<br>A soma dos valores adicionados foi de ${soma}`
    
            res.innerHTML += `<br>A média dos valores adicionado foi de ${media}`
            }            
            
        } 

