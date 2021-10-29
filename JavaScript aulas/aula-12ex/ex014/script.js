function carregar(){
  var msg = window.document.getElementById('msg');
  var msg2 = window.document.getElementById('msg-dois');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  // var hora = 17
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12){
    // Bom dia!
    msg2.innerHTML = `Bom dia!`
    img.src = 'images/img-manha.png'
    document.body.style.background = '#84cbf9'
  }else if (hora >= 12 && hora < 18){
    // Boa tarde!
    msg2.innerHTML = `Boa tarde!`
    img.src = 'images/img-tarde.png'
    document.body.style.background = '#f77a06'
  }else{
    // Boa noite!
    msg2.innerHTML = `Boa noite!`
    img.src = 'images/img-noite.png'
    document.body.style.background = '#9574ad'
  }
  }
