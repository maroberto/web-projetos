var yellow = window.document.getElementById("logo")


yellow.addEventListener("mouseenter", entrar);
yellow.addEventListener("mouseout", sair);

function entrar(){
  yellow.src = ("logo", "src/images/lampada_yellow.png")
}
function sair(){
  yellow.src = ("logo", "src/images/lampada.png")
}