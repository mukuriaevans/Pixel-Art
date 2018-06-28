// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
(function(document){
	'use strict';
	
	const elements = {
		colorPicker: document.getElementById('colorPicker'), 
		gridCanvas: document.getElementById('pixelCanvas'),
		widthInput: document.getElementById('inputWidth'),
		heightInput: document.getElementById('inputHeight')
	};
	
const init = function(){
// Event Listener
	document.getElementById('sizePicker').addEventListener('submit', makeGrid, false );

// Grid color listner
	elements.gridCanvas.addEventListener('click', setGridColor);
	
};
	function makeGrid() {
// Your code goes here!
		//prevent the page from submiting non-existent back end task 
		//whih would cause the page to refresh
		
		event.preventDefault();
		
		//get a new task
		const gridSize = getGridSize();
		
		//clear canvas
		clearCanvas();
		
		// build each row
		
		for (let row = 0; row < gridSize.numberOfRows; row++){
			let tr = elements.gridCanvas.insertRow(row);
			
			// add a td for this row
			
			for (let col = 0; col < gridSize.numberOfColumns; col++){
				tr.insertCell(col);
			}
		}
		
		
	}
	
	function setGridColor(event){
		let color = elements.colorPicker.value;
		
		event.target.setAttribute('style', 'background-color: ' + color);
	}
	
	function clearCanvas(){
		elements.gridCanvas.innerHTML = '';
	}
	
	function getGridSize(){
		let numberOfRows = elements.heightInput.value;
		let numberOfColumns = elements.widthInput.value;
		
		return {
			numberOfColumns: parseInt(numberOfColumns),
			numberOfRows: parseInt(numberOfRows)
		};
	}
	
	init();
	
}
(document));