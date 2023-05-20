
        /* parametro */
function parimp(n) {
    if(n % 2 == 0) { /* acao */
        return 'Par'/* retorno */
    } else {                        /* SOMENTE UM DOS RETORNOS IRA APARECER NA TELA. UMA FUNCAO EM JS SO PODE TER UM RETORNO, E 18 É PAR ENTAO O PRIMEIRO RETORNO É O QUE PREVALECERA*/
        return 'Impar' /* retorno */
    }
}

/* chamda (disparo da acao)*/
/* o (18) vai pra dentro do parametro (n) ent n == 18*/
// let res = parimp(18)
// console.log(res)

/* SEM CRIAR VARIAVEL */
console.log(parimp(11))


/* USANDO OPERADOR TERNARIO */
// function parimp(n) {
//     return n % 2 == 0? 'Par' : 'Impar'
// }
// console.log(parimp(11))