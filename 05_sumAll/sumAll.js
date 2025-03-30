const sumAll = function(num1,num2) {
    let sum = 0;
    let startNumber = 0;
    let endNumber = 0;
    // check which is startnumber and endnumber
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    } else if (num1 < num2){
        startNumber = num1;
        endNumber = num2;
    } else {
        startNumber = num2;
        endNumber = num1;
    }

    // check that numbers are positive integers. if string make them integers

    // Start a loop from the startnumber, to the endnumber, index increasing 1
    // for each loop, add the current number to the sum
    for (let i = startNumber; i <= endNumber; i++){
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
