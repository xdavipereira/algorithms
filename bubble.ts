function bubble(arr: Array<number>) {

    for(let i = 0; i<=arr.length; i++) {

        for(let j = 0; j <arr.length - 1-i; j++) {

            if(arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }

        }

    }

    return arr;


}




console.log(bubble([3,5,4,7,8,9,1,2,3,0]));