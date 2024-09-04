function selectionSort(arr) {
    const arrayLength = arr.length;

    for(let i = 0 ; i < arrayLength ; i++) {
        let minorIndex = i;

        for(let j = i+1 ; j < arrayLength ; j++) {
            if(arr[j] < arr[minorIndex]) {
                minorIndex = j;
            }
        }

        if(minorIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minorIndex];
            arr[minorIndex] = temp;
        }
    }
    return arr;
}

const unorderedList = [42,8,16,15,4,23];
const orderedList = selectionSort([...unorderedList]);

console.log(unorderedList);
console.log(orderedList);