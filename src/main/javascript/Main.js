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
		sieveList: [fmp.actors.Classic, fmp.actors.Advanced, fmp.actors.Best]
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

			
			console.log("clean render")
			console.log("generate primes for: "+ parseInt(fmp.UserInput.value)+" -> then multiplication matrix")
			console.log("render matrix")
			console.log("update time it took")
		}
	}
	Array.prototype.forEach.call(fmp.SieveItems, function(item){
		item.addEventListener("change", fmp.handlers.onSieveChange);
	});
	fmp.UserButton.addEventListener("click", fmp.handlers.onButtonClick);


	console.log(fmp);

})();