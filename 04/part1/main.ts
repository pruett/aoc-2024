export function scan(input: string): number {
  const grid = input.split("\n").map((l) => {
    return l.split("");
  });

  const MAGIC_WORD = "XMAS";
  const MAGIC_WORD_REVERSED = "SAMX";

  console.log({ grid });

  let count = 0;
  const debug = Array.from({ length: grid.length }).map((x) =>
    Array.from({ length: grid[0].length }).map((x) => ".")
  );

  for (let outer = 0; outer < grid.length; outer++) {
    for (let inner = 0; inner < grid[0].length; inner++) {
      const currentLetter = grid[outer][inner];

      // Linear
      let linearWord = "";
      const inBoundsLinear = inner < grid[0].length - 3;
      if (inBoundsLinear) {
        linearWord = `${currentLetter}${grid[outer][inner + 1]}${
          grid[outer][inner + 2]
        }${grid[outer][inner + 3]}`;
      }

      if (linearWord === MAGIC_WORD) {
        count += 1;
      }

      if (linearWord === MAGIC_WORD_REVERSED) {
        count += 1;
      }

      // Vertical
      let verticalWord = "";
      const inBoundsVertical = outer < grid.length - 3;
      if (inBoundsVertical) {
        verticalWord = `${currentLetter}${grid[outer + 1][inner]}${
          grid[outer + 2][inner]
        }${grid[outer + 3][inner]}`;
      }

      if (verticalWord === MAGIC_WORD) {
        count += 1;
      }

      if (verticalWord === MAGIC_WORD_REVERSED) {
        count += 1;
      }

      // Diag L\R
      let diagWordLTR = "";
      const inBoundsDiagLTR =
        outer < grid.length - 3 && inner < grid[0].length - 3;

      if (inBoundsDiagLTR) {
        diagWordLTR = `${currentLetter}${grid[outer + 1][inner + 1]}${
          grid[outer + 2][inner + 2]
        }${grid[outer + 3][inner + 3]}`;
      }

      if (diagWordLTR === MAGIC_WORD) {
        count += 1;
      }

      if (diagWordLTR === MAGIC_WORD_REVERSED) {
        count += 1;
      }

      // Diag R/L
      let diagWordRTL = "";
      const inBoundsDiagRTL = outer < grid.length - 3 && inner > 3;

      if (inBoundsDiagRTL) {
        diagWordRTL = `${currentLetter}${grid[outer + 1][inner - 1]}${
          grid[outer + 2][inner - 2]
        }${grid[outer + 3][inner - 3]}`;
      }

      if (diagWordRTL === MAGIC_WORD) {
        count += 1;
      }

      if (diagWordRTL === MAGIC_WORD_REVERSED) {
        count += 1;
      }
    }
  }

  return count;
}
