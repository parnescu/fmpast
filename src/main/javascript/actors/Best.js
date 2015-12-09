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
		// this is a very complicated algorithm to generate
		// https://en.wikipedia.org/wiki/Sieve_of_Atkin
		// it kinda defeats the purpose of this test to mindlessly
		// churn so much time trying to get a working version out
	}

	fmp.actors.Best = new fn(3)
	window.fmp = fmp;
})();