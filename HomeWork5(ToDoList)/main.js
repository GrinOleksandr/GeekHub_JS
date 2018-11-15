let enteredTask = document.getElementById("enterYourTask");             //making "enter" key working
enteredTask.onkeypress =  enter;

document.addEventListener('DOMContentLoaded', function () {                 //focussing on input field
    enteredTask.focus();
});

let tasksList = document.getElementById("list");


let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addNewTask);

let reverseButton = document.getElementById("reverseButton");
reverseButton.addEventListener("click", reverseMe);





function addToList(someTask, timeOfTask) {                                                   //FUNCTION adds any value to ToDo List
    let newItem = document.createElement("li");                                     //Creating <li></li>

    let checkBox = document.createElement("input");                              //Creating checkbox
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", function () {                            //realising "done" status
        if (checkBox.checked) {
            checkBox.nextElementSibling.className = "completedTask";
        }
        else {
            checkBox.nextElementSibling.className = "";
        }
    });

    let span = document.createElement("span");                                   //creating task
    span.innerText = someTask;

    let createTime = document.createElement("span");                        //creating Time
    createTime.className = "time";
    createTime.innerText = timeOfTask;

    let delButton = document.createElement("button");                           //creating "delete" button
    delButton.innerHTML = "Delete";
    delButton.className = "delButton";
    delButton.addEventListener("click", () => {
        delButton.parentElement.remove()
    });

    newItem.appendChild(checkBox);                                       //creating all list structure
    newItem.appendChild(span);
    newItem.appendChild(createTime);
    newItem.appendChild(delButton);
    tasksList.appendChild(newItem);

}

function addNewTask() {                              //FUNCTION adds value from input field to ToDo List(uses addToList)
    let date = new Date;                                                        //setting up TIME
    let formatedTime = [date.getHours(), date.getMinutes()].map(function (x) {  //fixing 8:6 to 08:06 format
        return x < 10 ? "0" + x : x
    }).join(":");
    if (enteredTask.value !== "") {                     //check for empty string
        addToList(enteredTask.value, formatedTime);
        enteredTask.value = "";                      //clearing old value
        enteredTask.focus();                        //focusing on input field
    }
    else {
        enteredTask.focus();                        //all the way focussing!!
    }
}

function reverseMe() {                                                          //reverses the list and adds new value to ToDo List (uses addToList)
    let allTasks = list.children;
    let reversedTasksList = Array.prototype.slice.call(allTasks);                //converting tasks collection into array
    [].reverse.call(reversedTasksList);                                         // reversing this array
    tasksList.innerHTML = "";                                                   // clearing old tasksList
    reversedTasksList.forEach(function (item) {                         //creating new tasks
        addToList(item.children[1].innerText, item.children[2].innerText);
    });
}

function enter(key) {                                           //making "enter" key working
    if (key.keyCode === 13) {
        addNewTask()
    }
}

