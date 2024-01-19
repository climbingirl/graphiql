import { setEditorValue } from '@src/store/playgroundSlice/playgroundSlice';
import { Dispatch } from 'react';

const prettifyEditorValue = (
  value: string,
  dispatch: Dispatch<ReturnType<typeof setEditorValue>>
): void => {
  let formattedValue = '';
  let isFields = false;
  let isParams = false;

  value
    .replaceAll('\n', ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+{/g, '{')
    .replace(/\s+}/g, '}')
    .replace(/\s+\(/g, '(')
    .replace(/\s+\)/g, ')')
    .split('')
    .forEach((char) => {
      if (char === '{') {
        isFields = true;
        formattedValue += isParams ? ' {' : ' {\n';
      } else if (!isParams && char === '}') {
        isFields = false;
        formattedValue += '\n}\n';
      } else if (char === '(') {
        isParams = true;
        formattedValue += char;
      } else if (char === ')') {
        isParams = false;
        formattedValue += char;
      } else if (!isParams && char === ' ') {
        formattedValue += isFields ? '\n ' : ' ';
      } else if (
        formattedValue[formattedValue.length - 1] === '{' &&
        char === ' '
      ) {
        formattedValue += '';
      } else {
        formattedValue += char;
      }
    });

  const lines = formattedValue.split('\n');
  let formattedQuery = '';
  let level = 0;

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    const decreaseLevel = trimmedLine.startsWith('}') ? -1 : 0;
    const increaseLevel = trimmedLine.endsWith('{') ? 1 : 0;

    if (trimmedLine !== '') {
      level += decreaseLevel;

      formattedQuery += ' '.repeat(Math.max(0, level * 2)) + trimmedLine + '\n';

      level += increaseLevel;
    }
  });

  dispatch(setEditorValue(formattedQuery));
};

export default prettifyEditorValue;
