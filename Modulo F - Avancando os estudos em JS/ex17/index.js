/* VARIAVEIS COMPOSTAS (ARRAY) == (VETOR)*/

          /* indice é o número da "vaga" e sempre começa pelo 0 ex [8 == indice 0, 4 == indice 1, 5 == indice 2, 'ola' == indice 3, 4 == indice 4] */
// let num = [8,4,5,7,2]

/* para colocar explicitamente na ultima posicao usar esse comando */
/* metodo interno para acrescentar valores a um array */
// num.push('oi')
// num.push("essa porra aq")

/* pegar o numero de elementos de uma array */
/* length nao precisa abrir () pois nao é um metodo, é um atributo */
// num.length

// num.push(1)
// num.sort()

/* ordena os elementos em ordem crescente */
// num.sort()

/* PARA APARECER TODO O ARRAY */
// console.log(`Array: ${num}`)
/* PARA PEGAR O NUMERO DE ELEMENTOS NO ARRAY */
// console.log(`O vetor tem ${num.length} valores`)
/* PARA APARECER UMA POSICAO DE UM ELEMENTO NO ARRAY DETERMINADA*/
// console.log(`Primeiro valor do array: ${num[0]}`)
/*  */

let num = [8,4,5,7,2,16,85,201,598]

/* PARA SABER SE EXISTE E BUSCAR ONDE ESTA O VALOR DENTRO DE UM ARRAY

    indexOf(7) está buscando dentro do array se existe um valor 7, se existir ele retorna o 7, se nao, retorna -1 como forma de dizer que nao encontrou.
// */
// console.log(`${num.indexOf(7)}`)

// for (let i = 0; i < num.length; i++) {
//     console.log(`Posicao ${i} tem o valor de ${num[i]}`)
    
// }

/* SOMENTE PARA ARRAY E OBJETOS */
// for (let i in num) {
//     console.log(`Posicao ${i} tem o valor de ${num[i]}`)
//     }

/* verificacao para encontrar o valor e a posicao dentro de um array */
let pos = num.indexOf(7)

if (pos == -1) {
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`A posicao do valor 8 é ${pos}`)
    console.log(`${num}`)
}

