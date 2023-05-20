function tabuada() {
    let num =  document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    /* condicao para verificar se o usuario digitou um numero */
    if(num.value.length == 0) {
        alert('Digite um número')
    
        /* se digitou executa o bloco */
    } else {
        /* pega o valor digitado na caixa de texto txtn e guarda na variavel n */
        let n = Number(num.value)

        /* contador = 1 */
        let i = 1

        /* para deixar vazio o campo da tabuada quando fizermos uma nova requisicao */
        tab.innerHTML = ''
        

        /* enquanto o contador for <= 10 execute o bloco */
        while (i <= 10) {

            /* variavel item recebe a criacao de um elemento option (que é o select option no html) */
            let item = document.createElement('option')

            /* dentro da variavel item.text vai aparecer o numero digitado {n} e o numero em que o contador esta {i} igual ao numero digitado * o numero do contador*/
            item.text = `${n} x ${i} = ${n*i}`
            /* para saber qual item foi selecionado (no JS nao serve pra nada) mas para php e outro sim */
            item.value = `tab${i}`
            /* adicionar um elemento filho a tabela para aparecer a tabuada */
            tab.appendChild(item)
            tab.style.size = '10'
            tab.style.color = 'white'
            tab.style.background = 'transparent'
            tab.style.width = '300px'
            tab.style.textAlign = 'center'
            tab.style.border = 'none'
            tab.style.blockSize = '12.4em'
            i++
        }
    }
}