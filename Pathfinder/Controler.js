
function diceToggle() {
    $("#diceRoller").toggle();
}

function notesToggle() {
    $("#notesPage").toggle();
}
function clear() {

}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addDiceHistory(die,number) {
    var row = "<tr>You rolled a D" + die + " and got a " + number + "</tr>";
    console.log(row);
    document.getElementById("diceHistoryTable").innerHTML += row;
}

function rollD2() {
    var roll = Math.floor((Math.random() * 2) + 1)
    confirm(roll);
    addDiceHistory(2, roll);
}

function rollD4() {
    var roll = Math.floor((Math.random() * 4) + 1)
    confirm(roll);
    addDiceHistory(4, roll);
}

function rollD6() {
    var roll = Math.floor((Math.random() * 6) + 1)
    confirm(roll);
    addDiceHistory(6, roll);
}

function rollD8() {
    var roll = Math.floor((Math.random() * 8) + 1)
    confirm(roll);
    addDiceHistory(8, roll);
}

function rollD10() {
    var roll = Math.floor((Math.random() * 10) + 1)
    confirm(roll);
    addDiceHistory(10, roll);
}

function rollD12() {
    var roll = Math.floor((Math.random() * 12) + 1)
    confirm(roll);
    addDiceHistory(12, roll);
}

function rollD20() {
    var roll = Math.floor((Math.random() * 20) + 1)
    confirm(roll);
    addDiceHistory(20, roll);
}

