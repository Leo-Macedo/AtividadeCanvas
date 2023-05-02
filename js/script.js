const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(18, 18, 150, 100);
  ctx.arc(700,18,15,0,Math.PI* 2);
  ctx.stroke();