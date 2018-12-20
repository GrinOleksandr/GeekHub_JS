let inputField = document.getElementById("form_text");

let checkBtn = document.getElementById("form_btn");
checkBtn.addEventListener("click", checkMyIp);

function checkMyIp(e) {
    e.preventDefault();
    if(inputField.value) {
        let urlString = "https://tony11-blacklist-ip-v1.p.mashape.com/ipv4/" + inputField.value;
        $.ajax({
            url: urlString,
            method : "GET",
            headers: {
                "X-Mashape-Key": "Yq1LgSV9jmmshqPJhUcGwBnpTA9cp1teUo7jsnZFizwVPDpTZ0",
                "Accept": "application/json"
            },
        }).done(processResult);
    }
}

function processResult(data){
    if(isDottedIPv4(inputField.value)){
       let isItBlacklisted =  data.content.blacklisted;
       if(isItBlacklisted){
           alert(`Your IP address ${inputField.value} is in black list`);
       }
       else {alert("Your IP addres is clean!")}
    }
    else {alert("invalid IP. Enter IP address like 193.0.240.33")};
}

function isDottedIPv4(string){
    let match = string.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
    return match != null &&
        match[1] <= 255 && match[2] <= 255 &&
        match[3] <= 255 && match[4] <= 255;
}



