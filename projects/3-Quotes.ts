const div = document.createElement("div") as HTMLDivElement;
const quote = document.createElement("quote") as HTMLQuoteElement;
const author = document.createElement("span") as HTMLSpanElement;
const body = document.querySelector("body") as HTMLBodyElement;
const generateQuoteButton = document.createElement("button") as HTMLButtonElement;
generateQuoteButton.innerText = "Generate Quote";

body.style.width = "100%";
body.style.height = "100%";
// @ts-ignore
body.style.textSizeAdjust = "none";
body.style.fontSize = "24px";
body.style.display = "flex";
body.style.justifyContent = "center";

div.style.border = "10px solid #886666";
div.style.padding = "12px";
div.style.backgroundColor = "#eedddd";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.width = "60%";
div.style.maxWidth = "650px";

generateQuoteButton.style.marginBottom = "1em";
generateQuoteButton.style.backgroundColor = "#00cccc";
generateQuoteButton.style.color = "#ffffff";
generateQuoteButton.style.fontSize = "24px";

quote.style.width = "90%";
quote.style.maxWidth = "650px";
quote.style.color = "gray";
author.style.color = "#00cccc";
author.style.alignSelf = "flex-end";

div.appendChild(generateQuoteButton);
div.appendChild(quote);
div.appendChild(author);
body.appendChild(div);

const generateQuote = async() => {
  const quoteAPIResponse = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");
  const quoteJSON = await quoteAPIResponse.json();
  if (quoteJSON?.statusCode === 200 && quoteJSON?.data) {
    const quoteText = quoteJSON.data[0].quoteText;
    const quoteAuthor = quoteJSON.data[0].quoteAuthor;
    quote.innerText = `"${quoteText}"`;
    author.innerText = quoteAuthor.toUpperCase();
  }
}

generateQuoteButton.addEventListener("click", () => {
  generateQuote();
});

generateQuote();

