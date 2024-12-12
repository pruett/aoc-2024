export function scan(input: string): number {
  const grid = input.split("\n").map((l) => {
    return l.split("");
  });

  const MAGIC_WORD = "XMAS";

  let count = 0;

  // [
  //      0    1    2    3    4    5    6    7    8    9
  // 0  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // 1  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // 2  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // 3  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // 4  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // 5  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // 6  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // 7  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // 8  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // 9  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  // ]

  for (let outer = 0; outer < grid.length; outer++) {
    for (let inner = 0; inner < grid[0].length; inner++) {
      const currentLetter = grid[outer][inner];

      // ->
      const inBoundsAcrossR = inner <= grid[0].length - MAGIC_WORD.length;

      if (inBoundsAcrossR) {
        const sequence = `${currentLetter}${grid[outer][inner + 1]}${
          grid[outer][inner + 2]
        }${grid[outer][inner + 3]}`;

        if (sequence === MAGIC_WORD) {
          count += 1;
        }
      }

      // \_
      const inBoundsDiagLTRDown =
        outer <= grid.length - MAGIC_WORD.length &&
        inner <= grid[0].length - MAGIC_WORD.length;

      if (inBoundsDiagLTRDown) {
        const sequence = `${currentLetter}${grid[outer + 1][inner + 1]}${
          grid[outer + 2][inner + 2]
        }${grid[outer + 3][inner + 3]}`;

        if (sequence === MAGIC_WORD) {
          count += 1;
        }
      }

      // V
      const inBoundsVerticalD = outer <= grid.length - MAGIC_WORD.length;
      if (inBoundsVerticalD) {
        const sequence = `${currentLetter}${grid[outer + 1][inner]}${
          grid[outer + 2][inner]
        }${grid[outer + 3][inner]}`;
        if (sequence === MAGIC_WORD) {
          count += 1;
        }
      }

      // _/
      const inBoundsDiagRTLD =
        outer <= grid.length - MAGIC_WORD.length &&
        inner >= MAGIC_WORD.length - 1;

      if (inBoundsDiagRTLD) {
        const sequence = `${currentLetter}${grid[outer + 1][inner - 1]}${
          grid[outer + 2][inner - 2]
        }${grid[outer + 3][inner - 3]}`;
        if (sequence === MAGIC_WORD) {
          count += 1;
        }
      }

      // <-
      const inBoundsAcrossL = inner >= MAGIC_WORD.length - 1;

      if (inBoundsAcrossL) {
        const sequence = `${currentLetter}${grid[outer][inner - 1]}${
          grid[outer][inner - 2]
        }${grid[outer][inner - 3]}`;

        if (sequence === MAGIC_WORD) {
          count += 1;
        }
      }

      // `\
      const inBoundsDiagRTLU =
        outer >= MAGIC_WORD.length - 1 && inner >= MAGIC_WORD.length - 1;

      if (inBoundsDiagRTLU) {
        const sequence = `${currentLetter}${grid[outer - 1][inner - 1]}${
          grid[outer - 2][inner - 2]
        }${grid[outer - 3][inner - 3]}`;
        if (sequence === MAGIC_WORD) {
          count += 1;
        }
      }

      // ^
      const inBoundsVerticalU = outer >= MAGIC_WORD.length - 1;

      if (inBoundsVerticalU) {
        const sequence = `${currentLetter}${grid[outer - 1][inner]}${
          grid[outer - 2][inner]
        }${grid[outer - 3][inner]}`;
        if (sequence === MAGIC_WORD) {
          count += 1;
        }
      }

      // /^
      const inBoundsDiagLTRUp =
        outer >= MAGIC_WORD.length - 1 &&
        inner <= grid[0].length - MAGIC_WORD.length;

      if (inBoundsDiagLTRUp) {
        const sequence = `${currentLetter}${grid[outer - 1][inner + 1]}${
          grid[outer - 2][inner + 2]
        }${grid[outer - 3][inner + 3]}`;

        if (sequence === MAGIC_WORD) {
          count += 1;
        }
      }
    }
  }

  return count;
}

// const input = `MMMSXXMASM
// MSAMXMSMSA
// AMXSXMAAMM
// MSAMASMSMX
// XMASAMXAMM
// XXAMMXXAMA
// SMSMSASXSS
// SAXAMASAAA
// MAMMMXMMMM
// MXMXAXMASX`;
// console.log(scan(input));
