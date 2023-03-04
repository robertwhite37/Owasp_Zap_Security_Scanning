// import os from 'os';
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const BASE_URL = "https://perform-env-env.perf.bobit.io/";
const LOGIN_URL = BASE_URL + "jsonrpc/User/SignIn";

const tartgetUrl = "https://perform-env-env.perf.aiberry.io/";
const apiKey = "dfau1kcknoh5rua3477dbuu14k";
const contextName = "Bobit Context";
const contextInclude = "https://perform-env-env.perf.bobit.io/.*";
//read if environment is PROXY_HOST valid
const PROXY_HOST = process.env.PROXY_HOST;

// BobitContext.context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contextPath = "/zap/wrk/AiberryContext.context";

const Constants = {
  BASE_URL,
  LOGIN_URL,
  tartgetUrl,
  apiKey,
  contextName,
  contextInclude,
  PROXY_HOST,
  contextPath,
};

export default Constants;
export {
  BASE_URL,
  LOGIN_URL,
  tartgetUrl,
  apiKey,
  contextName,
  contextInclude,
  PROXY_HOST,
  contextPath,
};
