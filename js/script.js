//retangulo
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(18, 18, 150, 100);

    //circulo
  ctx.arc(400,80,50,0,Math.PI* 2);
  ctx.stroke();

  //curva
  ctx.beginPath();
  ctx.arc(550, 80, 50, 180, Math.PI * 2);
  ctx.stroke();

  //linha
  ctx.beginPath();
  ctx.moveTo(200,100);
  ctx.lineTo(300,100);
  ctx.stroke();

  //imagem
  ctx.drawImage(imagem,10,10);
var imagem = new Image();
imagem.src = "img/neymar.jpg";
