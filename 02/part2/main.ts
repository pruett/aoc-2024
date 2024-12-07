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
      // re-run checkreport with different element removed
    }
  }
  return true;
}