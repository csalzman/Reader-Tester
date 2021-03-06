var textToRead = document.querySelector("#textToRead");

//Called from the font-family dropdown onChange
function fontFamilyChange(fontFamilyName) {
	//Find the appropriate text and change the fontFamily to the value that's selected
	textToRead.style.fontFamily = fontFamilyName;
}

//Called when font-size is changed
function fontSizeChange(fontSizeInt) {
	//Find the appropriate text and change the fontFamily to the value that's selected
	textToRead.style.fontSize = fontSizeInt;
}

//Toggle underline
function underlineToggle(underlineToggle) {
	//UnderlineInput
	var underlineInput = document.getElementById("underlineToggle");
	//Find the appropriate text and change the fontFamily to the value that's selected
	if(underlineToggle) {
		textToRead.style.textDecoration = "underline";
		underlineInput.checked = true;
	}
	else {
		textToRead.style.textDecoration = "none";
		underlineInput.checked = false;
	}
}

//Watch for underLine Toggle getting clicked
document.getElementById('underlineToggle').onclick = function() { 
	underlineToggle(this.checked)
};

//When the color option dropdown is changed
function colorChange(colorOptionValue) {
	switch(colorOptionValue) {
		case "whiteBlack":
			textToRead.style.color = "white";
			textToRead.style.background = "black";
		break;
		case "blackWhite":
			textToRead.style.color = "black";
			textToRead.style.background = "white";
		break;
		case "yellowBlack":
			textToRead.style.color = "yellow";
			textToRead.style.background = "black";
		break;
		case "blackYellow":
			textToRead.style.color = "black";
			textToRead.style.background = "yellow";
		break;				
		default:
			textToRead.style.color = "black";
			textToRead.style.background = "white";
		break;
	}
}

//Ugly timer functions
var timer;
var finishedTime;

//Used to toggle state
var timerRunning = false;

function toggleTimer() {
	if(!timerRunning) {
		timer = Date.now();
		document.querySelector("#timerText").innerHTML = "Counting";
		timerRunning = true;
	}
	else {
		finishedTime = new Date(Date.now() - timer);
		document.querySelector("#timerText").innerHTML = finishedTime.getSeconds() + " seconds";
		timerRunning = false;
	}
}

function textSelection(textSelectionValue) {
	for(i = 0; i < jsonText.options.length; i++) {
		if(textSelectionValue == jsonText.options[i].name) {
			textToRead.innerHTML = jsonText.options[i].text;	
		}
	}

	verticalToggle(document.querySelector("#verticalText").checked);
}

function verticalToggle(verticalToggle) {
	//Get the currently selected text
	var textSelection = document.querySelector("#textSelection");

	//If it's true we'll strip out the commas and make it one per line
	if(verticalToggle) {
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

function testTesting(boolean) {
	if(boolean) {
		return "woo";
	}
	else {
		return "no";
	}
}

//When we load the page fill in the rest of the options for text selection
//This is based on the json file textBlocks.js
(function () {
	var textSelection = document.querySelector("#textSelection");
	for(i = 0; i < jsonText.options.length; i++) {
		textSelection.innerHTML += "<option value=\"" + jsonText.options[i].name + "\">" + jsonText.options[i].name + "</option>";
	}
})();
