/* CONDICOES ANINHADAS */

// if (cond1) {
//     bloco1
// } else {
//     if(cond2) {
//         bloco2
//     } else {
//         if (cond3) {
//             bloco3
//         } else {
//             if (cond4){
//                 bloco4
//             } else {
//                 if (cond5){
//                     bloco5
//                 } else {

//                 }
//             }
//         }
//     } 
// }
// -===========================================================================================================-

// var idade = 21
// if (idade < 18) {
//     console.log('Menor de idade!')
// } else {
//     if (idade <= 25) {
//         console.log('Disponivel para o curso de LAMBIMIA')
//     } else {
//         console.log('Veio demais')
//     }
// }

var idade = 22
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Nao pode votar')
} else if (idade < 18 || idade >= 65){
        console.log('Voto Opcional!')
    } else {
            console.log('Voto Obrigatorio')
        }
