const removeFromArray = function(array, ...removeThis) {
    let newArray = [];
    
     newArray = array.filter( function( burr ) {
        return !removeThis.includes( burr );
      } );

    return newArray
}

// Do not edit below this line
module.exports = removeFromArray;
