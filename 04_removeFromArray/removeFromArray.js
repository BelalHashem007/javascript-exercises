const removeFromArray = function(array, ...itemsToBeRemoved) {
    console.log(itemsToBeRemoved.length);
    for (let i=0; i<itemsToBeRemoved.length; i++)
    {
        let j=0;
        while (j<array.length){
            if (array[j]===itemsToBeRemoved[i]){
            array.splice(j,1);
            } else {
                j++;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
