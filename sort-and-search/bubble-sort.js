function bubbleSort(arr) {
    const arrayLength = arr.length;
    let swapped;
    let count = 1;

    do {
        swapped = false;

        for(let i = 0 ; i < arrayLength-1 ; i++) {
            if(arr[i] > arr[i+1]) {
                const temp = arr[i];
                arr[i] = arr [i+1];
                arr[i+1] = temp;
                swapped = true;

                count++;
            }
        }
    } while (swapped);

    return {sortedArray: arr, interventionCount: count};
}

const unorderedList = [42,8,16,15,4,23];
const { sortedArray: orderedList, interventionCount: count } = bubbleSort([...unorderedList]);

console.log('lista desordenada: ' + unorderedList + '\n\n');
console.log(`A lista de tamanho ${unorderedList.length} foi ordenada após ${count} intervenções do algoritmo.\n\n`);
console.log('lista ordenada: ' + orderedList);