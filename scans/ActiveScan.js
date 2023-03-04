import {thisProgressBar} from "../helpers/cliuiHelper.js";

export async function StartActiveScan(zaproxy,tartgetUrl,contextId,userId) {
    console.log("Starting Active Scan");
    const res = await zaproxy.ascan.scanAsUser(tartgetUrl,contextId,userId);
    const scanId = res.scan;
    let targetStatuses = await zaproxy.ascan.status(scanId);
    console.log(thisProgressBar.update(parseInt(targetStatuses.status), 100));
    let tmpStatus = targetStatuses.status;
    while (targetStatuses.status != "100") {
      if (tmpStatus != targetStatuses.status) {
        tmpStatus = targetStatuses.status;
        console.log(thisProgressBar.update(parseInt(tmpStatus), 100));
      }
      targetStatuses = await zaproxy.ascan.status(scanId);
    }
    console.log(thisProgressBar.update(parseInt(targetStatuses.status), 100));
    console.log("Active scan is completed")
  }