function carregar(){
  var anoNasc = window.document.getElementById('anoNasc');
  var ano = Number(anoNasc.value);
  
  var sexo = window.document.getElementById('sexo');
  var genero = sexo.value;
  var resultado = window.document.getElementById('resultado')
  var img = window.document.getElementById('imagem');
  var anoAtual = window.document.getElementById('anoAtual');
  // chama a data
  var data = new Date();
  var hoje = Number(data.getUTCFullYear())
  
  anoAtual.innerHTML = `A data atual é ${hoje}`;

  // calcula idade
  var idade = (hoje - ano)

  if (idade >= 0 && idade <= 2){
    // bebê
    resultado.innerHTML = `Sua idade é ${idade} ano(s) você é bebê!`
    if (genero === "m"){
      img.src = 'images/bebe_m.png'
      document.body.style.background = '#84cbf9'
    }
    else if (genero === "f"){
      img.src = 'images/bebe_f.png'
      document.body.style.background = '#FFB6C1'
    }
  }else if (idade < 13){
    // Criança
    resultado.innerHTML = `Sua idade é ${idade} anos você é criança!`
    if (genero === "m"){
      img.src = 'images/crianca_m.png'
      document.body.style.background = '#84cbf9'
    }
    else if (genero === "f"){
      img.src = 'images/crianca_f.png'
      document.body.style.background = '#FFB6C1'
    }
  }else if (idade < 22){
    // jovem
    resultado.innerHTML = `Sua idade é ${idade} anos, você é jovem!`
    if (genero === "m"){
      img.src = 'images/jovem_m.png'
      document.body.style.background = '#84cbf9'
    }
    else if (genero === "f"){
      img.src = 'images/jovem_f.png'
      document.body.style.background = '#FFB6C1'
    }
  }else if (idade < 60){
    // adulto
    resultado.innerHTML = `Sua idade é ${idade} anos, você é adulto!`
    if (genero === "m"){
      img.src = 'images/adulto_m.png'
      document.body.style.background = '#84cbf9'
    }
    else if (genero === "f"){
      img.src = 'images/adulto_f.png'
      document.body.style.background = '#FFB6C1'
    }  
  }else{
    // Idoso
    resultado.innerHTML = `Sua idade é ${idade} anos, você já é Experiente!`
    if (genero === "m"){
      img.src = 'images/idoso_m.png'
      document.body.style.background = '#84cbf9'
    }
    else if (genero === "f"){
      img.src = 'images/idoso_f.png'
      document.body.style.background = '#FFB6C1'
    }  
  }
  }

  