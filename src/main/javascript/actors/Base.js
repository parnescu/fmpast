(function(){
	"use strict"

	/**
		Base class for all our generator actors
		@constructor
		@param id {number}
	*/
	var fn = function(id){
		this.id_ = id;
		this.timeItTookToGenerate_ = 0;

		return {
			id: this.id_
			,generate: this.generateItems_
			,time: this.timeItTookToGenerate_
		}	
	}
	
	fn.prototype.generateItems_ = function(){
		return null;
	}
	
	window.BaseActor = fn;
})()