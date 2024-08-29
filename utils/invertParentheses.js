
export function invertParentheses(mensaje){
    let copiaMensaje = mensaje;
    let stack = [];
    while (true) {
        let ultimoParenA = mensaje.lastIndexOf("(");
        if (ultimoParenA === -1) break;
        let ultimoParenC = mensaje.lastIndexOf(")");
        if (ultimoParenC === -1) break;
        
        let cortarPalabra = mensaje.slice(ultimoParenA, ultimoParenC);
    
        let palabraProcesada = mensaje.slice(ultimoParenA, ultimoParenC).split('').filter(p => p != "(" && p != ")").reverse().join('');
       
        //reemplazar palabra
        let nuevaCadena = mensaje.slice(0, ultimoParenA) + palabraProcesada + mensaje.slice(ultimoParenC);
        stack.push(mensaje);

        console.log(mensaje);
    
        mensaje = nuevaCadena;
        console.log(stack);
    }
    
    // stack.pop();
    stack.push(copiaMensaje.split('').filter(p => p != "(" && p != ")").reverse().join(''));
    
    // console.log(stack);

    return stack;

}



