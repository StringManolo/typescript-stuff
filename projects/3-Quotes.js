"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var div = document.createElement("div");
var quote = document.createElement("quote");
var author = document.createElement("span");
var body = document.querySelector("body");
var generateQuoteButton = document.createElement("button");
generateQuoteButton.innerText = "Generate Quote";
body.style.width = "100%";
body.style.height = "100%";
// @ts-igno
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
var generateQuote = function () { return __awaiter(void 0, void 0, void 0, function () {
    var quoteAPIResponse, quoteJSON, quoteText, quoteAuthor;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")];
            case 1:
                quoteAPIResponse = _a.sent();
                return [4 /*yield*/, quoteAPIResponse.json()];
            case 2:
                quoteJSON = _a.sent();
                if ((quoteJSON === null || quoteJSON === void 0 ? void 0 : quoteJSON.statusCode) === 200 && (quoteJSON === null || quoteJSON === void 0 ? void 0 : quoteJSON.data)) {
                    quoteText = quoteJSON.data[0].quoteText;
                    quoteAuthor = quoteJSON.data[0].quoteAuthor;
                    quote.innerText = "\"" + quoteText + "\"";
                    author.innerText = quoteAuthor.toUpperCase();
                }
                return [2 /*return*/];
        }
    });
}); };
generateQuoteButton.addEventListener("click", function () {
    generateQuote();
});
generateQuote();
