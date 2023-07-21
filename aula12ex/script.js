function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 18) {
        // bom dia
        img.src = 'manhã3.png'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        
    } else {
        // boa noite
    }
}
