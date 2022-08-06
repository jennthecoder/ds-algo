import {expect, should} from 'chai';
import isAnagram from '../arrays-and-hashing/valid-anagram.js';

describe('isAnagram' , function(){
    context('with two strings that are anagrams', function(){
        it('should return true', function() {
            expect(isAnagram("anagram","nagaram")).to.equal(true);
        })
        it('it should return true with unicode characters', function() {
            expect(isAnagram("mo#^t", "to#m^")).to.equal(true);
        })
    });

    context('with two strings that are not anagrams', function(){
        it('should return false', function(){
            expect(isAnagram("rat", "car")).to.equal(false);
        })
        it('it should return false with unicode characters', function() {
            expect(isAnagram("mo#^t", "to:m^")).to.equal(false);
        })
        it('it should return false with s and t of different lengths', function() {
            expect(isAnagram("mouse", "esmu")).to.equal(false);
        })

    });

})
