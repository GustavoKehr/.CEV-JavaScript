// var hora = 2
//     if (hora >= 6 && hora < 12) {
//         console.log(`Bom dia!! agora sao ${hora} hora(s)`)
//     } else if (hora >=12 && hora < 18) {
//         console.log(`Boa tarde!! agora sao ${hora} hora(s)`)
//     } else if (hora >= 18 && hora < 24) {
//         console.log(`Boa noite!! agora sao ${hora} hora(s)`)
//     } else {
//         console.log(`Boa madrugada!! agora sao ${hora} hora(s)`)
//     }

var agora = new Date()
var hora = agora.getHours()

if (hora >= 6 && hora < 12) {
    console.log(`Bom dia!! agora sao ${hora} hora(s)`)
} else if (hora >=12 && hora < 18) {
    console.log(`Boa tarde!! agora sao ${hora} hora(s)`)
} else if (hora >= 18 && hora < 24) {
    console.log(`Boa noite!! agora sao ${hora} hora(s)`)
} else {
    console.log(`Boa madrugada!! agora sao ${hora} hora(s)`)
}

