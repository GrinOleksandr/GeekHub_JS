var images = document.querySelectorAll("img");          //select all images

window.addEventListener("DOMContentLoaded" , function () {        //add listener for if you zoom out and refresh
    triggerForAll(images);
});

window.addEventListener("scroll" , function () {        //add listener on scroll
    triggerForAll(images);
});

function triggerForAll (manyElements) {                 //applying to each image
    [].forEach.call(manyElements, function (item) {
        showElement(item);
    })
}

function showElement(someElement) {
    if (((someElement.getBoundingClientRect().top - document.documentElement.clientHeight) < 0) && (someElement.getBoundingClientRect().bottom > 0)) {     //check for visibility on screen
        if (someElement.dataset.isactive === "false") {     //check if already active
            someElement.dataset.isactive = "true";
            someElement.setAttribute("src", someElement.dataset.src);
        }
    }
    else {
        someElement.dataset.isactive = "false";
        someElement.setAttribute("src", "#");
    }
}
