const compare = (a: string, b: string): -1 | 0 | 1 => a === b ? 0 : a > b ? 1 : -1;

console.log(compare("abc", "def"));

