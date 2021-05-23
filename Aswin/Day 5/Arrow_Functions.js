function modifyArray(nums) {
    return nums.map(num => num % 2 == 0 ? num * 2 : num * 3);
}

var nums = [2,3,4,5,9];

console.log(modifyArray(nums));