const body = document.querySelector("body") as HTMLBodyElement;
const div = document.createElement("div") as HTMLDivElement;
const increaseButton = document.createElement("button") as HTMLButtonElement;
const decreaseButton = document.createElement("button") as HTMLButtonElement;
const counterDisplay = document.createElement("span") as HTMLSpanElement;
const message = document.createElement("span") as HTMLSpanElement;

message.innerText = "Counter";
counterDisplay.innerText = "0";
increaseButton.innerText = "INCREASE";
decreaseButton.innerText = "DECREASE";

increaseButton.addEventListener("click", () => counterDisplay.innerText = `${+counterDisplay.innerText + 1}`);
decreaseButton.addEventListener("click", () => {
  if (+counterDisplay.innerText > 0) {
    counterDisplay.innerText = `${+counterDisplay.innerText - 1}`;
  }
});


body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.width = "100%";
body.style.height = "100vh";
body.style.fontSize = "25px";
body.style.backgroundImage = `url("./resources/woodbg.jpg")`;
body.style.backgroundSize = "cover";
body.style.touchAction = "manipulation"; /* Disable double tap zoom on touch devices to allow fast touch actions on screen buttons */


div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.width = "90%";
div.style.height = "80%";
div.style.border = "1px solid #ffffff";
div.style.boxShadow = "1px 8px 10px black";

increaseButton.style.fontSize = "17px";
increaseButton.style.margin = "14px 0";
increaseButton.style.backgroundColor = "#0C2C53";
increaseButton.style.boxShadow = "1px 5px 10px black";
increaseButton.style.color = "#ffffff";
increaseButton.style.padding = "12px";
increaseButton.style.border = "0 solid black";
increaseButton.style.borderRadius = "3px";

decreaseButton.style.fontSize = "17px";
decreaseButton.style.margin = "14px 0";
decreaseButton.style.backgroundColor = "#0C2C53";
decreaseButton.style.boxShadow = "1px 5px 10px black";
decreaseButton.style.color = "#ffffff";
decreaseButton.style.padding = "12px";
decreaseButton.style.border = "0 solid black";
decreaseButton.style.borderRadius = "3px";

counterDisplay.style.margin = "14px 0";
counterDisplay.style.color = "#44aa44";
counterDisplay.style.fontSize = "55px";

message.style.margin = "14px 0";
message.style.color = "#ffffff";

div.appendChild(message);
div.appendChild(counterDisplay);
div.appendChild(increaseButton);
div.appendChild(decreaseButton);
body.appendChild(div);
