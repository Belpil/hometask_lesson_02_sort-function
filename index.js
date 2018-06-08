var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {
    var finalArray = [],
        interArray = [];

    for (var i = 0; i < dataPriority.length; i++) {
        for (var j = 0; j < array.length; j++) {
            var arrayItemType = isNull(array[j]);

            if(arrayItemType == dataPriority[i] && (arrayItemType == 'number' || arrayItemType == 'string')) {
                interArray.push(array[j]);
                interArray.sort();
            } else if (arrayItemType == dataPriority[i] && arrayItemType == 'boolean') {
                interArray.push(array[j]);
                interArray.sort(function(left, right) {
                    return right - left;
                });
            } else if (arrayItemType == dataPriority[i]) {
                interArray = [];
                finalArray.push(array[j]);
            }
        }

        finalArray = finalArray.concat(interArray);
    }

    return finalArray;
}

function isNull(value) {
    // write code here
    var valType = typeof(value);

    if (valType === 'object' && value == null) {
        return valType = 'null';
    } else {
        return valType;
    }
}