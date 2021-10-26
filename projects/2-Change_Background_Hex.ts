const body = document.querySelector("body") as HTMLBodyElement;
body.style.height = "100%";
body.style.fontSize = "20px";

const hexDiv = document.createElement("div") as HTMLDivElement;

hexDiv.style.display = "flex";
hexDiv.style.flexFlow = "row wrap";
hexDiv.style.justifyContent = "center";
hexDiv.style.alignItems = "center";
hexDiv.style.width = "100%";
hexDiv.style.marginTop = "4%";

const hexPrefix = document.createElement("span") as HTMLSpanElement;
hexPrefix.innerText = "HEX COLOR: #";

const hexColor = document.createElement("span") as HTMLSpanElement;
hexColor.innerText = "5555AA"; 
hexColor.contentEditable = "true";
hexColor.style.outline = "none";
body.style.backgroundColor = "#ffffff";

const flexLineBreak = document.createElement("hr") as HTMLHRElement;
flexLineBreak.style.flexBasis = "100%";
flexLineBreak.style.height = "0";
flexLineBreak.style.margin = "0 3px 0 3px 0";
flexLineBreak.style.border = "0";

const hexButton = document.createElement("button") as HTMLButtonElement;
hexButton.style.backgroundColor = "#555";
hexButton.style.color = "#fff";
hexButton.style.fontSize = "20px";
hexButton.type = "button";
hexButton.innerText = "CLICK ME";
hexButton.addEventListener("click", () => {
  body.style.backgroundColor = "#" + hexColor.innerText;
  body.style.touchAction = "pan-x pan-y";
  setTimeout( () => hexColor.focus(), 10); // contentEditable focus fix
});

window.addEventListener("focus", () => {
  body.style.touchAction = "pan-x pan-y";
});


hexDiv.appendChild(hexPrefix);
hexDiv.appendChild(hexColor);
hexDiv.appendChild(flexLineBreak);
hexDiv.appendChild(hexButton);
body.appendChild(hexDiv);

