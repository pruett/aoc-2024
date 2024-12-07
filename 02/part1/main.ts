export function getNumberOfSafeReport(input: string): number {
  const reports = input
    .split("\n")
    .map((line) => {
      return line.split(" ");
    })
    .map((row) => row.map((item) => parseInt(item, 10)));

  const results = reports.map((report) => {
    const direction: "desc" | "asc" =
      report[0] - report[1] > 0 ? "desc" : "asc";

    for (let i = 0; i < report.length; i++) {
      const stepDiff = report[i] - report[i + 1];

      // Criteria for a safe report
      if (direction === "desc" && stepDiff < 0) {
        return false;
      }
      if (direction === "asc" && stepDiff > 0) {
        return false;
      }
      if (Math.abs(stepDiff) < 1 || Math.abs(stepDiff) > 3) {
        return false;
      }
    }

    return true;
  });

  const numberOfSafeReports = results.filter(Boolean).length;
  console.log({ numberOfSafeReports });

  return numberOfSafeReports;
}
