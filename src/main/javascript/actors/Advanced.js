(function(){
	"use strict"
	var fmp = window.fmp || {};
	fmp.actors = fmp.actors || {};

	/**
		@constructor
		@param id {number}
	*/
	var fn = function(id){
		BaseActor.call(this, id)
		
		return {
			id: this.id_
			,generate: this.generateItems_
			,time: this.timeItTookToGenerate_
		}
	}
	fn.prototype = Object.create(BaseActor.prototype)

	/**
		how many prime numbers we want to generate
		@param nr {number} 
	*/
	fn.prototype.generateItems_ = function(nr){
		
	}

	fmp.actors.Advanced = new fn(2);
	window.fmp = fmp;
})()