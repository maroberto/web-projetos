function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano")
  var res = document.querySelector("div#res")
  if (fano.value.length == 0 || fano.value > ano){
    alert("[ERRO] verifique os dados e tente novamente!")
  }else{
    var fsex = document.getElementsByTagName("radsex")
    var idade = ano - Number(fano.value)
    res.innerHTML = `idade calculada: ${idade}`
  }
}
// 2247 minutos