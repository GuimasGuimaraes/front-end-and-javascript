let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

// ctx.fillStyle = "white";
// ctx.fillRect(10, 10, 100, 200);

// ctx.cleanRect(20, 20, 30, 30);

// INICIO E FIM DO CAMINHO PATH

// ctx.beginPath();

// ctx.lineWidth = 4;
// ctx.strokeStyle = "red";
// ctx.moveTo(10, 10);
// ctx.lineTo(10, 1000);
// ctx.stroke();

// ctx.beginPath();

// ctx.lineWidth = 4;
// ctx.strokeStyle = "blue";
// ctx.fillStyle = "green";
// ctx.moveTo(10, 10);
// ctx.lineTo(100, 100);
// ctx.lineTo(10, 100);
// ctx.closePath();
// ctx.stroke();
// ctx.fill();

// CIRCULOS COM CANVAS

let circle = {
  x: 250,
  y: 250,
  raio: 100,
  inicio: 0,
  fim: 0,
  antiHor: false,
};

function drawCircle(c) {
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.fillStyle = "beige";
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.fillStyle = "red";
  ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHor);

  ctx.fill();
  ctx.stroke();
}

setInterval(function () {
  if (circle.fim < 2 * Math.PI) {
    circle.fim += 0.1;
    circle.x += 3;
  }

  drawCircle(circle);
}, 20);
