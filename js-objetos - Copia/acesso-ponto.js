const cliente = {
    nome: 'Andre',
    idade: 32,
    CPF: "1121334123",
    email: 'andre@dominio.com',
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.CPF.substring(0, 3)}`); 