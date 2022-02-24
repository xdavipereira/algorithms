function sum_d_c(arr) {

    if(arr.length == 0) {
        return 0;
    }

    if(arr.length == 1 ) {
        return arr[0];
    }

    const x = arr[0];

    arr.shift();

    const z = x + sum_d_c(arr)
    return z;
}


const sum = sum_d_c([1,2,3,4,5, 6, 9]);
console.log(sum)