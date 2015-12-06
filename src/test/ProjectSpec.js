"use strict";

var _item, generator, sieve;

describe("Main test suite", function(){
	describe("Bogus test", function(){
		it("make sure everything it works", function(){
			expect(true).toEqual(true)
			expect(1+1).toEqual(2)
		})
	})

	describe("Number generation methods", function(){
		describe("Classic method", function(){
			it("is available", function(){})
			it("has an id", function(){})
			it("can generate prime numbers", function(){})
		})

		describe("Sieve of Eratosthenes method", function(){
			it("is available", function(){})
			it("has an id", function(){})
			it("can generate prime numbers", function(){})
		})

		describe("Sieve of Atkin method", function(){
			it("is available", function(){})
			it("has an id", function(){})
			it("can generate prime numbers", function(){})
		})
	})

	describe("Number Generator class", function(){
		beforeEach(function(){
			generator = new Generator()
		})
		it("is available", function(){
			expect(generator).toBeDefined()
			expect(generator).not.toBeNull()
		})
		it("can generate prime numbers", function(){
			expect(generator.getPrimeNumbers).toBeDefined()
			expect(generator.getPrimeNumbers()).toBeNull()
			expect(generator.getPrimeNumbers(NaN)).toBeNull()

			// expect(generator.getPrimeNumbers(1)).toEqual([2])
			// expect(generator.getPrimeNumbers(2)).toEqual([2,3])
			// expect(generator.getPrimeNumbers(3)).toEqual([2,3,5])
		})

		it("can show which method is using when generating", function(){
			expect(generator.getMethod).toBeDefined()
			// default method is the CLASSIC one
			expect(generator.getMethod()).toEqual(1)
		})

		it("has generating methods is available", function(){
			expect(generator.method).toBeDefined()
			expect(generator.method.CLASSIC).toBeDefined()
			expect(generator.method.CLASSIC).toEqual(1)
			expect(generator.method.ERATOSTHENES).toBeDefined()
			expect(generator.method.ERATOSTHENES).toEqual(2)
			expect(generator.method.ATKIN).toBeDefined()
			expect(generator.method.ATKIN).toEqual(3)
		})
		
		it("can switch between generation methods", function(){
			expect(generator.setMethod).toBeDefined()
			expect(generator.setMethod()).toBeFalsy()
			expect(generator.setMethod(23423)).toBeFalsy()
			expect(generator.setMethod("")).toBeFalsy()
			expect(generator.setMethod("0")).toBeFalsy()
			expect(generator.setMethod("NaN")).toBeFalsy()

			expect(generator.setMethod(generator.method.CLASSIC)).toBeTruthy()
			expect(generator.getMethod()).toEqual(1)
			expect(generator.setMethod(generator.method.ERATOSTHENES)).toBeTruthy()
			expect(generator.getMethod()).toEqual(2)
			expect(generator.setMethod(generator.method.ATKIN)).toBeTruthy()
			expect(generator.getMethod()).toEqual(3)

		})
	})
})