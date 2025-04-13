const palindromes = function (string) {
    let lower = string.toLowerCase();
    let arr1 = lower.split("");
    console.log(arr1)
    // // remove empty space
    // let arr2 = arr1.filter(function(str) {
    //     return /\S/.test(str);

    //remove non-characters
    let arr2 = arr1.filter(item => {
        if ((64 < item.charCodeAt(0) < 91) && (!!item.match(/[.,:!?]/) == false)
        && (item != " "))
            return true
    });
    
    console.log(`arr 1 ${arr1} ,, arr 2 ${arr2}`)
    
    return arr2.every((value, index) => value === arr2.reverse()[index])
};


// Do not edit below this line
module.exports = palindromes;
