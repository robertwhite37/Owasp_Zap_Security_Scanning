import clui from "clui";

const Progress = clui.Progress;
const thisProgressBar = new Progress(20);
const spinner = new clui.Spinner("Loading... please wait", ["|", "/", "-", ""]);

const proxySpinner = new clui.Spinner("Waiting for proxy to start", ["|","/","-","",]);

export {spinner, proxySpinner, thisProgressBar};