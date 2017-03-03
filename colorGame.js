var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorToShow = document.getElementById("colorToShow");
var resultDisplay = document.getElementById("result");
var resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", reset);

init();

function init() {
	setupPlayMode();
	setupSquares();
	reset();
}

function setupPlayMode() {
	
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var squareColor = this.style.background;
			if(squareColor === pickedColor){
				resultDisplay.textContent = "Correct";
				resetBtn.textContent = "Play Again?";
			} else{
				resultDisplay.textContent = "Try again!!";
				this.style.background = "#232323";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors();
	pickedColor = pickRandomColor();
	colorToShow.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	resultDisplay .textContent = "";
	
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}		
	}
}

function generateRandomColors(){
	var arr = []
		//repeat num times
	for(var i = 0; i < 6; i++){
			//get random color and push into arr
			arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickRandomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
