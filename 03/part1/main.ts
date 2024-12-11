export function computeInstructions(input: string) {
  const mulRegx = new RegExp(/mul\((\d+),(\d+)\)/, "g");

  return (
    input
      .match(mulRegx)
      ?.map((command) => {
        const [, a, b] = command.match(/mul\((\d+),(\d+)\)/) || [];
        return parseInt(a, 10) * parseInt(b, 10);
      })
      .reduce((acc, val) => acc + val, 0) || 0
  );
}
