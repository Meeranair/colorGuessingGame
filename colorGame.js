var colors = [];
var pickedColor;
var numColors = 6;

var squares = document.querySelectorAll(".square");
var colorToShow = document.getElementById("colorToShow");
var resultDisplay = document.getElementById("result");
var resetBtn = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");

resetBtn.addEventListener("click", reset);

init();

function init() {
	setupPlayMode();
	setupSquares();
	reset();
}

function setupPlayMode() {
	for (var i = modeBtns.length - 1; i >= 0; i--) {
		modeBtns[i].addEventListener("click", function(){
			//remove the "selected" class from both the bottons
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");

			this.classList.add("selected");
			if(this.textContent === "Easy") {
				numColors = 3;
			} else {
				numColors = 6;
			}
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var squareColor = this.style.background;
			if(squareColor === pickedColor){
				resultDisplay.textContent = "Correct";
				resetBtn.textContent = "Play Again?";

				for(var i = 0; i < squares.length; i++){
					squares[i].style.background = pickedColor;
				}

			} else{
				resultDisplay.textContent = "Try again!!";
				this.style.background = "#232323";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numColors);
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

function generateRandomColors(num){
	var arr = []
		//repeat num times
	for(var i = 0; i < num; i++){
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
