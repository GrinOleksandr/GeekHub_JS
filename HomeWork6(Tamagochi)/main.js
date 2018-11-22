let creatureName = document.getElementById("creature-name");
creatureName.addEventListener("keypress", enter);

let createButton = document.getElementById("create");
createButton.addEventListener("click", createMe );

// creating prototype of all creatures
let allCreatures = {};
allCreatures.days = days;
allCreatures.feed = feed;
allCreatures.play = play;
allCreatures.walk = walk;
allCreatures.sleep = sleep;
allCreatures.cure = cure;
allCreatures.sport = sport;
allCreatures.pray = pray;
allCreatures.createStructure = createStructure;
allCreatures.checkParams = checkParams;

//makes 1day manipulations and counts days
let myDay;
function days() {
    myDay = setInterval(function () {
        let thisCreatureHTML = document.getElementById("creature" + this.index);
        if (this.alive && !this.isFat) {
            this.stats.health -= 5;
            this.stats.satiety -= 4;
            this.stats.strength -= 3;
            this.stats.happiness -= 7;
            this.daysCount += 1;

            this.checkParams();
        }
    }.bind(this), 3000);
}

//checking all parameters of creature and setting states(warning,fat,dead)
function checkParams() {
    let thisCreatureHTML = document.getElementById("creature" + this.index);
    let warningMsgBlock = thisCreatureHTML.getElementsByClassName("warning-msg")[0];
    let emotionSmile = thisCreatureHTML.getElementsByClassName("emotion-block")[0];
    let statsArray = [];
    for (let key in this.stats) {
        statsArray.push(this.stats[key]);
    }

    if (statsArray.every(function (number) {
        return number > 30 && number < 120
    })) {
        warningMsgBlock.style.display = "none";
        if (statsArray.every(function (number) {
            return number > 50 && number < 120
        })) {
            emotionSmile.src = "img/normal+.jpg";
        }
        if (statsArray.every(function (number) {
            return number > 80 && number < 120
        })) {
            emotionSmile.src = "img/good.jpg";
        }
    }


    if (statsArray.some(function (number) {
        return number < 50 && number > 30
    })) {
        emotionSmile.src = "img/normal-.png";
    }


    if (statsArray.some(function (number) {
        return number < 30
    })) {
        emotionSmile.src = "img/sick.jpg";
        warningMsgBlock.style.display = "block";
    }


    if (statsArray.some(function (number) {
        return number > 120 && number < 150
    })) {
        warningMsgBlock.style.display = "block";
    }

    if (statsArray.some(function (number) {
        return number > 150
    })) {
        let fatMsg = document.createElement("p");
        fatMsg.className = "fat-msg";
        fatMsg.innerText = "Your creature is too fat";
        thisCreatureHTML.appendChild(fatMsg);
        emotionSmile.src = "img/dead.jpg";
        this.isFat = true;
    }

    if (statsArray.some(function (number) {
        return number < 1
    })) {
        for (let param in this.stats) {
            if (this.stats[param] < 1) {
                this.stats[param] = 0;
                let isDeadMsg = document.createElement("div");
                isDeadMsg.className = "dead-msg";
                isDeadMsg.innerText = `Your creature  "${this.name}" nas no more "${param}" and now it is dead and smells not good. It was "${this.daysCount}" days old.`;
                warningMsgBlock.style.display = "none";
                emotionSmile.src = "img/dead.jpg";
                thisCreatureHTML.appendChild(isDeadMsg);
                this.alive = false;
            }
        }
    }

    thisCreatureHTML.getElementsByClassName("health")[0].innerText = this.stats.health;
    thisCreatureHTML.getElementsByClassName("satiety")[0].innerText = this.stats.satiety;
    thisCreatureHTML.getElementsByClassName("strength")[0].innerText = this.stats.strength;
    thisCreatureHTML.getElementsByClassName("happiness")[0].innerText = this.stats.happiness;
    thisCreatureHTML.getElementsByClassName("daysCount")[0].innerText = this.daysCount + " days";
    statsArray = [];

}

// creating actions
function feed() {
    if (this.alive && !this.isFat) {
        this.stats.health += 5;
        this.stats.satiety += 15;
        this.stats.happiness += 5;
        this.checkParams();
    }
}

function play() {
    if (this.alive && !this.isFat) {
        this.stats.health -= 1;
        this.stats.satiety -= 5;
        this.stats.happiness += 7;
        this.checkParams();
    }
}

function walk() {
    if (this.alive && !this.isFat) {
        this.stats.health -= 2;
        this.stats.satiety -= 5;
        this.stats.strength -= 2;
        this.stats.happiness += 10;
        this.checkParams();
    }
}

function sleep() {
    if (this.alive && !this.isFat) {
        this.stats.health += 10;
        this.stats.satiety -= 10;
        this.stats.strength += 1;
        this.stats.happiness += 5;
        this.checkParams();
    }
}

function cure() {
    if (this.alive && !this.isFat) {
        this.stats.health += 20;
        this.stats.satiety -= 10;
        this.stats.strength -= 2;
        this.stats.happiness -= 5;
        this.checkParams();
    }
}

function sport() {
    if (this.alive) {
        this.stats.health -= 3;
        this.stats.satiety -= 10;
        this.stats.strength += 10;
        this.stats.happiness -= 2;
        this.checkParams();
    }
}

function pray() {
    if (this.alive && !this.isFat) {
        this.stats.health += 2;
        this.stats.happiness += 20;
        this.checkParams();
    }
}

//creating index counter
let indexCounter = 0;
// constructor function  - creatures creator
function CreateCreature(name) {
    this.name = name;
    this.stats = {
        health: 100,
        satiety: 100,
        strength: 100,
        happiness: 99,
    };
    this.daysCount = 0;
    this.alive = true;
    this.isFat = false;
    this.index = indexCounter;
    indexCounter++;
    this.createStructure(this.name);
    this.days();
}
CreateCreature.prototype = allCreatures;

//wrapper function for creating creatures
function createMe() {
    if (creatureName.value !== "") {
        new CreateCreature(creatureName.value);
        creatureName.value = "";
        creatureName.focus();
    }
}


//creating  DOM structure of every creature
function createStructure() {

    let allArmy = document.getElementById("army");

    let newCreature = document.createElement("div");            //creating new div
    newCreature.id = "creature" + this.index;
    newCreature.className = "creature-div";

    //creating actions div
    let actions = document.createElement("div");
    actions.id = "actions";

    // creating all actions buttons
    let feedButton = document.createElement("button");
    feedButton.innerText = "Кормить";
    feedButton.addEventListener("click", this.feed.bind(this));

    let playButton = document.createElement("button");
    playButton.innerText = "Играть";
    playButton.addEventListener("click", this.play.bind(this));

    let walkButton = document.createElement("button");
    walkButton.innerText = "Гулять";
    walkButton.addEventListener("click", this.walk.bind(this));

    let sleepButton = document.createElement("button");
    sleepButton.innerText = "Спать";
    sleepButton.addEventListener("click", this.sleep.bind(this));

    let cureButton = document.createElement("button");
    cureButton.innerText = "Лечить";
    cureButton.addEventListener("click", this.cure.bind(this));

    let sportButton = document.createElement("button");
    sportButton.innerText = "Спорт";
    sportButton.addEventListener("click", this.sport.bind(this));

    let prayButton = document.createElement("button");
    prayButton.innerText = "Молиться";
    prayButton.addEventListener("click", this.pray.bind(this));
    //creating stats div and stats
    let statsDiv = document.createElement("div");
    statsDiv.id = "stats";

    //creating values
    let healthValue = document.createElement("span");
    healthValue.innerText = this.stats.health;
    healthValue.className = "health";

    let healthString = document.createElement("p");
    healthString.innerText = "Здоровье: ";
    healthString.appendChild(healthValue);

    let satietyValue = document.createElement("span");
    satietyValue.innerText = this.stats.satiety;
    satietyValue.className = "satiety";

    let satietyString = document.createElement("p");
    satietyString.innerText = "Сытость: ";
    satietyString.appendChild(satietyValue);

    let strengthValue = document.createElement("span");
    strengthValue.innerText = this.stats.strength;
    strengthValue.className = "strength";

    let strengthString = document.createElement("p");
    strengthString.innerText = "Сила: ";
    strengthString.appendChild(strengthValue);

    let happinessValue = document.createElement("span");
    happinessValue.innerText = this.stats.happiness;
    happinessValue.className = "happiness";

    let happinessString = document.createElement("p");
    happinessString.innerText = "Счастье: ";
    happinessString.appendChild(happinessValue);


    //creating DAYS COUNT
    let daysCount = document.createElement("p");
    daysCount.className = "daysCount";
    daysCount.innerText = this.daysCount + " days";

    //creating name
    let myName = document.createElement("p");
    myName.id = "myName";
    myName.innerText = this.name;

    //creating warning message
    let warningMsg = document.createElement("p");
    warningMsg.className = "warning-msg";
    warningMsg.innerText = "HELP ME!!!";

    //creating emotion smile
    let emotionBlock = document.createElement("img");
    emotionBlock.className = "emotion-block";
    emotionBlock.src = "img/good.jpg";


    //creating final DOM structure
    actions.appendChild(feedButton);
    actions.appendChild(playButton);
    actions.appendChild(walkButton);
    actions.appendChild(sleepButton);
    actions.appendChild(cureButton);
    actions.appendChild(sportButton);
    actions.appendChild(prayButton);

    statsDiv.appendChild(healthString);
    statsDiv.appendChild(satietyString);
    statsDiv.appendChild(strengthString);
    statsDiv.appendChild(happinessString);

    newCreature.appendChild(actions);
    newCreature.appendChild(statsDiv);
    newCreature.appendChild(warningMsg);
    newCreature.appendChild(myName);
    newCreature.appendChild(daysCount);
    newCreature.appendChild(emotionBlock);
    allArmy.appendChild(newCreature);
}

//making "enter" key working
function enter(key) {
    if (key.keyCode === 13) {
        createMe()
    }
}

//focussing on input field onLoad
document.addEventListener('DOMContentLoaded', function () {
    creatureName.focus();
});






