function findSmallest(arr) {

    let smallest = arr[0];
    let smallestIndex = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i]  < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;

}


function selectionSort(arr = []) {

    const newArr = [];


    const arrLength  = arr.length;

    for (let index = 0; index < arrLength; index++) {


        let smallest = findSmallest(arr);
        let removedItem = arr[smallest];
        arr.splice(smallest, 1)
        newArr.push(removedItem)
        
    }

    console.log(newArr);

}



selectionSort([5,4,3,2,1, 24]);