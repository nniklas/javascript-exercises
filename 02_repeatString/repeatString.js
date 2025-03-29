const repeatString = function(string, numRepeat) {
    if (numRepeat < 0){
        return "ERROR"
    }
    let returnString = "";
    for (let i = 0; i < numRepeat; i++){
        returnString += string
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
