export function* colorGenerator() {
  while (true) {
    return yield* ['red', 'green', 'blue', 'yellow', 'black', 'pink', 'orange'];
  }
}
