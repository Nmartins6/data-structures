function binarySearch(arr, element) {
    let start = 0;
    let end = arr.length-1;
    let count = 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        // console.log(`inicio: ${start}    -    meio: ${mid}    -    fim: ${end}`);
        if(arr[mid] === element) {
            return {found:true, index: mid, count:count}
        } else if(arr[mid] < element) {
            start = mid + 1;
            count++;
        } else {
            end = mid -1;
            count++;
        }
    }
    return false;
}

const orderedList = [1,3,5,7,9,11,13];
const searchedNumber = 13;
const result = binarySearch(orderedList, searchedNumber);

console.log(orderedList);
if(result.found) {
    console.log(`O número ${searchedNumber} foi encontrado na posição ${result.index} após ${result.count} tentativas`);
} else {
    console.log(`O número ${searchedNumber} não foi encontrado`);
}