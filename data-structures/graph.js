//Grafos são uma estrutura de dados que armazenam uma 'coleção de informações' e como elas se conectam (quais os caminhos para cada informação).


//  1.  CRIANDO A CLASSE GRAPH:

function Graph() {
    this.adjacencyList = {};
};

//  1.1.  Essa classe irá armazenar uma lista de adjacências ('a ligação entre os nós');



//  2. ADCIONANDO UM NOVO VERTICE AO GRAFO:

Graph.prototype.addVertex = function(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
};

//  2.1.  se o vertice ainda não existir na lista de adjacencia, adcionamos ele a lista e associamos ele a uma lista vazia;



//3. ADCIONANDO UMA ARESTA ENTRE DOIS VERTICES:

Graph.prototype.addEdge = function(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2); 
    this.adjacencyList[vertex2].push(vertex1);
};

//  3.1.  Adcionamos vertice 2 a lista de adjacencia do vertice 1 e vice-versa;



//  4.  REMOVENDO UMA ARESTA ENTRE DOIS VERTICES:

Graph.prototype.removeEdge = function(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
    );
}

//    4.1.  'this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)'
//remove o 'vertice 2' da lista de adjacencia do 'vertice 1';

//    4.2.  'this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)'
//remove o 'vertice 1' da lista de adjacencia do 'vertice 2'.



//  5.  METODO PARA REMOVER UM VERTICE DO GRAFO:

Graph.prototype.removeVertex = function(vertex) {
    while(this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
}

//   5.1.  'const adjacentVertex = this.adjacencyList[vertex].pop()', remove um vertice adjacente;
//   5.2.  'this.removeEdge(vertex, adjacentVertex)', remove a aresta entre dois vertices;
//   5.3.  'delete this.adjacencyList[vertex]', remove o vertice da lista de adjacencia;


var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
console.log(graph.adjacencyList);
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
console.log(graph.adjacencyList);
graph.removeEdge('A', 'C');
console.log(graph.adjacencyList);
graph.removeVertex('A');
console.log(graph.adjacencyList);
