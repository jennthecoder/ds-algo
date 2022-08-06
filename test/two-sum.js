import {expect, should} from 'chai';
import twoSum from '../arrays-and-hashing/two-sum.js';

describe('twoSum' , function(){
    context('with target equals to 9', function(){
        it('should return an array with indexes', function() {
            expect(twoSum([2,7,11,15], 9)).to.equal([0, 1]);
        })
        it('should return an array with indexes for elements not in front of the array', function() {
            expect(twoSum([15,2,11,7], 9)).to.equal([1, 3]);
        })
    });

    context('should return warning string when sum is not found', function(){
        it('should return string', function(){
            expect(twoSum([1,2,3,4], 2)).to.equal("sum does not exist");
        });
    });

})
