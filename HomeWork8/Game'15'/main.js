let gameField = document.getElementById("game-field");
let freeField = document.getElementById("free-field");
freeField.addEventListener("dragstart", dragStart);
freeField.addEventListener("dragover", dragOver);
freeField.addEventListener("drop", dragDrop);


let gameItems = gameField.querySelectorAll("li");
gameItems.forEach(function(item){
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("drop", dragDrop);
})

document.addEventListener("keyup", keyPress);



function keyPress(key) {
    let freeField = document.getElementById("free-field");
    let fieldToMove;

    if (key.which === 38) {
        gameItems.forEach(function (item) {
            if (item.offsetTop - freeField.offsetTop == 102 && item.offsetLeft - freeField.offsetLeft == 0) {
                fieldToMove = item;
            }
        })

        if (fieldToMove) {
            freeField.innerText = fieldToMove.innerText;
            freeField.draggable = false;

            fieldToMove.id = "free-field";
            fieldToMove.innerText = "";
            fieldToMove.draggable = false;
            freeField.id = "";
        }
    }

    if (key.which === 40) {
        gameItems.forEach(function (item) {
            if (item.offsetTop - freeField.offsetTop == -102 && item.offsetLeft - freeField.offsetLeft == 0) {
                fieldToMove = item;
            }
        })
        if (fieldToMove) {
            freeField.innerText = fieldToMove.innerText;
            freeField.draggable = true;

            fieldToMove.id = "free-field";
            fieldToMove.innerText = "";
            fieldToMove.draggable = false;
            freeField.id = "";
        }
    }

    if (key.which === 37) {
        gameItems.forEach(function (item) {
            if (item.offsetTop - freeField.offsetTop == 0 && item.offsetLeft - freeField.offsetLeft == 102) {
                fieldToMove = item;
            }
        })
        if (fieldToMove) {
            freeField.innerText = fieldToMove.innerText;
            freeField.draggable = false;

            fieldToMove.id = "free-field";
            fieldToMove.innerText = "";
            fieldToMove.draggable = false;
            freeField.id = "";
        }
    }

    if (key.which === 39) {
        gameItems.forEach(function (item) {
            if (item.offsetTop - freeField.offsetTop == 0 && item.offsetLeft - freeField.offsetLeft == -102) {
                fieldToMove = item;
            }
        })
        if (fieldToMove) {
            freeField.innerText = fieldToMove.innerText;
            freeField.draggable = true;

            fieldToMove.id = "free-field";
            fieldToMove.innerText = "";
            fieldToMove.draggable = false;
            freeField.id = "";
        }
    }

    if (checkForWinner()) {
        setTimeout("alert('Congratulations! You have WON few of nothing!    O_o')", 100);
    }
}

function dragOver(ev){
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData("text", this.innerText);
    this.id = "dragStartElement"
}

function dragDrop(ev) {
    let dragStartElement = document.getElementById("dragStartElement");

    if (this.id == "free-field" && isValidNeighbour(dragStartElement, this)) {

        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
        this.innerText = ev.target.innerText;
        ev.target.innerText = ev.dataTransfer.getData("text");

        this.draggable = true;

        dragStartElement.id = "free-field";
        dragStartElement.innerText = "";
        dragStartElement.draggable = false;
        this.id = "";
        freeField.focus();
    }

    else {
        dragStartElement.id = "";
        freeField.focus();
    }

    if (checkForWinner()) {
        setTimeout("alert('Congratulations! You have WON few of nothing!    O_o')", 100);
    }
}

function isValidNeighbour(element1, element2) {
    let startX = element1.offsetTop;
    let startY = element1.offsetLeft;

    let endX = element2.offsetTop;
    let endY = element2.offsetLeft;

    if ((Math.abs(startX - endX) <= 102 && startY - endY == 0) || (Math.abs(startY - endY) <= 102 && startX - endX == 0)) {
        return true;
    }
}

function checkForWinner() {
    for (let i = 0; i <= 14; i++) {
        if (gameField.children[i].innerText != i + 1) {
            return false;
        }
    }
    return true;
}

