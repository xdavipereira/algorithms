function bubble(arr) {
    for (var i = 0; i <= arr.length; i++) {
        for (var j = 0; j <= arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr;
}
console.log(bubble([3, 5, 4, 7, 8, 9, 1, 2, 3, 0]));
//# sourceMappingURL=bubble.js.map