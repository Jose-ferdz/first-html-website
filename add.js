
function valuename(val) {
    const display = document.getElementById("text");
    display.value += val;
}

function del() {
    const display = document.getElementById("text");
    display.value = display.value.slice(0, -1);
}
function clearDisplay() {
    const display = document.getElementById("text");
    display.value = "";
}
function calculate() {
    const display = document.getElementById("text");
    let expression = display.value;


    expression = expression.replace(/x/g, '*');

    try {

        const result = eval(expression);
        display.value = result;
    } catch (error) {

        display.value = "Error";
    }
}
