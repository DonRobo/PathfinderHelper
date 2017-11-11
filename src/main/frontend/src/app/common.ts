//https://stackoverflow.com/a/4149393/299291
export function decamelize(input: string): string {
  return input
  // insert a space before all caps
    .replace(/([A-Z])/g, ' $1').trim()
    // uppercase the first character
    .replace(/^./, function (str) {
      return str.toUpperCase();
    })
}

export interface NumberAttribute {
  label: string;
  attribute: string;
}

export interface DiceThrow {
  diceCount: number;
  faceCount: number;
}
