/*
function productExceptSelf(nums) {
    //brute force approcah -- does not pass test case when we have 0 as in put
   const prod = nums.reduce((callback, currentVal) => callback * currentVal);
   return  Array.from(nums, num => prod/num);

}
*/


//0(n2) time complexity
/*function productExceptSelf(nums){
    let res = [];
    for (let index = 0; index < nums.length; index++) {
        let prod = 1;
        for (let j = 0; j < nums.length; j++) {
           if(index !== j){
            prod *= nums[j]
           }
        }
        res.push(prod);
    }
    return res;
}
*/

//Optimal solutiom
//pre-fix:  [1,1,2,6]
//post-fix: [24,12,4,1]
//anser:   [24,12,8,6]


//Time complexity: 0(n)
function productExceptSelf(nums){
    let products = [];
    let productOfPreviousElements = 1;
    for (let i = 0; i < nums.length; i++){
        products[i] = productOfPreviousElements;
        productOfPreviousElements *= nums[i];
    }

    product = 1;
    for (let j = nums.length - 1; j >= 0; j--){
        products[j] *= productOfPreviousElements;
        productOfPreviousElements *= nums[j];
    }

    return products;
}

console.log(productExceptSelf([1,2,3,4]))
