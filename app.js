const inputText = document.querySelector("#inputText")
const inputBtn = document.querySelector("#inputBtn")
const outputDiv = document.querySelector("#outputSection")

const url = "https://api.funtranslations.com/translate/minion.json"

function getTranslated(text) {
    return url + "?"+"text="+ text
}

function addText() {
    
    const outputText = document.createElement("h2")
    const textInput = inputText.value;

    fetch(getTranslated(textInput))
    .then(response => response.json())
    .then(json => {
        const translatedText = json.contents.translated;
        outputText.innerHTML = translatedText;
        outputDiv.appendChild(outputText)
    }) 
}
inputBtn.addEventListener('click', () => addText())


