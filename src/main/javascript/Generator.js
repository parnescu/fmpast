(function(){
	"use strict"
	var fmp = window.fmp || {},
	fn = function(data){
		data = data || {};
		this.generators_ = data.generators || []
		this.usedMethod_ = 1;
		this.methods_ = {
			CLASSIC: 1,
			ERATOSTHENES: 2,
			ATKIN: 3
		}
		this.setGeneratingMethod_(this.methods_.CLASSIC)
	
		return{
			method: this.methods_
			,getPrimeNumbers: this.getPrimes_.bind(this)
			,setMethod: this.setGeneratingMethod_.bind(this)
			,getMethod: this.getGeneratingMethod_.bind(this)
		}
	}

	fn.prototype.getPrimes_ = function(items){
		return this.generator_ ? this.generator_.generate(items) : null;	
	}
	fn.prototype.getGeneratingMethod_ = function(numberOfItems){
		return this.usedMethod_
	}
	fn.prototype.getGenerator_ = function(id){
		return this.generators_[this.generators_.indexOf(id)-1]
	}
	fn.prototype.setGeneratingMethod_ = function(method){
		if (!method){
			return false;
		}

		var isValid = false;
		for(var i in this.methods_){
			if (this.methods_[i] === method){
				isValid = true;
				break;
			}
		}

		if (isValid){
			this.usedMethod_ = method;
			this.generator_ = this.getGenerator_(method)
		}

		return isValid
	}

	fmp.Generator = fn;
	window.fmp = fmp;
})()