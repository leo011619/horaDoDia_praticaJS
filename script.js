function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    img.src = "./Assets/imagemManha.png";
    document.body.style.backgroundColor = "#BEC2D3";
  } else if (hora >= 12 && hora < 18) {
    img.src = "./Assets/imagemTarde.png";
    document.body.style.backgroundColor = "#E9987F";
  } else {
    img.src = "./Assets/imagemNoite.png";
    document.body.style.backgroundColor = "#73445B";
  }
}
