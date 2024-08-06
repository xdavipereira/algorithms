var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var greater = [];
    var minor = [];
    var pivot = arr[0];
    for (var index = 1; index < arr.length; index++) {
        if (arr[index] > pivot) {
            greater.push(arr[index]);
        }
        else if (arr[index] <= pivot) {
            minor.push(arr[index]);
        }
    }
    var x = quickSort(minor);
    var y = quickSort(greater);
    return __spreadArray(__spreadArray(__spreadArray([], x, true), [pivot], false), y, true);
}
console.log(quickSort([]));
console.log(quickSort([1]));
console.log(quickSort([3, 2, 5, 4, 9, 8, 6, 7, 10]));
//# sourceMappingURL=quick.js.map