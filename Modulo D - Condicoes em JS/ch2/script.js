function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var sec = document.getElementById('sec')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''

        /* mesma coisa de se fazer no html <img id = 'foto'> */
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        /*                                                   */

        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 12) {
                /* CRIANCA */
                img.setAttribute('src', 'imagens/homemC.png')
            } else if (idade < 22) {
                /* JOVEM */
                img.setAttribute('src', 'imagens/homemJ.png')
            } else if (idade < 50) {
                /*ADULTO*/
                img.setAttribute('src', 'imagens/homemA.png')
            } else {
                /* IDOSO */
                img.setAttribute('src', 'imagens/homemI.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 12) {
                /* CRIANCA */
                img.setAttribute('src', 'imagens/mulherC.png')
            } else if (idade <= 22) {
                /* JOVEM */
                img.setAttribute('src', 'imagens/mulherJ.png')
            } else if (idade <= 50) {
                /*ADULTO*/
                img.setAttribute('src', 'imagens/mulherA.png')
            } else {
                /* IDOSO */
                img.setAttribute('src', 'imagens/mulherI.png')
            }
        }
        sec.style.height = '500px'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.style.fontWeight = 'bold'
        res.appendChild(img)
    }

}
