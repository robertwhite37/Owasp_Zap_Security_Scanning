import ZapClient from "zaproxy";
import fetch from "node-fetch";
import {
  StartActiveScan,
  StartAjaxSpiderSearch,
  StartSpiderScan,
} from "../scans/index.js";
import { ProxyConfigurations } from "./configurations.js";
import { getReport } from "./reportGenerator.js";
import { PROXY_HOST, apiKey, tartgetUrl, contextName } from "./constants.js";

export default class ZapProxyClient {
  proxyUrl;
  zaproxy;
  contextId;
  constructor() {
    this.proxyUrl = `http://${
      PROXY_HOST == undefined ? "127.0.0.1" : PROXY_HOST
    }:8080`;

    const zapOptions = { apiKey: apiKey, proxy: this.proxyUrl };

    this.zaproxy = new ZapClient(zapOptions);
  }
  async setConfigurations(username, password) {
    this.contextId = await this.configurations.setAll(username, password);
    this.userId = (
      await this.zaproxy.users.usersList(this.contextId)
    ).usersList[0].id;
  }
  async createConfigurations() {
    this.configurations = new ProxyConfigurations(this.zaproxy, this.proxyUrl);
  }

  static createZapProxy() {
    const zapProxy = new ZapProxyClient();

    return zapProxy;
  }
  getZapProxy() {
    return this.zaproxy;
  }
  async checkProxy() {
    try {
      const proxyCheck = await fetch(this.proxyUrl);
      if (proxyCheck.status == 200) {
        console.log("Proxy is running");
        return true;
      } else {
        console.log("\nProxy is not runnin");
        return false;
      }
    } catch (err) {
      console.log("\nProxy is not running");
      return false;
    }
  }
  async startActiveScan() {
    await StartActiveScan(
      this.zaproxy,
      tartgetUrl,
      this.contextId,
      this.userId
    );
  }
  async startAjaxSpiderSearch() {
    await StartAjaxSpiderSearch(
      this.zaproxy,
      tartgetUrl,
      this.contextId,
      this.userId
    );
  }
  async startSpiderScan() {
    await StartSpiderScan(
      this.zaproxy,
      tartgetUrl,
      this.contextId,
      this.userId
    );
  }
  async startCustomUrlScan(tarUrl) {
    await StartActiveScan(this.zaproxy, tarUrl, this.contextId, this.userId);
  }
  async getReport() {
    await getReport(this.zaproxy);
  }
}
