"use strict";
var body = document.querySelector("body");
body.style.height = "100%";
body.style.fontSize = "20px";
var hexDiv = document.createElement("div");
hexDiv.style.display = "flex";
hexDiv.style.flexFlow = "row wrap";
hexDiv.style.justifyContent = "center";
hexDiv.style.alignItems = "center";
hexDiv.style.width = "100%";
hexDiv.style.marginTop = "4%";
var hexPrefix = document.createElement("span");
hexPrefix.innerText = "HEX COLOR: #";
var hexColor = document.createElement("span");
hexColor.innerText = "5555AA";
hexColor.contentEditable = "true";
hexColor.style.outline = "none";
body.style.backgroundColor = "#ffffff";
var flexLineBreak = document.createElement("hr");
flexLineBreak.style.flexBasis = "100%";
flexLineBreak.style.height = "0";
flexLineBreak.style.margin = "0 3px 0 3px 0";
flexLineBreak.style.border = "0";
var hexButton = document.createElement("button");
hexButton.style.backgroundColor = "#555";
hexButton.style.color = "#fff";
hexButton.style.fontSize = "20px";
hexButton.type = "button";
hexButton.innerText = "CLICK ME";
hexButton.addEventListener("click", function () {
    body.style.backgroundColor = "#" + hexColor.innerText;
    body.style.touchAction = "pan-x pan-y";
    setTimeout(function () { return hexColor.focus(); }, 10); // contentEditable focus fix
});
window.addEventListener("focus", function () {
    body.style.touchAction = "pan-x pan-y";
});
hexDiv.appendChild(hexPrefix);
hexDiv.appendChild(hexColor);
hexDiv.appendChild(flexLineBreak);
hexDiv.appendChild(hexButton);
body.appendChild(hexDiv);
