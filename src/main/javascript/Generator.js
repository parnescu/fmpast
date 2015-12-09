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
			,getMatrix: this.getMultiplicationMatrix_.bind(this)
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
			this.generator_ = this.sieves_[this.usedMethod_-1];
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

	/**
		generate multiplication matrix
		@param {Array<number>} primes
		@return {Array<Array<number>>}
	*/
	fn.prototype.getMultiplicationMatrix_ = function(primes){
		if (!primes || !primes.length){
			return null;
		}

		var row = [0].concat(primes), i, j, matrix = [];
		matrix.push(row);

		// generate columns
		row.map(function(element, index){ 
			if (index>0){ 
				matrix[0,index] = [element];
			}
		})

		// generate rest of the matrix
		for (i=1;i<row.length;i++){
			for (j=1;j<row.length;j++){
				matrix[j,i].push(row[i]*row[j]);
			}
		}
		return matrix;
	}

	fmp.Generator = fn;
	window.fmp = fmp;
})();