export function invertParenthesesfeo(texto) {
    const nuevaC = texto.split('');
    let posA = [];
    let posC = [];
    let sinProcesar = [];
    let pasos = [texto];

    for (let index = 0; index < nuevaC.length; index++) {
        if (nuevaC[index] === "(") {
            posA.push(index);
        }
        if (nuevaC[index] === ")") {
            posC.push(index);
        }
    }

    posC.reverse();
    let matrizPos = [posA, posC];
//Bloques de parentesis
    for (let i = 0; i < matrizPos[0].length; i++) {
        let subString = texto.substring(matrizPos[0][i], matrizPos[1][i] + 1);
        sinProcesar[i] = subString;
    }

    let ultimaPalabra = sinProcesar[sinProcesar.length - 1];
    let parentesisProcesado = (ultimaPalabra.split('').filter(char => char !== '(' && char !== ')')).reverse().join('');

    pasos.push(texto.replace(ultimaPalabra, parentesisProcesado));

    if (pasos[pasos.length - 1].includes("(")) {
        let primeraPalabra = pasos[0].split('').filter(char => char !== '(' && char !== ')').reverse().join('');
        pasos.push(primeraPalabra);
        return pasos;
    }

    return pasos;
}


