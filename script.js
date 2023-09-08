let currentDisplay = "";

function appendToDisplay(value) {
    currentDisplay += value;
    document.getElementById("display").value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = "";
    document.getElementById("display").value = currentDisplay;
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay).toString();
        document.getElementById("display").value = currentDisplay;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}