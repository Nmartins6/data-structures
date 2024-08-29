//    A estrutura de pilhas consiste na logica de LIFO, onde o último item adcionado
//é o primeiro item a ser retirado.



//  1.  CRIANDO A PILHA:

function Stack() {
    this.elements = [];
}

//  1.1.  Define-se o constructor que será usado para criar novas pilhas, iniciando uma pilha vazia;




//  2.  ADCIONANDO UM ITEM AO 'TOPO' DA PILHA:

Stack.prototype.push = function (element) {
    this.elements.push(element)
}

//  2.1.  Usamos a função push para inserir 'element' na ultima posição do array;




//  3.  REMOVENDO ITEM DO TOPO DA PILHA:

Stack.prototype.pop = function () {
    return this.elements.pop();
}

//  3.1.  return this.elements.pop() remove e retorna o último item do array;



//  4.  OBSERVANDO O ÚLTIMO ITEM ADCIONADO A PILHA:

Stack.prototype.peek = function () {
    if (this.isEmpty()) {
        return null;
    } else {
        return this.elements[this.elements.length - 1];
    }
}

//  4.1. Verifica se o array é vazio:
//    4.1.1.  Se vazio, retornamos null;
//    4.1.2.  Se não for vazio, retornamos o ultimo item da pilha.



//  5.  VERIFICANDO SE A PILHA ESTÁ VAZIA:

Stack.prototype.isEmpty = function () {
    return this.elements.length === 0;
}

//  5.1. retorna true caso o array seja vazio e false, caso não seja.



//  6.  IMPRIMINDO A PILHA:

Stack.prototype.print = function () {
    for (var i = 0; i < this.elements.length; i++) {
        console.log('|', this.elements[i], '|');
        console.log('-----');
    }
}

//  6.1. Percorremos o array com um for, imprimindo os elementos contidos em cada posição:




// //-----------TEST--------------//

// const stack = new Stack();

// // console.log('------VERIFICANDO SE A LISTA É VAZIA------' + '\n\n');
// // console.log('A LISTA ESTÁ VAZIA: ' + stack.isEmpty() + '\n\n');
// // console.log('------------------------------------------' + '\n\n');



// // console.log('---- ADCIONANDO A, B, C, D ----');
// stack.push('A');
// stack.push('B');
// stack.push('C');
// stack.push('D');
// // stack.print();
// // console.log('A LISTA ESTÁ VAZIA: ' + stack.isEmpty() + '\n\n');
// // console.log('------------------------------------------' + '\n\n');



// // console.log('---- TESTANDO POP ----' + '\n\n');
// // console.log('ITEM RETIRADO: ' + stack.pop() + '\n\n');
// // console.log('lista após o pop:' + '\n');
// // stack.print();
// // console.log('----------------------' + '\n\n');

// console.log('---- PEEK ----' + '\n\n');
// console.log(stack.peek() + '\n\n');

// console.log('---- LISTA ----')
// stack.print()
