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
	fmp.handlers = {
		onSieveChange: function(e){
			fmp.gInstance.setMethod(parseInt(e.target.value));
		},
		onButtonClick: function(){
			if (fmp.gInstance.getMethod() == 3){
				alert("This feature hasn't been implemented yet!")
				return;
			}

			// get multiplication matrix by chaining generator's functions together and render it
			fmp.gInstance.getMatrix(
				fmp.gInstance.getPrimeNumbers(parseInt(fmp.UserInput.value))
			);
			
			// update time it took
			fmp.RenderTime.innerHTML = fmp.gInstance.getSieve().time+"ms";
		}
	}
	Array.prototype.forEach.call(fmp.SieveItems, function(item){
		item.addEventListener("change", fmp.handlers.onSieveChange);
	});
	fmp.UserButton.addEventListener("click", fmp.handlers.onButtonClick);

})();