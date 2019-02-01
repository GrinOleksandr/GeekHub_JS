const addProductNameField = document.getElementById("add_product_name_field");
const addProductCaloriesField = document.getElementById("add_product_calories_field");
const addProductButton = document.getElementById("add_product_button");
addProductButton.addEventListener("click",addProductToList );

function addProductToList(){
    let name = addProductNameField.value;
    let calories = addProductCaloriesField.value;
    if((name)&&(calories)&&(calories.match(/^\d+$/))) {
        let urlString = `http://127.0.0.1:8000/add?name=${name}&calories=${calories}`;
        fetch(urlString, {
            method: 'GET'
        })
            .catch(error => console.log("Данные не отправленны: " + error));

        console.log(`${name} : ${calories}  succesfuly added`)
    }
    else alert("ОШИБКА!!!Калории должны быть числом.")

}

