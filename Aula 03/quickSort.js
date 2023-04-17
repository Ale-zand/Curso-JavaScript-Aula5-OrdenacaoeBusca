const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

function quickSort(array, esquerda, direita) {

    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            console.log('esquerdaIf', esquerda);
            quickSort(array, esquerda, indiceAtual - 1);
            console.log('esquerdaQ1, direitaQ1', esquerda, direita);
            console.log('indiceAtualQ1', indiceAtual);
            console.log('quickSortEsquerda', array);
        }
        if (indiceAtual < direita) {
            console.log('direitaIf', direita);
            quickSort(array, indiceAtual, direita);
            console.log('esquerdaQ2, direitaQ2',esquerda, direita);
            console.log('indiceAtualQ2', indiceAtual);
            console.log('quickSortDireita', array);
        }
    }
    return array;
}

function particiona(array, esquerda, direita) {
    console.log('arrayP', array);
    console.log('esquerdaP, direitaP', esquerda, direita);
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    console.log('pivo', pivo);
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            console.log('atualEsquerda, atualDireita', atualEsquerda, atualDireita);
            console.log('array trocaLugar', array);
            atualEsquerda++;
            atualDireita--;
        }
    }
    console.log('retorno particiona', atualEsquerda);
    return atualEsquerda;
}

console.log('Resultado final',quickSort(listaLivros, 0, listaLivros.length - 1));
