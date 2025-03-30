const removeFromArray = function(array, ...removeThis) {
    let newArray = [];
    let dumbConcatArray = [];
    let sliceStart = 0;
    

     newArray = array.filter( function( burr ) {
        return !removeThis.includes( burr );
      } );

    return newArray
}

// Do not edit below this line
module.exports = removeFromArray;
