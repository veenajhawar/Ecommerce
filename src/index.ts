import { exec } from "child_process";

const common = `src/tests/features/**/*.feature \
  --require-module ts-node/register \
  --require src/tests/step-definitions/**/*.ts \
  --require src/hooks/**/*.ts \
  --format html:playwright-report/report.html`;

const profiles = {
  smoke: `${common} --tags "@smoke"`,
  regression: `${common} --tags "@regression"`,
  all: common,
};

const profile = process.argv[2] || "all";
const command = `npx cucumber-js ${profiles[profile as keyof typeof profiles]}`;

exec(command, { encoding: "utf-8" }, (error, stdout) => {
  console.log(stdout);
  if (error) {
    throw new Error("Some automation test(s) have failed! - Please review.");
  }
});