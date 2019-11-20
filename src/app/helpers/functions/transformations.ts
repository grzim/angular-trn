
export const unique: any = arr => [...new Set(arr)];

const isUpperCase = char => char === char.toUpperCase();

const breakToSeparateWords = char => ` ${char.toLowerCase()}`;
const when = (predicate, mapper) => char => predicate(char) ? mapper(char) : char;
const mapChars = (f) => (word) => word.split('').map(f).join('');

export const camelCaseToWordSpacing = mapChars(when(isUpperCase, breakToSeparateWords));
