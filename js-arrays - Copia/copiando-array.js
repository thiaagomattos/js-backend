const notas = [7,7,8,9];

const novasNotas = [...notas]; // ou const novasNotas = [notas, 10];

notas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);