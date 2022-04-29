var numbers = [12, 2, 2, 6, 5, 9, 10, 10, 33, 33];
var difference = function (arr) {
    // at first remove duplicates from array
    var uniques = Array.from(new Set(arr));
    console.log(uniques);
    // find min and max numbers
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    return max - min;
};
console.log(difference(numbers));
