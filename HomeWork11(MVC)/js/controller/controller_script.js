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