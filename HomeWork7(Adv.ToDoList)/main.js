let enteredTask = document.getElementById("enterYourTask");             //making "enter" key working
enteredTask.onkeypress =  enter;

document.addEventListener('DOMContentLoaded', function () {                 //focusing on input field
    enteredTask.focus();
});
document.addEventListener('DOMContentLoaded', renderTaskList);          //when page refreshes

let tasksList = document.getElementById("list");
tasksList.addEventListener("click", editME);

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addNewTask);

let reverseButton = document.getElementById("reverseButton");
reverseButton.addEventListener("click", reverseMe);

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    tasksList.innerHTML = "";
    localStorage.clear();
})

function renderTaskList() {                                             //rebuild task list from LocalStorage
    let oldTasks = [];
    let tasksCounter = getLocalStorageObjectItem("indexCount") || 0;
    for (let i = 0; i <= tasksCounter; i++) {
        if (getLocalStorageObjectItem(i)) {
            oldTasks.push(getLocalStorageObjectItem(i));
        }
    }
    localStorage.clear();
    tasksList.innerHTML = "";

    for (let k = 0; k < oldTasks.length; k++) {
        addToList(oldTasks[k].task, oldTasks[k].time, oldTasks[k].isDone);

    }
}

function addToList(someTask, timeOfTask, isDone) {                                              //FUNCTION adds any value to ToDo List
    let tasksCounter = getLocalStorageObjectItem("indexCount") || 0;

    let newItem = document.createElement("li");                                     //Creating <li></li>
    newItem.dataset.index = tasksCounter + 1;

    let checkBox = document.createElement("input");                              //Creating checkbox
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", doMe);

    let span = document.createElement("span");                                   //creating task
    span.className = "taskInnerText";
    span.innerText = someTask;

    if (isDone === true) {                                                      //check if it is done
        span.style.backgroundColor = "green";
        span.style.textDecoration = "line-through";
        checkBox.checked = true;
    }

    let createTime = document.createElement("span");                            //creating Time
    createTime.className = "time";
    createTime.innerText = timeOfTask;

    let delButton = document.createElement("button");                           //creating "delete" button
    delButton.innerHTML = "Delete";
    delButton.className = "delButton";
    delButton.addEventListener("click", deleteMe);

    newItem.appendChild(checkBox);                                       //creating all list structure
    newItem.appendChild(span);
    newItem.appendChild(createTime);
    newItem.appendChild(delButton);
    tasksList.appendChild(newItem);

    setLocalStorageObjectItem("indexCount", tasksCounter + 1);
    setLocalStorageObjectItem(tasksCounter + 1, {"task": someTask, "time": timeOfTask, "isDone": isDone});

}

function addNewTask() {                              //FUNCTION adds value from input field to ToDo List(uses addToList)

    if (enteredTask.value !== "") {                     //check for empty string
        addToList(enteredTask.value, setTime(), false);
        enteredTask.value = "";                      //clearing old value
        enteredTask.focus();                        //focusing on input field
    }
    else {
        enteredTask.focus();                        //all the way focusing!!
    }
}

function reverseMe() {                                                          //reverses the list and adds new values to ToDo List (uses addToList)
    let tasksCounter = getLocalStorageObjectItem("indexCount") || 0;
    let oldTasks = [];
    for (let i = 0; i <= tasksCounter; i++) {
        if (getLocalStorageObjectItem(i)) {
            oldTasks.push(getLocalStorageObjectItem(i));
        }
    }

    tasksList.innerHTML = "";
    let reversedTasksList = oldTasks.reverse();
    localStorage.clear();
    for (let k = 0; k < reversedTasksList.length; k++) {
        addToList(reversedTasksList[k].task, reversedTasksList[k].time, oldTasks[k].isDone);
    }
}

function doMe() {                                                               //realising "done" status
    let myIndex = this.parentElement.dataset.index;
    let myTaskObject = getLocalStorageObjectItem(myIndex);

    if (this.checked) {
        myTaskObject.isDone = true;
        setLocalStorageObjectItem(myIndex, myTaskObject);
        this.nextElementSibling.style.backgroundColor = "green";
        this.nextElementSibling.style.textDecoration = "line-through";
    }

    else {
        myTaskObject.isDone = false;
        setLocalStorageObjectItem(myIndex, myTaskObject);
        this.nextElementSibling.style.backgroundColor = "#ff5050";
        this.nextElementSibling.style.textDecoration = "none";
    }
    return myTaskObject.isDone;
}

function enter(key) {                                           //making "enter" key working
    if (key.which === 13) {
        addNewTask()
    }
}

function deleteMe() {                                               //delete action
    let myIndex = this.parentElement.dataset.index;
    localStorage.removeItem(`${myIndex}`);
    this.parentElement.remove();
}

function saveMe() {                                                 //save action

    if (this.parentElement.querySelector(".editInputField").value !== "") {
        let myIndex = this.parentElement.dataset.index;
        this.parentElement.querySelector(".taskInnerText").innerText = this.parentElement.querySelector(".editInputField").value;

        setLocalStorageObjectItem(myIndex, {
            "task": this.parentElement.querySelector(".editInputField").value,
            "time": setTime()
        });
        renderTaskList();
        this.parentElement.querySelector(".editInputField").remove();
        this.addEventListener("click", deleteMe);
        this.removeEventListener("click", saveMe);
        this.innerText = "Delete";
    }

    else {
        this.parentElement.querySelector(".editInputField").focus()
    }
}

function editME() {                                             //edit field appearance
    let target = event.target;

    if (target.className === "taskInnerText") {
        let editInputField = document.createElement("textarea");
        editInputField.value = target.innerText;
        editInputField.className = "editInputField";
        editInputField.addEventListener("input", resizeTextarea);
        editInputField.addEventListener("focus", resizeTextarea);

        let button = target.parentElement.querySelector("button");
        button.innerText = "Save";
        button.removeEventListener("click", deleteMe);
        button.addEventListener("click", saveMe);

        target.parentElement.appendChild(editInputField);
        editInputField.focus();
    }

    function resizeTextarea() {                             //textArea height auto resize fit to innerTEXT height
        this.style.height = '12px';
        this.style.height = this.scrollHeight - 7 + 'px';
    }
}

function setTime() {
    let date = new Date;                                                        //setting up TIME
    return [date.getHours(), date.getMinutes()].map(function (x) {  //fixing 8:6 to 08:06 format
        return x < 10 ? "0" + x : x
    }).join(":");
}

function setLocalStorageObjectItem(key, value) {
    if (value === undefined) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

function getLocalStorageObjectItem(key) {
    var json = localStorage.getItem(key);
    if (json === undefined) {
        return undefined;
    }
    return JSON.parse(json);
}
