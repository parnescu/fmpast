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
			,time: this.timeItTookToGenerate_
		}
	}
	fn.prototype = Object.create(fmp.actors.BaseActor.prototype)

	/**
		how many prime numbers we want to generate
		@param nr {number} 
	*/
	fn.prototype.generateItems_ = function(nr){
		this.time = Date.now();

		// generate a pool of numbers
		var primes = [], numbers= [], i;
		for (i = 2;i<=nr*6;i++){ numbers.push(i)}

		// filter numbers by last added prime until we have no more elements
		while(numbers.length){
			primes.push(numbers.shift())
			numbers = numbers.filter(function(i){
				return i%primes[primes.length-1]!=0
			})
		}

		this.time = Date.now() - this.time;
		return primes.slice(0,nr)
	}

	fmp.actors.Advanced = new fn(2);
	window.fmp = fmp;
})();