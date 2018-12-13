const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

const bird= new Image();
bird.src = "img/flappy_bird_bird.png";

const bg= new Image();
bg.src = "img/flappy_bird_bg.png";

const fg= new Image();
fg.src = "img/flappy_bird_fg.png";

const pipeUp= new Image();
pipeUp.src = "img/flappy_bird_pipeUp.png";

const pipeBottom= new Image();
pipeBottom.src = "img/flappy_bird_pipeBottom.png";

const gap = 90;

const fly = new Audio();
fly.src = "audio/fly.mp3";

const score_audio = new Audio();
score_audio.src = "audio/score.mp3";

document.addEventListener("keydown", moveUp);

function moveUp(){
    yPos -= 25;
    fly.play();
}

let pipe = [];
pipe[0] = {
    x : cvs.width,
    y : 0
};


let xPos= 10;
let yPos = 150;
const grav = 1.5;
let score = 0;
function draw() {
    ctx.drawImage(bg, 0, 0);

    for(let i =0; i < pipe.length; i++) {

        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if (pipe[i].x === 70) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }

        if(xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
            location.reload(); // Перезагрузка страницы
        }
        if(pipe[i].x === 5){
            score++;
            score_audio.play();

        }




    }



    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: "  +score, 10, cvs.height - 20);
    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;

