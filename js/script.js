const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const imgbola = new Image();
imgbola.src = 'img/bola.png';

circulo();
linha();
curva();
curva2();
retangulo();
imagem();

function imagem(){
    imgbola.onload = function() {
        ctx.drawImage(imgbola, 480, 330, 40, 40);
    }
}

function retangulo(){
    ctx.fillStyle = '#b88461';
    ctx.fillRect(300,320,40,-20);
    ctx.fillStyle = '#000';
    ctx.fillRect(300,320,40,60);
    ctx.fillStyle = '#fff700';
    ctx.fillRect(300,320,40,45);
}

function linha(){
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(500, 0);
    ctx.lineTo(500, 1000);
    ctx.stroke();
}

function circulo(){
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(500,350,100,0,Math.PI*2,true);
    ctx.fillStyle = '#ff9d8a';
    ctx.fill();
    ctx.stroke();
}

function curva(){
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.arc(0,350,150,Math.PI/2,3*Math.PI/2,true);
    ctx.stroke();
}

function curva2(){
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.arc(1000,350,150,Math.PI/2,3*Math.PI/2);
    ctx.stroke();
}