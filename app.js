var btnTranslate = document.querySelector('#btn-translate');

var inputTxt = document.querySelector('#inputTxt');

var Output = document.querySelector('#output');


var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(text){
        return serverURL + "?"+"text="+text;
}

function clickHandler() {

        var inputValue = inputTxt.value;

        fetch(getTranslationURL(inputValue))
        .then(response => response.json())
        .then(data => {
                output.innerText = data.contents.translated;

        })
        
        

        }

        btnTranslate.addEventListener('click',clickHandler)