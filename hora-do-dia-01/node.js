function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são: ${hora} horas.</p>`
    if (hora >= 0 && hora < 12){
        img.src = "imagens/foto-manha.jpg"
    }

    else if (hora >=12 && hora <18){
        img.src = "imagens/foto-tarde.jpg"
    }

    else {
        img.src ="imagens/foto-noite.jpg"
    }
}


