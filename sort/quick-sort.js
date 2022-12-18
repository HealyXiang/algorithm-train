function quickSort(nums, start, end) {
    if (start >= end) {
        return
    }
    const mid = partition(nums, start, end)
    quickSort(nums, start, mid - 1)
    quickSort(nums,mid + 1, end)
}

function partition(nums, start, end) {
    let povit = nums[end]
    let i = start - 1;
    for (let j = start; j <= end; j++) {
        if (nums[j] <= povit) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    // [nums[i+1], nums[end]] = [nums[end], nums[i+1]]
    return i
}

var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
}
// var sortArray = function(nums) {
//     if (Array.isArray(nums) && nums?.length <= 1) {
//         return nums
//     }
//     const len = nums.length
//     let povit = nums[len - 1]
//     let i = -1;
//     for (let j = 0; j < len; j++) {
//         if (nums[j] < povit) {
//             i++;
//             [nums[i], nums[j]] = [nums[j], nums[i]]
//             // povitIndex = i;
//         }
//     }
//     // i++;
//     [nums[i+1], nums[len - 1]] = [nums[len - 1], nums[i+1]]
//     let res = []
//     console.log('i:',i)
//     if (i > -1) {
//         console.log('nums.slice(0, i):', nums.slice(0, i+1))
//         res = res.concat(sortArray(nums.slice(0, i+1)))
//     }
//     console.log('nums 1:', nums)
//     console.log('res 1:', res)

//     res = res.concat(povit)
//     console.log('nums 2:', nums)
//     console.log('res 2:', res)


//     if (i < len - 2) {
//         res =  res.concat(sortArray(nums.slice(i+2)))
//     }
//     console.log('nums 3:', nums)
//     console.log('res 3:', res)

//     // let [left, right] = [nums.slice(0, i), nums.slice(i+2)]
//     // return sortArray(left).concat(povit).concat(sortArray(right))
//     return res
// };
let test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275]
let sortRes = sortArray(test)
console.log('sortRes:', sortRes)