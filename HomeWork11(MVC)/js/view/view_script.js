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
