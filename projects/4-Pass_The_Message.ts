const body = document.querySelector("body") as HTMLBodyElement;
const div = document.createElement("div") as HTMLDivElement;
const spanTitle = document.createElement("span") as HTMLSpanElement;
const textInput = document.createElement("input") as HTMLInputElement;
const submitButton = document.createElement("button") as HTMLButtonElement;
const spanInfo = document.createElement("span") as HTMLSpanElement;
const deliveredMessage = document.createElement("span") as HTMLSpanElement;

spanTitle.innerText = "A Message You Would Like To Pass";
textInput.type = "text";
submitButton.innerText = "Submit";
submitButton.type = "button";
spanInfo.innerText = "Last Message Delivered";

submitButton.addEventListener("click", () => {
  deliveredMessage.innerText = textInput.value;
});

div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.flexDirection = "column";
div.style.backgroundColor = "#eeeeee";
div.style.width = "80%";
div.style.height = "10%";
div.style.maxHeight = "700px";
div.style.minHeight = "200px";
div.style.maxWidth = "1100px";
div.style.minWidth = "400px";

body.style.backgroundColor = "#94b8d0";
body.style.width = "100%";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

spanTitle.style.margin = "3px 0 3px 0";
textInput.style.margin = "3px 0 3px 0";
submitButton.style.margin = "3px 0 3px 0";
spanInfo.style.margin = "3px 0 3px 0";
deliveredMessage.style.margin = "3px 0 3px 0";

submitButton.style.backgroundColor = "#94b8d0";
submitButton.style.color = "#ffffff";
deliveredMessage.style.color = "#94b8d0";


div.appendChild(spanTitle);
div.appendChild(textInput);
div.appendChild(submitButton);
div.appendChild(spanInfo);
div.appendChild(deliveredMessage);
body.appendChild(div);


