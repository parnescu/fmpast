(function(){
	"use strict"
	
	var fmp = window.fmp || {};
	fmp.actors = fmp.actors || {};

	/**
		@constructor
		@param id {number}
	*/
	var fn = function(id){
		fmp.actors.BaseActor.call(this, id)
		
		return {
			id: this.id_
			,generate: this.generateItems_
			,isPrime : this.numberIsPrime_
			,time: this.timeItTookToGenerate_
		}
	}
	fn.prototype = Object.create(fmp.actors.BaseActor.prototype)

	/**
		Basic method that checks if a number is prime
		I'm sure there's a better way of doing it out there in the wild
		@param n {number} 
	*/	
	fn.prototype.numberIsPrime_ = function(n){
		// eliminate solution if invalid
		if (!n || n < 2) { return false; }

		// check all divisors
		for ( var i = 2; i < n; i++ ) {
            if ( n % i === 0 ) { return false;}
        }

        // no divisors, it's a prime number
        return true;
	}

	/**
		how many prime numbers we want to generate
		@param nr {number} 
	*/
	fn.prototype.generateItems_ = function(nr){
		var generatedItems = 0,
			currentNumber = 2,
			stack = [];

		// based on the used browser this will need
		// to have o pollyfill or we could use new Date().getTime()
		this.time = Date.now();

		while(generatedItems < nr){
			if (this.isPrime(currentNumber)){
				stack.push(currentNumber)
				generatedItems++;
			}
			currentNumber++;
		}
		this.time = Date.now() - this.time;
		return stack;
	}

	fmp.actors.Classic = new fn(1);
	window.fmp = fmp;
})();