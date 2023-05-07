const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

x = 5;
y = 12;

function papaismurf(){
    ctx.clearRect(0,0,1000,700);
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(x,y,15,-8);
    ctx.fillStyle = '#b0b0b0';
    ctx.fillRect(x,y,15,15);
    ctx.fillStyle = '#009dff';
    ctx.fillRect(x,y,15,10);
}

papaismurf();

document.addEventListener('keydown', function(event){
    papaismurf();

    if(event.key === 'd'){
        x += 5
    }

    if(event.key === 'a'){
        x -= 5
    }

    if(event.key === 's'){
        y+=5
    }

    if(event.key === 'w'){
        y-=5
    }

    if(x>285){
        x = 285;
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
