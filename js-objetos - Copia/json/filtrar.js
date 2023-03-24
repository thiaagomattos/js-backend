const clientes = require("./clientes1.json");

function filtrarApartamentoSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);