const foodListUl = document.getElementById("food_list");
document.addEventListener('DOMContentLoaded', renderList);

function renderList () {
    fetch("http://127.0.0.1:8000/get?", {
        method: 'GET'
    }).then(function (response) {
        return response.text()
    })
        .then(function (textOfResponse) {
            return JSON.parse(textOfResponse);
        })
        .then(function (array) {
            addAllToList(array)
        })
        .catch(error => console.log("Данные не получены: " + error));
}

function addAllToList(array) {
    array.forEach(function (item) {
        addFromBase(item)
    });
}

function addFromBase(element) {
    let newItem = document.createElement("li");

    let itemName = document.createElement("span");
    itemName.innerText = element.name;

    let itemCalories = document.createElement("span");
    itemCalories.innerText = `(${element.calories} Ккал.)`;
    itemCalories.style.color = "blue";
    itemCalories.style.fontWeight = "400";

    newItem.appendChild(itemName);
    newItem.appendChild(itemCalories);
    foodListUl.appendChild(newItem);
}