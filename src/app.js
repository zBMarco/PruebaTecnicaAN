import express from 'express';
import { alternatingCaps } from '../utils/alternatingCaps.js';
import { replaceVowels } from '../utils/replaceVowels.js';
import { findUniqueWords } from '../utils/findUniqueWords.js';
import { invertParentheses } from '../utils/invertParentheses.js';

const app = express();
app.use(express.json());


app.post('/text/process', (req, res) => {
  const {text} = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Se requiere un texto' });
  }

  const result = invertParentheses(text);
  return res.json({result});
});


// Transoformar text
app.post('/text/transform', (req, res) => {
  const {text} = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Se requiere un texto' });
  }


  const alternatingCapsResult = alternatingCaps(text);
  const vowelReplacementResult = replaceVowels(text);
  const uniqueWordsResult = findUniqueWords(text);

  return res.json({
    alternating_caps: alternatingCapsResult,
    vowel_replacement: vowelReplacementResult,
    unique_words: uniqueWordsResult
  });
});



app.listen(3000);
console.log(`Servidor Corriendo Bien:) Puerto: ${3000}`);
