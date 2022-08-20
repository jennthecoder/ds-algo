/**
 Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 */

/*
    output: return true if target is in the metric, false otherwise
    0. initialize loop for i =  0  i < array length; (represent each row in the metrix)
    1. initialize leftPointer && rightPointer
    2. find midPointer;
    3. Inner loop:
        - if terget > last element in the row, break out of loop
        - else perform binary search and return true when target is found
    4.otherwise return false
 */


//O(n logn)
/*
function searchMatrix(matrix, target) {
    for (let row = 0; row < matrix.length; row++) {
        const numbers = matrix[row];
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;
        let midPointer = Math.floor((leftPointer + rightPointer)/2);
        while(leftPointer <= rightPointer){
            let lastNumber = numbers[rightPointer]
            if(target > lastNumber){
                break;
            }
            if(target <= lastNumber){
                if(target === numbers[midPointer]) return true;
                if(target > numbers[midPointer]){
                    leftPointer = midPointer + 1;
                }
                if(target < numbers[midPointer]){
                    rightPointer = midPointer - 1;
                }
                midPointer = Math.floor((leftPointer + rightPointer)/2)
            }
        }
    }
    return false;
}
*/

/*
    1. find rows
    2. find columns
    3. initialize left and right pointers. left pointer has to be the total number of elements in the metrix
    4. perform binary search with  midIndex => ((left + right)/2) and midVal row = midIndex/cols cols = midIndex % cols

 */

//0(logmn); m= rows n=cols
var searchMatrix = function(matrix, target) {
    let rows =  matrix.length;
    let cols = matrix[0].length;
    let leftPointer = 0;
    let rightPointer = rows * cols - 1;
9
    while(leftPointer <= rightPointer){
        let midIndex = Math.floor((rightPointer + leftPointer)/2)
        let midVal = matrix[Math.floor(midIndex/cols)][midIndex % cols]

        if( midVal === target) return true;
        if(target > midVal){
            leftPointer = midIndex + 1;
        }else {
            rightPointer = midIndex - 1;
        }
    }
    return false;

}


console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 23))
