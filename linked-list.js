//Lista encadeada é uma estrutura de dados composta por 'nós',
//onde cada nó contém um valor e um 'ponteiro' (referência) 
//para outro nó. Criando uma estrutura encadeada, onde cada elemento é 'precedido' por outro.




//  1.  'CRIANDO' UM NÓ:

function Node(value) {
    this.value = value;
    this.next = null;
}

//  1.1.  É criada a função construtora (classe) Node, que espera um valor; (este trecho do código define a estrutura do nó)
//  1.2.  this.value armazena o valor recebido;
//  1.3.  this.next inicializa um ponteiro para o proximo nó, inicialmente como nulo, pois nesse momento ele não ap
//aponta para nenhum outro nó.




//  2. 'CRIANDO' UMA LISTA ENCADEADA:

function LinkedList() {
    this.head = null;
    this.tail = null;
}

//  2.1.  É criada a função construtora (classe) LinkedList; (esse trecho de código define a estrutura da lista);
//  2.2.  this.head aponta para o primeiro nó da lista. Ao criar a lista, ela ainda é vazia, logo, head é nulo;
//  2.3.  this.tail aponta para o último nó da lista, que neste momento também é nulo!




//  3. CRIANDO O MÉTODO 'APPEND' *adciona um item ao final da lista:

LinkedList.prototype.append = function(value) {
    var newNode = new Node(value);

    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

//  3.1. inicialmente o método 'append' cria um novo nó que recebe o valor a ser armazenado, como definido
//no constructor 'Node';
//  3.2.  if("!this.head") verifica se head é nullo. (lista vazia);
//    3.2.1.  Se a lista ESTIVER vazia, o nó se torna o inicio(head) e o fim(tail) da lista;
//    3.2.2.  Se a lista NÃO estiver vazia, o head não é alterado pois estamos trabalhando com o final da lista,
//o 'next'(ponteiro para o proximo nó) conecta o ultimo nó existente ao novo nó;
//por fim, o tail é atualizado.




//  4.  CRIANDO O MÉTODO PREPEND *adciona um novo nó ao início da lista:

LinkedList.prototype.prepend = function(value) {
    var newNode = new Node(value);

    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
}

//  4.1.  Inicialmente o método prepend cria um novo nó que recebe um valor;
//  4.2.  Verifica-se se a lista é vazia;
//    4.2.1. Se a lista ESTIVER vazia, o nó se torna o inicio(head) e o fim(tail) da lista;
//    4.2.2. Se a lista não for vazia, o next do NOVO NÓ é atualizado para apontar para o head ATUAL,
//logo em seguida o head é atualizado para que o NOVO NÓ se torne o primeiro da lista.




//  5. CRIANDO O MÉTODO DELETE *apaga um item da lista que contenha o valor indicado:

LinkedList.prototype.delete = function(value) {   
    if(!this.head) {
        return;
    }

    while(this.head && this.head.value === value) {
        this.head = this.head.next;
    }

    var currentNode = this.head;
    while(currentNode && currentNode.next) {
        if(currentNode.next.value === value) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }

    if(this.tail && this.tail.value === value) {
        this.tail = currentNode;
    }
}

//  5.1.  Primeiro verifica-se se a lista é vazia, se vazia, não há itens a deletar;
//  5.2.  Em seguida é verificado o nó do inicio da lista. enquanto o nó do inicio da lista tiver o valor igual
//ao valor a ser deletado, ele é apontado para o proximo nó da lista, e esse processo se repete até que
//o nó verificado tenha valor diferente ao passado para a função delete;
//  5.3.  Apagando caso o valor não esteja no início da lista;
//    5.3.1.  É criada uma variável 'currentNode' e iniciada com o primeiro nó da lista;
//    5.3.2.  Percorre-se a lista desde o primeiro nó até o último, verificando se o nó atual ou o proximo não é nulo e se o 
//valor do próximo é igual ao valor a ser apagado.
//    5.3.3.  Se o proximo nó tem o valor a ser apagado, o ponteiro será apontado para o nó seguinte 'next.next;
//    5.3.4.  Caso contrário, avança para o proximo nó.
//  5.4.  Por fim, ajustamos o ultimo nó da lista, caso o mesmo venha a ser deletado;




//  6. IMPRIMINDO A LISTA;

LinkedList.prototype.print = function() {
    var currentNode = this.head;
    var values = [];

    while(currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }

    console.log(values.join( ' --> ' ));
}

//  6.1.  Inicia-se uma variavel com o primeiro nó da lista;
//  6.2.  Iniciasse um array vazio que irá conter os valores de cada nó;
//  6.3.  Enquanto o nó atual não for vazio, adcionamos o valor a uma posição do array e em seguida avançamos um nó;
//  6.4.  Por fim, imprimimos os valores;  **(' --> ') Tem somente função de tornar a saída mais legível;





//--------TEST-----------//

// list.print();
// const list = new LinkedList();
// list.append(7);
// list.append(7);
// list.append(7);
// list.append(7);
// list.append(8);
// list.prepend(5);
// list.prepend(4);
// list.prepend(3);
// list.prepend(1);
// list.delete(7);

// list.print();