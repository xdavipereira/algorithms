function mySqrt(x: number): number {

    let low = 0;
    let high = x;


    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid;
        }

        if (square < x) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }


    return Math.floor(low);

};


console.log(mySqrt(8));