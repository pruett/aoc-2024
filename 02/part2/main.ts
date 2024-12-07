export function getNumberOfSafeReports(input: string): number {
  const reports = input
    .split("\n")
    .map((line) => {
      return line.split(" ");
    })
    .map((row) => row.map((item) => parseInt(item, 10)));

  const results = reports.map((report) => {
    return checkReport(report, 0);
  });

  console.log({ results });
  const numberOfSafeReports = results.filter(Boolean).length;
  console.log({ numberOfSafeReports });

  return numberOfSafeReports;
}

function checkReport(report: number[], idx: number): boolean {
  if (idx >= report.length) {
    return false;
  }

  // try original sequence first
  if (idx === 0) {
    if (isValidSequence(report)) {
      return true;
    }
  }

  // Try removing one element at a time
  for (let i = 0; i < report.length; i++) {
    const variation = [...report.slice(0, i), ...report.slice(i + 1)];
    if (isValidSequence(variation)) {
      return true;
    }
  }

  return false;
}

function isValidSequence(report: number[]): boolean {
  const dir: "desc" | "asc" = report[0] - report[1] > 0 ? "desc" : "asc";

  for (let i = 0; i < report.length - 1; i++) {
    const stepDiff = report[i] - report[i + 1];
    if (
      (dir === "desc" && stepDiff < 0) ||
      (dir === "asc" && stepDiff > 0) ||
      Math.abs(stepDiff) < 1 ||
      Math.abs(stepDiff) > 3
    ) {
      return false;
    }
  }

  return true;
}
