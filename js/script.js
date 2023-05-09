//retangulo
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(18, 18, 150, 100);

    //circulo
  ctx.fillStyle = 'yellow';

  ctx.arc(400,80,50,0,Math.PI* 2);
  ctx.fill();
 

  //curva
  ctx.beginPath();
  ctx.arc(550, 80, 50, 0, Math.PI );
  ctx.stroke();

  //linha
  ctx.beginPath();
  ctx.moveTo(200,100);
  ctx.lineTo(300,100);
  ctx.stroke();

  //imagem
  var imagem=new Image();
  imagem.onload=function(){
  ctx.drawImage(this, 18, 150);
  }
  imagem.src = "img/neymar.jpg"; 
  

