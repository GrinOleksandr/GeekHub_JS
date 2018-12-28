//!!! this is all the same code that is in view/model/controller  folders in the one place.

//****************************************************CONTROLLER*********************
function MyController(toDoListElement) {

    let listOfTasks = new MyModel();

    myView(toDoListElement, listOfTasks, {onAddTask, onDone, onReverse, onClearList, onDelete, onDragDrop, onDragStart, onDragOver});

    function onAddTask(text) {
        listOfTasks.add(text);
    }

    function onDone(task) {
        listOfTasks.done(task)
    }

    function onDelete(ev) {
        listOfTasks.delete(ev)
    }

    function onReverse(tasks) {
        tasks.reverseList(listOfTasks);
    }

    function onClearList(listDOMElement) {
        listOfTasks.clearList(listDOMElement);
    }

    function onDragStart(ev){
        listOfTasks.dragStart(ev)
    }

    function onDragOver(ev){
        listOfTasks.dragOver(ev)
    }

    function onDragDrop(ev){
        listOfTasks.dragDrop(ev)
    }
}
//****************************************************VIEW*********************
function myView(toDoListElement, tasks , actionsList) {

    let input = document.getElementById("input_task");

    let addBtn = document.getElementById("add_task_button");
    addBtn.addEventListener("click", function () {
        actionsList.onAddTask(input.value);
    });

    let reverseBtn = document.getElementById("reverse_button");
    reverseBtn.addEventListener("click", function () {
        actionsList.onReverse(tasks, tasks.storageForTasks);
    });

    let clearBtn = document.getElementById("clear_button");
    clearBtn.addEventListener("click", function () {
        actionsList.onClearList(toDoListElement);
    });

    tasks.on('add', function (task) {
        add(task);
    });

    tasks.on('reverse', function (tasks) {
        reverseList(tasks);
    });

    tasks.on('clear', function () {
        clearList(toDoListElement);
    });

    tasks.on('done', function (task) {
        done(task);
    });

    tasks.on('delete', function (ev) {
        deleteMe(ev);
    });

    tasks.on('dragstart', function (ev) {
        dragStart(ev)
    });

    tasks.on('dragover', function (ev) {
        dragOver(ev);
    });

    tasks.on('dragdrop', function (ev) {
        dragDrop(ev)
    });

    if (tasks.storageForTasks) {
        tasks.storageForTasks.forEach(function (task) {
            add(task);
        });
    }

    function add(task) {
        let newItem = document.createElement("li");                                     //Creating <li></li>
        newItem.dataset.index = task.taskIndex;
        newItem.draggable = true;
        newItem.addEventListener("dragover", actionsList.onDragOver);
        newItem.addEventListener("dragstart", actionsList.onDragStart);
        newItem.addEventListener("drop", actionsList.onDragDrop, true);

        let checkBox = document.createElement("input");                              //Creating checkbox
        checkBox.type = "checkbox";
        checkBox.addEventListener("click", function (task) {
            actionsList.onDone(task)
        });

        let span = document.createElement("span");                                   //creating task
        span.className = "taskInnerText";
        span.innerText = task.text;

        if (task.done === true) {                                                      //check if it is done
            span.style.backgroundColor = "green";
            span.style.textDecoration = "line-through";
            checkBox.checked = true;
        }

        let createTime = document.createElement("span");                            //creating Time
        createTime.className = "time";
        createTime.innerText = task.time;

        let delButton = document.createElement("button");                           //creating "delete" button
        delButton.innerHTML = "Delete";
        delButton.className = "delButton";
        delButton.addEventListener("click", actionsList.onDelete);

        newItem.appendChild(checkBox);                                       //creating all list structure
        newItem.appendChild(span);
        newItem.appendChild(createTime);
        newItem.appendChild(delButton);
        toDoListElement.appendChild(newItem);
        input.value = "";

    }

    function reverseList(tasks) {
        toDoListElement.innerHTML = "";
        if (tasks.storageForTasks) {
            tasks.storageForTasks.forEach(function (task) {
                add(task);
            });
        }
    }

    function clearList(toDoListElement) {
        toDoListElement.innerHTML = "";
    }

    function done(task) {
        let taskBody = toDoListElement.querySelector(`li[data-index = "${task.taskIndex}"] span `);
        let checkBox = toDoListElement.querySelector(`li[data-index = "${task.taskIndex}"]`).firstChild;

        if (task.done === true) {
            checkBox.checked = true;
            taskBody.style.backgroundColor = "green";
            taskBody.style.textDecoration = "line-through";
        }
        else {
            checkBox.checked = false;
            taskBody.style.backgroundColor = "#ff5b3f";
            taskBody.style.textDecoration = "none";
        }
    }

    function deleteMe(ev) {
        ev.target.parentElement.remove();
    }

    //drag-drop section
    function dragOver(ev) {
        ev.preventDefault();
    }

    function dragStart(ev) {
    }

    function dragDrop(ev) {
        toDoListElement.innerHTML = "";
        if (tasks.storageForTasks) {
            tasks.storageForTasks.forEach(function (task) {
                add(task);
            });
        }
    }
}

//****************************************************MODEL*************************
    function MyModel() {
        this.listeners = [];
        this.taskCounter = this.getFromLocalStorage("taskCounter") || 0;
        this.storageForTasks = [];
        for (let i = 0; i < this.taskCounter; i++) {
            this.storageForTasks.push(this.getFromLocalStorage(i));
        }
        let tempArray = [];
        for (let i = 0; i < this.taskCounter; i++) {
            let someTask = this.getFromLocalStorage(i);
            if (someTask) {
                tempArray.push(someTask);
            }
        }

        localStorage.clear();
        this.storageForTasks = [];
        this.saveToLocalStorage("taskCounter", this.taskCounter);

        for (let i = 0; i < tempArray.length; i++) {
            let currentTask = tempArray[i];
            currentTask.taskIndex = i;
            this.saveToLocalStorage(i, tempArray[i]);
            this.storageForTasks.push(tempArray[i]);
        }
    }

    MyModel.prototype = Object.create(Array.prototype);

    MyModel.prototype.add = function (text, time, done) {
        if (text) {
            this.taskCounter = this.getFromLocalStorage("taskCounter") || 0;

            let task = {
                text: text,
                time: this.time || this.setTime(),
                done: done || false,
                taskIndex: this.taskCounter
            };

            this.storageForTasks[this.taskCounter] = task;
            this.saveToLocalStorage(this.taskCounter, task);
            this.taskCounter++;
            this.saveToLocalStorage("taskCounter", this.taskCounter);
            this.emit('add', [task]);
        }
    };

    MyModel.prototype.reverseList = function (tasks) {

        let tempArray = [];
        for (let i = 0; i < this.taskCounter; i++) {
            let someTask = this.getFromLocalStorage(i);
            if (someTask) {
                tempArray.push(someTask);
            }
        }

        localStorage.clear();
        this.storageForTasks = [];
        this.saveToLocalStorage("taskCounter", this.taskCounter);
        tempArray.reverse();
        for (let i = 0; i < tempArray.length; i++) {
            let currentTask = tempArray[i];
            currentTask.taskIndex = i;
            this.saveToLocalStorage(i, tempArray[i]);
            this.storageForTasks.push(tempArray[i]);
        }
        this.emit('reverse', [tasks]);
    };

    MyModel.prototype.done = function (ev) {
        let task = this.storageForTasks[ev.target.parentElement.dataset.index];
        if (task.done) {
            task.done = false;
        }
        else {
            task.done = true;
        }
        this.saveToLocalStorage(task.taskIndex, task);
        this.emit('done', [task]);
    };

    MyModel.prototype.delete = function (ev) {
        let targetIndex = ev.target.parentElement.dataset.index;
        this.storageForTasks.splice(this.storageForTasks[targetIndex] - 1, 1);
        localStorage.removeItem(targetIndex);
        this.emit('delete', [ev]);
    };

    MyModel.prototype.clearList = function () {
        this.storageForTasks = [];
        localStorage.clear();
        this.emit('clear', this);
    };

    MyModel.prototype.on = function (event, callback) {
        this.listeners.push({
            event,
            callback
        });
    };

    MyModel.prototype.emit = function (event, args) {
        let tasks = this;
        this.listeners.forEach(listener => {
            if (listener.event === event) {
                listener.callback.apply(tasks, args);
            }
        });
    };

    MyModel.prototype.saveToLocalStorage = function (key, value) {
        if (value === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    };

    MyModel.prototype.getFromLocalStorage = function (key) {
        let json = localStorage.getItem(key);
        if (json === undefined) {
            return undefined;
        }
        return JSON.parse(json);
    };

    MyModel.prototype.setTime = function () {
        let date = new Date;                                                        //setting up TIME
        return [date.getHours(), date.getMinutes()].map(function (x) {  //fixing 8:6 to 08:06 format
            return x < 10 ? "0" + x : x
        }).join(":");
    };

    MyModel.prototype.dragOver = function (ev) {
        ev.stopPropagation();
        this.emit('dragover', [ev]);
    };

    MyModel.prototype.dragStart = function (ev) {
        let target = ev.target;
        this.dragStartElementIndex = target.dataset.index;
        this.emit('dragstart', [ev]);
    };

    MyModel.prototype.dragDrop = function (ev) {
        let target = ev.target;
        if (!target.dataset.index) {
            this.dragTargetElementIndex = target.parentElement.dataset.index;
        }
        else {
            this.dragTargetElementIndex = target.dataset.index;
        }
        this.emit('dragdrop', [ev]);

        ev.stopPropagation();
        let startElement = this.storageForTasks[this.dragStartElementIndex];
        let tempArray = [];
        for (let i = 0; i < this.taskCounter; i++) {
            tempArray.push(this.getFromLocalStorage(i))
        }
        tempArray.splice(this.dragStartElementIndex, 1);
        tempArray.splice(this.dragTargetElementIndex, 0, startElement);

        localStorage.clear();
        this.storageForTasks = [];
        this.saveToLocalStorage("taskCounter", this.taskCounter);
        for (let i = 0; i < tempArray.length; i++) {
            let currentTask = tempArray[i];
            currentTask.taskIndex = i;
            this.saveToLocalStorage(i, tempArray[i]);
            this.storageForTasks.push(tempArray[i]);
        }
        this.emit('dragdrop', [ev]);
    };
