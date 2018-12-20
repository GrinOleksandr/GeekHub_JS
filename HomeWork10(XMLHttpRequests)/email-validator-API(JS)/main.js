let inputField = document.getElementById("form_text");

let checkBtn = document.getElementById("form_btn");
checkBtn.addEventListener("click", validateMe);

function validateMe(e) {
    e.preventDefault();
    if (inputField.value) {
        let xhr = new XMLHttpRequest();
        let xhrString = "https://pozzad-email-validator.p.mashape.com/emailvalidator/validateEmail/" + inputField.value;
        xhr.open('GET', xhrString, true);
        xhr.setRequestHeader('X-Mashape-Key', 'Yq1LgSV9jmmshqPJhUcGwBnpTA9cp1teUo7jsnZFizwVPDpTZ0');
        xhr.setRequestHeader('Accept', ' application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
               let recievedData = JSON.parse(xhr.responseText);


                if (recievedData.isValid) {
                    alert("Yeah! This is REAL email!");
                }
                else {
                    alert("Oops.FAKE email");
                }
            }
        };
        xhr.send();
    }
}

