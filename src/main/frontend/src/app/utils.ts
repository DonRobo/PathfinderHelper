//https://stackoverflow.com/a/4149393/299291
export function decamelize(input: string): string {
  return input
  // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function (str) {
      return str.toUpperCase();
    })
}
