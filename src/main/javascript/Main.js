(function(){
	"use strict";
	var fmp = window.fmp || {}

	// get used items
	fmp.UserInput = document.querySelector("#userInput");
	fmp.UserButton = document.querySelector("button.action");
	fmp.SieveItems = document.querySelectorAll("input[type=radio]");
	fmp.RenderElement = document.querySelector(".renderer");
	fmp.RenderTime = document.querySelector(".timeItTook");

	// setup generator and handlers
	fmp.gInstance = new fmp.Generator({
		usedMethod: 0,
		sieveList: [
			fmp.actors.Classic,
			fmp.actors.Advanced,
			fmp.actors.Best
		]
	});

	// really basic renderer
	fmp.matrixRenderer = function(matrix){
		var s = "<table>"
		matrix.map(function(row,index){
			s += "<tr>"
			row.reduce(function(_sol, item){
				s += "<td>"+(item || "&nbsp;")+"</td>"
			}, s)
			s +="</tr>";
		});
		return s+"</table>";
	}
	fmp.handlers = {
		onSieveChange: function(e){
			fmp.gInstance.setMethod(parseInt(e.target.value));
		},
		onValueChange: function(){
			if (fmp.gInstance.getMethod() == 3){
				alert("This feature hasn't been implemented yet!")
				return;
			}


			// get multiplication matrix by chaining generator's functions together and render it...
			// as a best practice this function should respect the S from SOLID principle and 
			// should trigger an event and the renderer would do the "heavy lifting"
			// but since we don't have a renderer, we'll just call a function with the given value
			var solution = fmp.matrixRenderer(fmp.gInstance.getMatrix(
				fmp.gInstance.getPrimeNumbers(parseInt(fmp.UserInput.value))
			));

			// update with solution
			fmp.RenderElement.innerHTML = solution;
			
			// update time it took
			fmp.RenderTime.innerHTML = fmp.gInstance.getSieve().time+"ms";
		}
	}
	Array.prototype.forEach.call(fmp.SieveItems, function(item){
		item.addEventListener("change", fmp.handlers.onSieveChange);
	});


	fmp.UserButton.addEventListener("click", fmp.handlers.onValueChange);
	fmp.UserInput.addEventListener("change", fmp.handlers.onValueChange);
})();