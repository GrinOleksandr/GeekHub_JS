let state = {pos:0};
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");

const newCvs = document.createElement("canvas");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

// const content = document.getElementById("content");
// content.insertBefore(newCvs, cvs);

const newCtx = newCvs.getContext("2d");





let drawMe = function (t){
    render(t, image5, image4);
    window.requestAnimationFrame(drawMe);
};

function changeSlides(slide1,slide2){
    setTimeout(function() {
        drawMe = function (t) {
            render(t, slide1, slide2);
            window.requestAnimationFrame(drawMe);
        };
        if (state.pos === 2) {
            TweenMax.to(state, 1, {pos: 0});
        }
        else {
            TweenMax.to(state, 1, {pos: 2});
        }
    }, 2000);
}

function step1 (){
    changeSlides(image5,image4);

}

function step2 (){
    changeSlides(image5,image3);

}

function step3 (){
    changeSlides(image2,image3);

}
function step4 (){
    changeSlides(image2,image1);

}
function step5 (){
    changeSlides(image5,image1);

}

function step6 (){
    changeSlides(image5,image4);

}

step1();
step2();
step3();
step4();
step5();
step6();









let cols = 50;
let rows = 50;
let delay;

let xw = 1800/cols;
let xh = 1200/rows;

function renderTempCanvas(t,img){
    newCtx.clearRect(0,0,1800,1200);
    newCtx.drawImage(img, 0, 0);
    //newCtx.clearRect(0,0,100 + t/10, 100 + t/10);


    xw = 1800/cols;
    xh = 1200/rows;
    for(let i = 0; i <=cols; i++){
        for(let j = 0; j <=rows; j++){
            delay = (j*i)/(cols*rows);
            newCtx.clearRect(i*xw, j*xh, xw*clamp(state.pos - delay, 0, 1), xh*clamp(state.pos - delay, 0, 1 ));
        }
    }



}

function clamp(number, min, max){
    if( number < min) {
        return min;
    }
    if ( number > max){
        return max;
    }
    else {
        return number;
    }
}

function render(t,img1,img2){

    ctx.drawImage(img1, 0, 0);

    renderTempCanvas(t,img2);

    ctx.drawImage(newCvs, 0, 0);
}

function setCanvasSize(cvs){
    cvs.width = 1800;
    cvs.height = 1200;
    cvs.style.width = "900px";
    cvs.style.height = "600px";
}

setCanvasSize(cvs);
setCanvasSize(newCvs);




drawMe();


