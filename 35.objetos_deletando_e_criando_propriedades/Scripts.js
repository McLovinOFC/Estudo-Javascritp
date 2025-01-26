let pessoa = {
    nome: "Ruan",
    idade: 25,
    profissao: "Programação",
}
console.log (pessoa.nome);

delete pessoa.nome;

console.log (pessoa.nome);
console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);