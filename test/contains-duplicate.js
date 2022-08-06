import containsDuplicate from "../arrays-and-hashing/contains-duplicate.js";
import {expect, should} from 'chai';

describe('contains duplicate', function(){
    context('with arguments that contains duplicates', function(){
        it('should return true', function() {
            expect(containsDuplicate([1,2,3,1])).to.equal(true)
        })
    });

    context('with arguments that contains no duplicates', function(){
        it('should return false', function(){
            expect(containsDuplicate([1,2,3,4])).to.equal(false)
        })
    });
})
