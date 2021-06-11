// Exercício Array - Playroung

let produtos = ["bolsa", "joias", "celulares", "sapatos"];

console.log(
  "O método Join retorna o array inteiro em forma de string e com um separator que pode ser definido entre parenteses:"
);
console.log(produtos.join(" - "));

console.log("O método Pop retira o última elemento do array e o retorna:");
console.log(produtos.pop());

console.log(
  "O método Push adiciona um novo elemento no final do array e retorna o tamanho do array"
);
console.log(produtos.push("roupas"));

console.log("O método Shift retira o primeiro elemento do array e retorna ele");
console.log(produtos.shift());

console.log(
  "O método Unshift adiciona um novo elemnto no começo do array e retorna o tamanho do array"
);
console.log(produtos.unshift("relógios"));

console.log(produtos);
