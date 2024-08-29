*******************
Para iniciar el proyecto:
npm run dev

********************

Endpoint: POST /text/process

Descripcion: 
Recibe una cadena de texto con parentesis, 
y devuelve los pasos para poder invertir cada uno de los parentesis, 
comenzando por el mas interno.


Endpoint: POST /text/transform

Descripcion: Recibe una cadena de texto y realiza varias transformaciones 
- alternatingCaps: Recibe una cadena y retorna la cadena variando cada palabra entre mayusculas y minusculas.
- replaceVowels: Las vocales en el texto son reemplazadas por la siguiente vocal en la secuencia alfabética:
  "a" se convierte en "e", "e" en "i", "i" en "o", "o" en "u", y "u" en "a".
- uniqueWordsResult: Se identifican las palabras que aparecen una sola vez en el texto, ignorando la puntuación y las palabras repetidas.

