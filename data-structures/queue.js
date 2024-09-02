//As filas funcionam com o conceito de FIFO, onde o primeiro item a entrar, é o primeiro a sair



//  1. CRIANDO A FILA:

function Queue() {
    this.elements = [];
}

//  1.1. Cria-se a estrutura da fila (um array vazio);



//  2. CRIAMOS O METODO PARA ADCIONAR ITENS A FILA:

Queue.prototype.enqueue = function(element) {
    this.elements.push(element);
}

//  2.1.  Através do push, um item é adcionado ao final da fila;



//  3.  CRIAMOS O METODO DEQUEUE PAEA REMOVER E RETORNAR O PRIMEIRO ITEM DA FILA:

Queue.prototype.dequeue = function() {
    return this.elements.shift();
}

//  3.1  Removemos e retornamos o valor removido do inicio da fila;



//  4.  CRIAMOS O METODO PEEK PARA VIZUALIZAR O ITEM DO INICIO DA FILA:

Queue.prototype.peek = function() {
    if(this.isEmpty()) {
        return null;
    } else {
        return this.elements[this.elements.length-1];
    }
}

//  4.1. Verifica-se se a fila está vazia;
//    4.1.1.  Se a fila for vazia, retornamos null;
//    4.1.2.  Se a fila não for vazia, retornamos o primeiro item da fila;



//  5.  CRIAMOS O METODO ISEMPTY PARA VERIFICAR SE A LISTA É VAZIA:

Queue.prototype.isEmpty = function() {
    return this.elements.length === 0;
}

// 5.1  se o tamanho do array for igual a zero, retornamos true, caso contrario, retornamos false.



//  6.  CRIAMOS O METODO PARA VIZUALIZAR A FILA:

Queue.prototype.print = function (){
    
    let reversedQueue = [...this.elements].reverse();
    
    console.log('| ' + reversedQueue.join(' | ') + ' | ---> Inicio da fila (elemento mais antigo adcionado e primeiro a ser removido)');
}




// -----TEST------//

// let queue = new Queue();

// console.log(' ---- A LISTA É VAZIA ----\n\n')
// console.log('lista vazia?   ' + queue.isEmpty() + '\n\n');
// console.log('------------------------------------\n\n');

// queue.enqueue('x');
// queue.enqueue('y');
// queue.enqueue('z');
// queue.enqueue('v');

// console.log('\n\nlista vazia?   ' + queue.isEmpty() + '\n\n');

// queue.print();


// console.log('---- PEEK ----\n\n')
// console.log(queue.peek() + '\n\n');
// console.log('--------------\n\n');


// console.log(' ---- DEQUEUE ---- \n\n');
// console.log(queue.dequeue() + '\n\n');
// console.log('-------------------');
