console.log(add(process.argv[2]));

//Implement forEach
//Map
//Reduce

function toSum(prev, next) {
    return parseInt(prev) + parseInt(next);
}

function add(input)
{

    if(input.length == 0) {
        return 0;
    }
    const numbers = input.split(/[\\n,]+/);
    
    throwExceptionWhenNegative(numbers);

    return numbers.reduce(toSum);

}

    // return numbers.length == 0 
    // ? 0 
    // : numbers
    //     .split(/[\\n,]+/)
    //     .reduce((prev, next) => parseInt(prev) + parseInt(next));
    // const splitted = numbers.split(/[\\n,]+/);
    // return splitted.reduce((prev, next) => parseInt(prev) + parseInt(next));
    
    //console.log(splitted1);

    // var sum = 0;

    // splitted.map(function(element) {
    //      return parseInt(element);

    // }).forEach(function(element) {
    //     sum = sum + element;

    // });


function throwExceptionWhenNegative(arrInput){

    //HINT:: arrInput.filter

    function numbersLessThanZero(e){
        return e < 0;
    }

    var filterNums = arrInput.filter(numbersLessThanZero);

    if(filterNums.length > 0)
    {
        throw "negative numbers: " + filterNums;
    }
    

    // var sortedNums = arrInput.sort();


    // var negativeNums = [];

    // for(i=0;i < sortedNums.length; i++){
    //     if(sortedNums[i] < 0){
    //         negativeNums.push(sortedNums[i]);
    //     }
    //     else
    //         break;
    // }



    // if(negativeNums.length > 0)
    // {
    //     throw "negative numbers: " + negativeNums;
    // }
    

    // if(arrInput.sort()[0] < 0){
    //     return true;
    // }
}