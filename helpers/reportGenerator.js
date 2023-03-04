import moment from "moment";
import fs from "fs";
import path from "path";

export async function getReport(zaproxy) {
  const dir = path.join(path.dirname("."), "./reports");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const report = await zaproxy.core.htmlreport();
  // save reoprt html to reports folder with datetime
  const FileName = "security_report_" + moment().format() + ".html";

  fs.writeFileSync("./reports/" + FileName, report);
  console.log("Report saved to reports folder");
}
