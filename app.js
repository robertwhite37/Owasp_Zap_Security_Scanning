import ZapClientProxy from "./helpers/zapProxy.js";
import { proxySpinner } from "./helpers/cliuiHelper.js";

const targetUrls = ["https://perform-env-env.perf.bobit.io/history"];

const zapProxy = ZapClientProxy.createZapProxy();
// check proxy is running else wait until it is running
proxySpinner.start();
while ((await zapProxy.checkProxy()) == false) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
proxySpinner.stop();
console.log("Proxy is running");
await zapProxy.createConfigurations();
// get params from cli
const usageType = process.argv[2];
if (usageType == "-au") {
  const username = process.argv[3];
  const password = process.argv[4];
  await zapProxy.setConfigurations(username, password);
}
await zapProxy.startSpiderScan(zapProxy.zaproxy);
await zapProxy.startActiveScan(zapProxy.zaproxy);
// for (let i = 0; i < targetUrls.length; i++) {
//   const element = targetUrls[i];
//   await zapProxy.startCustomUrlScan(element);
// }

await zapProxy.getReport(zapProxy.zaproxy);
proxySpinner.stop();
