

function quickSort(arr: Array<number>) {

    if (arr.length < 2) {
        return arr;
    }

    const greater = [];
    const minor = [];
    const pivot = arr[0];

    for (let index = 1; index < arr.length; index++) {

        if (arr[index] > pivot) {

            greater.push(arr[index]);

        } else if (arr[index] <= pivot) {

            minor.push(arr[index]);
        }
    }

    const x = quickSort(minor);
    const y = quickSort(greater);

    return [...x, ...[pivot], ...y]

}



console.log(quickSort([]));
console.log(quickSort([1]));
console.log(quickSort([3, 2, 5, 4, 9, 8, 6, 7, 10]));
