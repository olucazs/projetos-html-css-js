function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('ano')
    var result = document.getElementById('res')

    if(formano.value.length == 0 || Number(formano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    }

    else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked){
            genero = 'Masculino'
            img.setAttribute('src', 'imagens/homem.png')
        }
        
        else if(sex[1].checked){
            genero = 'Feminino'
            img.setAttribute('src', 'imagens/mulher.png')
        }
        
        result.innerHTML = `Sexo: ${genero}, com ${idade} anos.`
        result.appendChild(img)
    }

}