export function replaceVowels(texto) {
    const vocales = { a: 'e', e: 'i', i: 'o', o: 'u', u: 'a', A: 'E', E: 'I', I: 'O', O: 'U', U: 'A' };
    let res = '';

    for (let i = 0; i < texto.length; i++) { 
        const char = texto[i];
        if (vocales[char]) {
            res += vocales[char];
            // console.log(vocales[char]);
        } else {
            res += char;
        }
    }



    return res;
}

