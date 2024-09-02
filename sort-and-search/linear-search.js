function linearSearch(arr, element) {
    let count = 1;
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] === element) {
            return {found: true, index: i, count: count};
        }
        count++;
    }
    return {found: false};
};

const numbersList = [1,3,5,7,9,11,13];
const searchedNumber = 13;

const result = linearSearch(numbersList, searchedNumber);
console.log(numbersList);

if(linearSearch(result.found)) {
    console.log(`O número ${searchedNumber} foi encontrado na posição ${result.index} após ${result.count} tentativas`)
}else {
    console.log(`O número ${searchedNumber} não foi encontrado na lista`)
};