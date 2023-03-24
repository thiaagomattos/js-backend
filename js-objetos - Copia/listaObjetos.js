const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["123345412", "4451235123"],
};

cliente.enderecos = [
    {
        rua: "R. Videira",
        numero: 337,
        apartamento: true,
        complemento: "ap 934",
    }
];

cliente.enderecos.push({
    rua: "R. João Meirelles",
    numero: 404,
    apartamento: false,
})

console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);