

// console.log(add(process.argv[2]));

add(process.argv[2]);

function toSum(prev, next){
    return parseInt(prev) + parseInt(next);
}

function add(p){
    

    if(p == null)
    {
        return 0;
    }

    const nums = p.split(/[\\n,]+/);
    
    // console.log(nums[1] == '');

    if (nums.length == 0 || nums[1] == ''){
        return 0;
    }

    
    nums.filter(numsGreaterThanZero);
    
    
    // return nums.reduce();
    
    function numsGreaterThanZero(e){
        return e > 0;
    }

    throwExceptionWhenNegative(nums);
}

function throwExceptionWhenNegative(p){

    function numLessThanZero(e){
        return e < 0;
    }
    
    var filterNums = p.filter(numLessThanZero);

    if(filterNums.length > 0){
        throw "Negative numbers: " + filterNums;
    }
}