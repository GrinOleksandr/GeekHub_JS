let state = {pos:0};
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");
let image6 = document.getElementById("image6");
const newCvs = document.createElement("canvas");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
// const content = document.getElementById("content");
// content.insertBefore(newCvs, cvs);

const newCtx = newCvs.getContext("2d");


let drawMe = function (t){
    render(t, image5, image4);
    window.requestAnimationFrame(drawMe);
};

btn1.addEventListener("click", function(event){
    drawMe = function (t){
        render(t, image5, image4);
        window.requestAnimationFrame(drawMe);
    };
    if(state.pos === 2) {
        TweenMax.to(state, 1, {pos: 0});
    }
    else {
        // image  = document.getElementById("image2");
        TweenMax.to(state, 1, {pos: 2});
    }

});

btn2.addEventListener("click", function(event){
    drawMe = function (t){
        render(t, image5, image3);
        window.requestAnimationFrame(drawMe);
    };
    if(state.pos === 2) {
        TweenMax.to(state, 1, {pos: 0});
    }
    else {
        // image  = document.getElementById("image2");
        TweenMax.to(state, 1, {pos: 2});
    }

});

btn3.addEventListener("click", function(event){
    drawMe = function (t){
        render(t, image2, image3);
        window.requestAnimationFrame(drawMe);
    };
    if(state.pos === 2) {
        TweenMax.to(state, 1, {pos: 0});
    }
    else {
        // image  = document.getElementById("image2");
        TweenMax.to(state, 1, {pos: 2});
    }

});

btn4.addEventListener("click", function(event){
    drawMe = function (t){
        render(t, image2, image1);
        window.requestAnimationFrame(drawMe);
    };
    if(state.pos === 2) {
        TweenMax.to(state, 1, {pos: 0});
    }
    else {
        // image  = document.getElementById("image2");
        TweenMax.to(state, 1, {pos: 2});
    }

});

btn5.addEventListener("click", function(event){
    drawMe = function (t){
        render(t, image5, image1);
        window.requestAnimationFrame(drawMe);
    };
    if(state.pos === 2) {
        TweenMax.to(state, 1, {pos: 0});
    }
    else {
        // image  = document.getElementById("image2");
        TweenMax.to(state, 1, {pos: 2});
    }

});

btn6.addEventListener("click", function(event){
    drawMe = function (t){
        render(t, image5, image4);
        window.requestAnimationFrame(drawMe);
    };
    if(state.pos === 2) {
        TweenMax.to(state, 1, {pos: 0});
    }
    else {
        // image  = document.getElementById("image2");
        TweenMax.to(state, 1, {pos: 2});
    }

});






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


