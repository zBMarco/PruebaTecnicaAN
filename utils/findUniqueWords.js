export function findUniqueWords(texto) {
    const textoMin = texto.toLowerCase();

    const conjPalabras = new Set();
    const contadorP = {};

    let palabra = '';
    for (let i = 0; i < textoMin.length; i++) {
        const char = textoMin[i];

        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {

            palabra += char;
            // console.log(palabra);
        } else if (palabra) {
            if (conjPalabras.has(palabra)) {
                contadorP[palabra] += 1; 
            } else {

                conjPalabras.add(palabra);
                contadorP[palabra] = 1;
                // console.log(conjPalabras);
            }

            palabra = '';
        }
    }
    //Procesa la ultima
    if (palabra) {
        if (conjPalabras.has(palabra)) {
            contadorP[palabra] += 1; 
        } else {
            conjPalabras.add(palabra);
            contadorP[palabra] = 1;
        }
    }


    return [...conjPalabras].filter(palabra => contadorP[palabra] === 1);
}


