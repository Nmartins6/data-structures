//Estruturas de arvores também são compostas por nós e ramificações, onde cada novo nó é adcionado a 'esquerda' ou 'direita' de um nó de referencia.;



//  1.  CRIANDO A ESTRUTURA DOS NÓS:


function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}


//  1.1.  O construtor recebe o VALOR a ser armazenado pelo nó;
//  1.2.  é iniciado também as referências para os nós que estarão sendo 'apontados' por esse nó;

//  2.0  CRIANDO A ÁRVORE:

function BinaryTree() {
    this.root = null;
}

//  2.1.  root irá 'guardar' a referência para o 'nó raiz' da arvore;



//  3. ADCIONANDO NÓS A ARVORE:

BinaryTree.prototype.add = function(data) {
    var node = new Node(data);

    if(this.root === null) {
        this.root = node;
    } else {
        insertNode(this.root, node);
    }
}

//  3.1.  Cria-se uma variavel que armazerna o nó;
//  3.2.  Verifica-se se a arvore esta vazia(se já há um nó raiz);
//  3.3.  Se a arvore for vazia, criamos o nó raiz. Se ele não existe, inserimos um novo nó (função que será criada);


//  4.  INSERINDO UM NÓ NA POSIÇÃO CORRETA:


function insertNode(node, newNode) {
    if(newNode.data < node.data) {
        if(node.left === null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode);
        }
    } else {
        if(node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
}


//  4.1.  O código compara o valor 'data' do 'newNode' com o valor do nó atual 'node.data'. 
//Se o valor do 'newNode' for menor, ele deve ser inserido na nó à esquerda do 'node'.
//Se for maior ou igual, deve ser inserido na nó à direita;
//  4.2.  Inserindo um novos nós a esquerda:    
    //  4.2.1.  Se o valor de 'newNode.data' for menor que 'node.data', a função verifica se o 'node.left'
//é nulo. Se for nulo, significa que não há um nó à esquerda, então 'newNode' é inserido ali;
    //  4.2.2   Se 'node.left' não for nulo, a função é chamada recursivamente para continuar 
//a busca no nó esquerda, usando 'node.left' como o novo nó de comparação.
//  4.3.  Inserindo um novo nó a direita:
//    4.3.1.  Se o valor de 'newNode.data' for maior ou igual a 'node.data', a função verifica se o
//'node.right' é nulo.  Se for nulo, newNode é inserido ali.
//    4.3.2.  Se 'node.right' não for nulo, a função é chamada recursivamente para continuar a busca
//no nó direita, usando 'node.right' como o novo nó de comparação.



//  5.  Imprimindo a árvore:

BinaryTree.prototype.printTree = function(node, prefix = '', isLeft = null) {
    if(node != null) {
        this.printTree(node.right, prefix + (isLeft ? '|   ' : '    '), false);
        console.log(prefix + (isLeft ? '|__ ' : '|--') + node.data);
        this.printTree(node.left, prefix + (isLeft ? '    ' : '|   '), true);
    }
}


var tree = new BinaryTree();
tree.add(5);
tree.add(7);
tree.add(8);
tree.add(1);
tree.add(2);
tree.add(0);
tree.add(4);
tree.add(4.5);
tree.add(3.5);
tree.add(6);
tree.add(5);
tree.add(6.5);
tree.add(10);
tree.add(12);
tree.add(9);


tree.printTree(tree.root);