/*
1. Ensure array is sorted
2. Set start and end pointer
3. Find middle index and middle element
4. iterate through the array
    - if target = middle return middle index;
    - if target > middle element, start = middle + 1
    - if target < middle element, end = middle - 1
    - if none of the prev condition apply, reassign middle index considering the new left and right pointers
5. Return -1 if the target element is not in the array
*/

//Time complexity = 0(log n);
function binarySearch (numbers, target) {
    let [leftPointer, rightPointer] = [0, numbers.length-1];
    let midPointer = Math.floor((leftPointer + rightPointer)/2);
    while(leftPointer <= rightPointer){
        let middleNum = numbers[midPointer];
        if(target > middleNum){
            leftPointer = midPointer + 1
        }else if(target < middleNum){
            rightPointer = midPointer - 1
        }else{
            return midPointer;
        }
        midPointer = Math.floor((leftPointer + rightPointer)/2);
    }
    return -1;
}

console.log(binarySearch([-1,0,3,5,9,12],9))
