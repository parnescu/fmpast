(function(){
	"use strict"
	var fmp = window.fmp || {};

	/**
		@constructor
		@param {Object<String,*>} data
	*/
	var fn = function(data){
		data = data || {};
		this.sieves_ = data.sieveList || []
		this.usedMethod_ = data.usedMethod || 1;

		this.methods_ = {
			CLASSIC: 1,
			ERATOSTHENES: 2,
			ATKIN: 3
		}
		this.setGeneratingMethod_(this.usedMethod_)
	
		return{
			method: this.methods_
			,getSieve: this.getGenerator_.bind(this)
			,getPrimeNumbers: this.getPrimes_.bind(this)
			,setMethod: this.setGeneratingMethod_.bind(this)
			,getMethod: this.getGeneratingMethod_.bind(this)

		}
	}

	/**
		returns prime numbers from selected generator
		@param {number} items
	*/
	fn.prototype.getPrimes_ = function(items){
		return items ? this.generator_.generate(items) : null;
	}
	/**
		shows currently used sieve
		@return {number}
	*/
	fn.prototype.getGeneratingMethod_ = function(numberOfItems){
		return this.usedMethod_
	}
	/**
		sets currently used sieve
		@param {number} method
	*/
	fn.prototype.setGeneratingMethod_ = function(method){
		var isValid = false;
		for(var ii in this.methods_){
			if (this.methods_[ii] === method){
				isValid = true;
			}
		}
		if (isValid){
			this.usedMethod_ = method;
			this.generator_ = this.sieves_[this.usedMethod_]	
		}			
		return isValid;
	}
	/**
		exposes currently used generator
		@return {fmp.BaseActor}
	*/
	fn.prototype.getGenerator_ = function(){
		return this.generator_;
	}

	fmp.Generator = fn;
	window.fmp = fmp;
})();