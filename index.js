let Ammount = 0;
let string = "000";

function updateAmmount() {
    document.getElementById("h1").innerHTML = "Рост Акций:$10." + string + Ammount;
    Ammount++; 
    if (Ammount == 10) {
        string = "00";
    }
    if (Ammount == 100) {
        string = "0";
    }
    if (Ammount == 1000) {
        string = "";
    }
}

setInterval(updateAmmount, 1000);
