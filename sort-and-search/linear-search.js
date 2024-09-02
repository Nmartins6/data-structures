function linearSearch(arr, element) {
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] === element) {
            return {found: true, index: i};
        }
    }
    return {found: false};
};

const numbersList = [1,3,5,7,9,11,13];
const searchedNumber = 7;

const result = linearSearch(numbersList, searchedNumber);
console.log(numbersList);

if(linearSearch(result.found)) {
    console.log(`O número ${searchedNumber} foi encontrado na lista na posição ${result.index}`)
}else {
    console.log(`O número ${searchedNumber} não foi encontrado na lista`)
};