const removeFromArray = function(array, ...removeThis) {
    for (let i = 0; i<array.length;i++){
        for (j=0; j < removeThis.length; j++){
            if (array[i] === removeThis[j]){
                array.splice(i)
                console.log(array)
            }   
        }
    }
    return array
}

// Do not edit below this line
module.exports = removeFromArray;
