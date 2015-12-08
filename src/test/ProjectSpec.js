"use strict";

var _item, generator, sieve;

var prime1 = [2],
	prime2 = [2,3],
	prime3 = [2,3,5],
	prime5 = [2,3,5,7,11],
	prime100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541],
	prime168 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];

describe("Main test suite", function(){
	describe("Bogus test", function(){
		it("make sure everything it works", function(){
			expect(true).toEqual(true)
			expect(1+1).toEqual(2)
		})
	})

	describe("Sieves", function(){
		describe("Classic", function(){
			beforeEach(function(){
				sieve = fmp.actors.Classic;
			})
			it("is available", function(){
				expect(sieve).toBeDefined()
			})
			it("has an id", function(){
				expect(sieve.id).toBeDefined()
				expect(sieve.id).toEqual(1)
			})
			it("can generate prime numbers", function(){
				expect(sieve.generate).toBeDefined()

				expect(sieve.generate(1)).toEqual(prime1)
				expect(sieve.generate(2)).toEqual(prime2)
				expect(sieve.generate(3)).toEqual(prime3)
				expect(sieve.generate(5)).toEqual(prime5)
				expect(sieve.generate(100)).toEqual(prime100)
				expect(sieve.generate(168)).toEqual(prime168)
			})
		})

		describe("Sieve of Eratosthenes method", function(){
			beforeEach(function(){
				sieve = fmp.actors.Advanced;
			})
			it("is available", function(){
				expect(sieve).toBeDefined()
			})
			it("has an id", function(){
				expect(sieve.id).toBeDefined()
				expect(sieve.id).toEqual(2)
			})
			xit("can generate prime numbers", function(){
				expect(sieve.generate).toBeDefined()

				expect(sieve.generate(1)).toEqual(prime1)
				expect(sieve.generate(2)).toEqual(prime2)
				expect(sieve.generate(3)).toEqual(prime3)
				expect(sieve.generate(5)).toEqual(prime5)
				expect(sieve.generate(100)).toEqual(prime100)
				expect(sieve.generate(168)).toEqual(prime168)
			})
		})

		describe("Sieve of Atkin method", function(){
			beforeEach(function(){
				sieve = fmp.actors.Best;
			})
			it("is available", function(){
				expect(sieve).toBeDefined()
			})
			it("has an id", function(){
				expect(sieve.id).toBeDefined()
				expect(sieve.id).toEqual(3)
			})
			xit("can generate prime numbers", function(){
				expect(sieve.generate).toBeDefined()

				expect(sieve.generate(1)).toEqual(prime1)
				expect(sieve.generate(2)).toEqual(prime2)
				expect(sieve.generate(3)).toEqual(prime3)
				expect(sieve.generate(5)).toEqual(prime5)
				expect(sieve.generate(100)).toEqual(prime100)
				expect(sieve.generate(168)).toEqual(prime168)
			})
		})
	})

	describe("Number Generator class", function(){
		beforeEach(function(){
			generator = new fmp.Generator()
		})
		it("is available", function(){
			expect(generator).toBeDefined()
			expect(generator).not.toBeNull()
		})

		it("can show which method is using when generating", function(){
			expect(generator.getMethod).toBeDefined()
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

		xit("can generate prime numbers", function(){
			expect(generator.getPrimeNumbers).toBeDefined()
			expect(generator.getPrimeNumbers()).toBeNull()
			expect(generator.getPrimeNumbers(NaN)).toBeNull()
			
			expect(generator.getPrimeNumbers(1)).toEqual(prime1)
			expect(generator.getPrimeNumbers(2)).toEqual(prime2)
			expect(generator.getPrimeNumbers(3)).toEqual(prime3)
			expect(generator.getPrimeNumbers(5)).toEqual(prime5)
			expect(generator.getPrimeNumbers(100)).toEqual(prime100)
			expect(generator.getPrimeNumbers(168)).toEqual(prime168)
		})
	})
})