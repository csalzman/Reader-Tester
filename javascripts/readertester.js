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