function carregar() {
/* liga a div msg com a variavel msg  */
var msg = window.document.getElementById('msg')
/* liga a div com a tag img com a variavel img */
var img = window.document.getElementById('imagem')
/*  variavel para conectar com o body*/
var bg = window.document.body
/* variavel data para receber a data/horario atual do SISTEMA */
var data = new Date()
/* variavel hora para pegar as horas atuais do SISTEMA */
var hora = data.getHours()
/* variavel horario  */
var minutos = data.getMinutes()
/* innerHTML para colocar a mesnagem na variavel msg que é ligada a div com id msg */
msg.innerHTML = `Agora são ${hora} hora(s) e ${minutos} minuto(s)`

    if(hora >= 6 && hora < 12) {
        /* BOM DIA */
        img.src = 'imagens/manha.png'
        bg.style.background = '#6dc59c'
        
    } else if (hora >= 12 && hora < 18) {
        /* BOA TARDE */
        img.src = 'imagens/tarde.png'
        bg.style.background = '#cad227'
    } else if (hora >= 18 && hora < 24) {
        /* BOA NOITE */
        img.src = 'imagens/noite.png'
        bg.style.background = '#cb6127'
    } else {
        /* BOA MADRUGADA */
        img.src = 'imagens/madrugada.png'
        bg.style.background = '#211f50'
    }
}