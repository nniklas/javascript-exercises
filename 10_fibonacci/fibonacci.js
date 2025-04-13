const fibonacci = function(num) {
    num = +num;
    if (num == 0){
        return 0
    } else if (num < 0){
        return "OOPS"
    }
    const series = [1,1];
    // console.log(series);
    let nextFib = 0; 
    for (i=1; i < num; i++){
        nextFib = series[i-1] + series[i];
        series.push(nextFib);
        // console.log(`series[i-1] ${series[i-1]}, series[i-1] ${series[i]}, series ${series}
        //     , nextfib ${nextFib}`);
    };

    return series[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
