(function(){
	"use strict"
	
	var fmp = window.fmp || {};
	fmp.actors = fmp.actors || {};

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
	
	fmp.actors.BaseActor = fn;
	window.fmp = fmp;
})();