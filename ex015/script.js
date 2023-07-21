function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERROR] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute("style","border-radius: 50%" )
        img.setAttribute("width", "400")
        img.setAttribute("height", "400")

        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe-h.jpg')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-h.jpg')
            } else if (idade < 50) {
                // adulto 
                img.setAttribute('src', 'adulto-h.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-h.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                // adulta 
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                // idosa
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}