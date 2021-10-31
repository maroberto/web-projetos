function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano")
  var res = document.querySelector("div#res")
  var fundo = window.document.body
  
  if (fano.value.length == 0 || fano.value > ano) {
    alert("[ERRO] verifique os dados e tente novamente!")
  
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    
    if (fsex[0].checked) {
      fundo.style.background = 'lightblue'
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute('src', 'images/crianca_m.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'images/jovem_m.png')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'images/adulto_m.png')
      } else {
        // idoso
        img.setAttribute('src', 'images/idoso_m.png')
      }

    } else if (fsex[1].checked) {
      genero = 'Mulher'
      fundo.style.background = '#F4A8BC'
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute('src', 'images/crianca_f.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'images/jovem_f.png')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'images/adulto_f.png')
      } else {
        // idoso
        img.setAttribute('src', 'images/idoso_f.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    res.appendChild(img)
  }
}
