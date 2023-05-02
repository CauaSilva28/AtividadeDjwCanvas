const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

x = 10;
y = 10;

function papaismurf(){
    ctx.clearRect(0,0,1000,700);
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x,y,20,-8);
    ctx.fillStyle = "#b0b0b0";
    ctx.fillRect(x,y,20,15);
    ctx.fillStyle = "#009dff";
    ctx.fillRect(x,y,20,10);
}

papaismurf();

document.addEventListener("keydown", function(event){
    papaismurf();

    if(event.key === "d"){
        x+=5
    }

    if(event.key === "a"){
        x-=5
    }

    if(x>280){
        x=280;
    }

    if(x<0){
        x=0;
    }

    if(event.key === "s"){
        y+=5
    }

    if(y<12){
        y = 12;
    }

    if(y>135){
        y=135;
    }

    if(event.key === "w"){
        y-=5
    }
});
