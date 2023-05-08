const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var x = 5;
var y = 12;
var m = 30;
var n = 20;

function papaismurf(){
    ctx.clearRect(0,0,1000,700);
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(x,y,15,-8);
    ctx.fillStyle = '#b0b0b0';
    ctx.fillRect(x,y,15,15);
    ctx.fillStyle = '#009dff';
    ctx.fillRect(x,y,15,10);
}

function linha(){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(m, n);
    ctx.stroke();
}

function circulo(){
    ctx.beginPath();
    ctx.arc(50,50,10,0,Math.PI*2,true);
    ctx.stroke();
}

function curva(){
    ctx.beginPath();
    ctx.arc(50,52,5,3,Math.PI/20,true);
    ctx.stroke();
}

papaismurf();
linha();
circulo();
curva();

document.addEventListener('keydown', function(event){
    papaismurf();
    linha();
    circulo();
    curva();

    if(event.key === 'd'){
        x += 5;
        m += 5;
    }

    if(event.key === 'a'){
        x -= 5;
        m -= 5;
    }

    if(event.key === 's'){
        y+=5;
        n+=5
    }

    if(event.key === 'w'){
        y-=5;
        n-=5;
    }

    if(x>285){
        x = 285;
    }

    if(m>305){
        m = 299;
    }

    if(x<0){
        x = 0;
    }
    
    if(y<8){
        y = 8;
    }

    if(y>135){
        y = 135;
    }
});
