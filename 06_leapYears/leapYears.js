const leapYears = function(year) {
    // shall be divisible by four
    // shall not be divisible by 100, unless its 400 then its ok
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true
    } else {
        return false
    } 
};

// Do not edit below this line
module.exports = leapYears;
