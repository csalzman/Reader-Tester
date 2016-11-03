var textToRead = document.querySelector("#textToRead");

//Called from the font-family dropdown onChange
function fontFamilyChange(elementTriggered) {
	//Find the appropriate text and change the fontFamily to the value that's selected
	textToRead.style.fontFamily = elementTriggered.value;
}

//Called when font-size is changed
function fontSizeChange(elementTriggered) {
	//Find the appropriate text and change the fontFamily to the value that's selected
	textToRead.style.fontSize = elementTriggered.value;
}

//Toggle underline
function underlineToggle(elementTriggered) {
	//Find the appropriate text and change the fontFamily to the value that's selected
	if(elementTriggered.checked) {
		textToRead.style.textDecoration = "underline";	
	}
	else {
		textToRead.style.textDecoration = "none";
	}
}

//When the color option dropdown is changed
function colorChange(elementTriggered) {
	switch(elementTriggered.value) {
		case "whiteBlack":
			textToRead.style.color = "white";
			textToRead.style.background = "black"
		break;
		case "blackWhite":
			textToRead.style.color = "black";
			textToRead.style.background = "white"
		break;
		case "yellowBlack":
			textToRead.style.color = "yellow";
			textToRead.style.background = "black"
		break;
		case "blackYellow":
			textToRead.style.color = "black";
			textToRead.style.background = "yellow"
		break;				
		default:
			textToRead.style.color = "black";
			textToRead.style.background = "white"
		break;
	}
}

//Ugly timer functions
//TODO: clean this up to use one button
var timer;
var finishedTime;

function startTimer() {
	timer = Date.now();
}

function stopTimer() {
	finishedTime = new Date(Date.now() - timer);
	document.querySelector("#timerText").innerHTML = finishedTime.getSeconds() + " seconds";
}

//Change Text
function textChange() {
	textToRead.innerHTML = textBlocks[Math.floor(Math.random()*textBlocks.length)];
}

function textSelection(elementTriggered) {
	for(i = 0; i < jsonText.options.length; i++) {
		if(elementTriggered.value == jsonText.options[i].name) {
			textToRead.innerHTML = jsonText.options[i].text;	
		}
	}
}

function verticalToggle(elementTriggered) {
	//Get the currently selected text
	var textSelection = document.querySelector("#textSelection");

	//If it's true we'll strip out the commas and make it one per line
	if(elementTriggered.checked) {
		for(i = 0; i < jsonText.options.length; i++) {
			if(textSelection.value == jsonText.options[i].name) {
				textToRead.innerHTML = jsonText.options[i].text.replace(/,/g, "<br/>");	
			}
		}
	}
	//If false we'll add the commas and remove the breaks
	else {
		for(i = 0; i < jsonText.options.length; i++) {
			if(textSelection.value == jsonText.options[i].name) {
				textToRead.innerHTML = jsonText.options[i].text.replace(/\<br\/\>/g, ",");	
			}
		}
	}
}

//Fill in text from the json
(function () {
	var textSelection = document.querySelector("#textSelection");
	for(i = 0; i < jsonText.options.length; i++) {
		textSelection.innerHTML += "<option value=\"" + jsonText.options[i].name + "\">" + jsonText.options[i].name + "</option>";
	}
})();
