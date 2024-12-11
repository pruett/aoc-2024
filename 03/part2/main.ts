export function computeInstructions(input: string) {
  const regex = new RegExp(/mul\((\d+),(\d+)\)|do\(\)|don't\(\)/, "g");

  const allParts = input.match(regex) || [];

  let addInstructions = true;
  const finalParts: any[] = [];

  for (let i = 0; i < allParts.length; i++) {
    if (allParts[i].includes("don't()")) {
      addInstructions = false;
    }
    if (allParts[i].includes("do()")) {
      addInstructions = true;
    }

    addInstructions &&
      !allParts[i].includes("do()") &&
      finalParts.push(allParts[i]);
  }

  return finalParts
    .map((command) => {
      const [, a, b] = command.match(/mul\((\d+),(\d+)\)/) || [];
      return parseInt(a, 10) * parseInt(b, 10);
    })
    .reduce((acc, val) => acc + val, 0);
}
