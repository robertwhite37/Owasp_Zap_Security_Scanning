import {
  contextName,
  contextInclude,
  contextPath,
  LOGIN_URL,
  apiKey,
} from "./constants.js";
import axios from "axios";
import qs from "qs";
export class ProxyConfigurations {
  constructor(zaproxy, proxyUrl) {
    this.zaproxy = zaproxy;
    this.proxyUrl = proxyUrl;
  }

  async setAll(username, password) {
    return await this.importContext();
  }

  async importContext() {
    const data = qs.stringify({
      apikey: apiKey,
      contextFile: contextPath,
    });
    const config = {
      method: "post",
      url: `${this.proxyUrl}/JSON/context/action/importContext/`,
      data: data,
    };

    try {
      const response = await axios(config);
      this.contextId = response.data.contextId;
      console.log("Context successfully imported");
    } catch (err) {
      console.log(err);
      process.exit(1);
    }

    return this.contextId;
  }
}
