export default function MyModel() {
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

