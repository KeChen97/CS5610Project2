
// Add Workout Modal
const wktmodal = document.querySelector(".workoutModal");
const addWorkoutBtn = document.querySelector("#addWorkoutBtn");
const wktclose = document.querySelector("#wkt-close");

// When the user clicks on the start your workout button, open the addWorkout modal
addWorkoutBtn.onclick = function() {
    wktmodal.style.display = "block";
  }
  
// When the user clicks on <span> (x), close the addWorkout modal
wktclose.onclick = function() {
    wktmodal.style.display = "none";
}

// When the user clicks anywhere outside of the addWorkout modal, close it
window.onclick = function(event) {
    if (event.target == wktmodal) {
        wktmodal.style.display = "none";
    }
}

// Add Exercises Modal
const excmodal = document.querySelector(".exerciseModal");
const addExerciseBtn = document.querySelector("#addExerciseBtn");
const exsclose = document.querySelector("#exc-close");
// When the user clicks on the add exercise button, open the addWorkout modal
addExerciseBtn.onclick = function() {
    wktmodal.style.display = "none";
    excmodal.style.display = "block";
}

exsclose.onclick = function() {
    excmodal.style.display = "none";
}

const addedDone = document.querySelector("#addWorkoutBtnToDB");
console.log("added"+ addedDone);
addedDone.onclick = function() {
    console.log("doneonlick");
    const addedExercisesDivs = document.querySelectorAll(".addedExercise");
    console.log(addedExercisesDivs);
    if(addedExercisesDivs != null) {
        for(let exerciseDiv of addedExercisesDivs) {
            const exerciseName = exerciseDiv.querySelector(".addedExercise-name").value;
            const setNum = exerciseDiv.querySelector(".setNum").value;
            console.log("name:" + exerciseName + " set: " + setNum);
        }
    }
    wktmodal.style.display = "none";
}


const exercisesModule = document.querySelector(".exercises-part");
const historyModule = document.querySelector(".history-part");
const mainPanel = document.querySelector(".main-panel");
const exercisesLink = document.querySelector("#exercises-link");
const historyLink = document.querySelector("#history-link");

//Switch to Exercises Module
exercisesLink.onclick = function () {
    mainPanel.style.display = "none";
    historyModule.style.display = "none";
    exercisesModule.style.display = "block";
}

//Switch to history Module
historyLink.onclick = function () {
    mainPanel.style.display = "none";
    exercisesModule.style.display = "none";
    historyModule.style.display = "block";
}

//Switch to Overview
const overviewLink = document.querySelector("#overview-link");
overviewLink.onclick = function () {
    exercisesModule.style.display = "none";  
    historyModule.style.display = "none";
    mainPanel.style.display = "flex";
}


//AddExercise Modal Views Switch
const fullbodyLink = document.querySelector("#fullbody-link");
const coreLink = document.querySelector("#core-link");
const legsLink = document.querySelector("#legs-link");
const backLink = document.querySelector("#back-link");
const armsLink = document.querySelector("#arms-link");

const fullbodyList = document.querySelector(".exercises-fullbody");
const coreList = document.querySelector(".exercises-core");
const legsList = document.querySelector(".exercises-legs");
const backList = document.querySelector(".exercises-back");
const armsList = document.querySelector(".exercises-arms");

fullbodyLink.onclick = function () {   
    coreList.style.display = "none";
    legsList.style.display = "none";
    backList.style.display = "none";
    armsList.style.display = "none";
    fullbodyList.style.display = "block";
}

coreLink.onclick = function () {   
    coreList.style.display = "block";
    legsList.style.display = "none";
    backList.style.display = "none";
    armsList.style.display = "none";
    fullbodyList.style.display = "none";
}

legsLink.onclick = function () {   
    coreList.style.display = "none";
    legsList.style.display = "block";
    backList.style.display = "none";
    armsList.style.display = "none";
    fullbodyList.style.display = "none";
}

backLink.onclick = function () {   
    coreList.style.display = "none";
    legsList.style.display = "none";
    backList.style.display = "block";
    armsList.style.display = "none";
    fullbodyList.style.display = "none";
}

armsLink.onclick = function () {   
    coreList.style.display = "none";
    legsList.style.display = "none";
    backList.style.display = "none";
    armsList.style.display = "block";
    fullbodyList.style.display = "none";
}