function insertionSort(arr) {
    const arrayLength = arr.length;
    var count = 1;
    
    for(let i = 1 ; i < arrayLength ; i++) {
        let key = arr[i];
        let j = i-1;

        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
            count++;
        }
        arr[j+1] = key;
    }
    
    return {sortedArray: arr, interventionCount: count};
}

const unorderedList = [42,8,16,15,4,23];
const {sortedArray: orderedList, interventionCount: count} = insertionSort([...unorderedList]);

console.log('lista desordenada: ' + unorderedList + "\n\n");
console.log(`A lista de tamanho ${unorderedList.length} foi ordenada após ${count} intervenções do algoritmo.\n\n`);
console.log('lista ordenada: ' + orderedList);