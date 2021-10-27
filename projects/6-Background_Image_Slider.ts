const body = document.body as HTMLBodyElement;
const slider = document.createElement("div") as HTMLDivElement;
const positionDiv = document.createElement("div") as HTMLDivElement;
const leftButton = document.createElement("button") as HTMLButtonElement;
const rightButton = document.createElement("button") as HTMLButtonElement;

leftButton.innerText = "<";
rightButton.innerText = ">";

body.style.backgroundColor = "#ffffdd";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.width = "100%";
body.style.height = "100vh";

slider.style.border = "2px solid #8888ee";
slider.style.width = "80%";
slider.style.height = "60%";
slider.style.display = "flex";
slider.style.alignItems = "center";
slider.style.backgroundSize = "cover";
slider.style.backgroundPosition = "center";

positionDiv.style.display = "flex";
positionDiv.style.justifyContent = "space-between";
positionDiv.style.alignItems = "center";
positionDiv.style.backgroundColor = "#ff8888";
positionDiv.style.width = "calc(80% + 37.5px)"; //todo: calc div.width + buttons.width
positionDiv.style.position = "absolute";
positionDiv.style.margin = "auto";
positionDiv.style.left = "16px"; // half of extra width - weird error ratio on math ?
positionDiv.style.right = "0";
positionDiv.style.backgroundColor = "rgba(0, 0, 255, 0)";

leftButton.style.backgroundColor = "#8888ee";
leftButton.style.color = "#ffffff";
leftButton.style.fontSize = "30px";
leftButton.style.padding = "8px";
leftButton.style.borderRadius = "4px";

rightButton.style.backgroundColor = "#8888ee";
rightButton.style.color = "#ffffff";
rightButton.style.fontSize = "30px";
rightButton.style.padding = "8px";
rightButton.style.borderRadius = "4px";

const arrayOfImages = ["./resources/slider_1.jpg", "./resources/slider_2.jpg", "./resources/slider_3.jpg", "./resources/slider_4.jpg", "./resources/slider_5.jpg"];
let arrayIndex = 0;

const updateSliderBackground = (index: number, imgs: string[]) => slider.style.backgroundImage = `url("${imgs[index]}")`;

leftButton.addEventListener("click", () => {
  if (arrayIndex > 0) {
    updateSliderBackground(--arrayIndex, arrayOfImages);
  }
});

rightButton.addEventListener("click", () => {
  if ( arrayIndex < (arrayOfImages.length - 1) ) {
    updateSliderBackground(++arrayIndex, arrayOfImages);
  }
});

positionDiv.appendChild(leftButton);
positionDiv.appendChild(rightButton);
slider.appendChild(positionDiv);
body.appendChild(slider);
