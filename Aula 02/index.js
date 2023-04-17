// const listaLivros = require('./array');

// function mergeSort(array) {
    
//     if (array.length > 1) {
//         const meio = Math.floor(array.length / 2);
//         const parte1 = mergeSort(array.slice(0, meio));
//         const parte2 = mergeSort(array.slice(meio, array.length));
//         array = ordena(parte1, parte2);
//     }

//     return array;
// }

// function ordena(parte1, parte2) {
//     let posicaoAtualParte1 = 0;
//     let posicaoAtualParte2 = 0;
//     const resultado = [];

//     while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
//         let produtoAtualParte1 = parte1[posicaoAtualParte1];
//         let produtoAtualParte2 = parte2[posicaoAtualParte2];

//         if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
//             resultado.push(produtoAtualParte1);
//             posicaoAtualParte1++;
//         } else {
//             resultado.push(produtoAtualParte2);
//             posicaoAtualParte2++;
//         }
//     }
//     return resultado.concat(posicaoAtualParte1 < parte1.length
//         ? parte1.slice(posicaoAtualParte1)
//         : parte2.slice(posicaoAtualParte2));
// }

// console.log(mergeSort(listaLivros));

// Inserindo console logs pro passo a passo:

const listaLivros = require('./array');

function mergeSort(array, nivelAninhamento = 0) {

    console.log(`O nível de aninhamento no começo do mergeSorte é: ${nivelAninhamento}`)
    console.log("O array no começo do mergeSorte é")
    console.log(array);

    
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento++);
        console.log(`*****A parte 1 é: `);
        console.log(parte1);
        console.log(`*****O nível de aninhamento pós parte 1 é: `);
        console.log(nivelAninhamento);
        console.log(`*****O array pós parte 1 é: `);
        console.log(array);
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento++);
        console.log(`*****A parte 2 é: `);
        console.log(parte2);
        console.log(`*****O nível de aninhamento pós parte 2 é: `);
        console.log(nivelAninhamento);
        console.log(`*****O array pós parte 2 é: `);
        console.log(array);
        array = ordena(parte1, parte2);
        console.log(`*****O array pós função ordena é: `);
        console.log(array);
    }
    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    console.log(`******A parte 1 no inicio da function ordena é: `);
    console.log(parte1);
    console.log(`******A parte 2 no inicio da function ordena é: `);
    console.log(parte2);
    console.log(`******O resultado no inicio da function ordena é: `);
    console.log(resultado);

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        } else {
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }
    return resultado.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2));
}

console.log(mergeSort(listaLivros));