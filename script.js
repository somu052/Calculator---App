let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } 
    else if (value === "C") {
      display.value = "";
    } 
    else {
      display.value += value;
    }
  });
});

document.querySelector(".backspace").addEventListener("click", function () {
  display.value = display.value.slice(0, -1);
});