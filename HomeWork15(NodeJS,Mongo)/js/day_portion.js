const foodListUl = document.getElementById("food_list");
const dayMenuUl = document.getElementById("day_menu");
let menuCaloriesCounter = 0;
let caloriesSpan = document.getElementById("calories_counter");

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
    newItem.dataset.calories = element.calories;
    newItem.addEventListener('click', addMeToMenu);

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

function addMeToMenu(ev){
    addToMenu(this);
}

function addToMenu(target){
    let newItem = document.createElement("li");
    newItem.dataset.calories = target.dataset.calories;
    newItem.addEventListener('click', removeMeFromMenu);

    let itemName = document.createElement("span");
    itemName.innerText = target.querySelector("span").innerText;

    let itemCalories = document.createElement("span");
    itemCalories.innerText = `(${target.dataset.calories} Ккал.)`;
    itemCalories.style.color = "blue";
    itemCalories.style.fontWeight = "400";

    newItem.appendChild(itemName);
    newItem.appendChild(itemCalories);
    dayMenuUl.appendChild(newItem);
    menuCaloriesCounter += +target.dataset.calories;
    checkCaloriesLimit();
}

function removeMeFromMenu(ev){
    menuCaloriesCounter -= +this.dataset.calories;
    this.remove();
    checkCaloriesLimit();
    console.log(menuCaloriesCounter)
}

function checkCaloriesLimit(){
    let caloriesLimit = document.getElementById("calories_limit").value;
    caloriesSpan.innerText = menuCaloriesCounter;
    if(!caloriesLimit){
        alert("Установите лимит каллорий")
    }
    if(menuCaloriesCounter > caloriesLimit){
        alert("ВНИМАНИЕ!Лимит каллорий превышен")
    }
}
