import { thisProgressBar } from "../helpers/cliuiHelper.js";

export async function StartSpiderScan(zaproxy, tartgetUrl, contextId, userId) {
  console.log("Starting Ajax Spider");
  const res = await zaproxy.spider.scan(tartgetUrl);
  const scanId = res.scan;
  let targetStatuses = await zaproxy.spider.status(scanId);
  let tmpStatus = targetStatuses.status;
  console.log(thisProgressBar.update(parseInt(tmpStatus), 100));
  while (targetStatuses.status != "100") {
    if (tmpStatus != targetStatuses.status) {
      tmpStatus = targetStatuses.status;
      console.clear();
      console.log(thisProgressBar.update(parseInt(tmpStatus), 100));
    }
    targetStatuses = await zaproxy.spider.status(scanId);
  }
}
