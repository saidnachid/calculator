let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let symbols = ["%", "*", "-", "=", "+", "/"];
let output = "";

function calculate(value) {
  if (value == "=" && value !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (value == "AC") {
    output = "";
  } else if (value == "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output == "" && symbols.includes(value)) {
      return;
    }
    output += value;
  }
  display.innerHTML = output;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
