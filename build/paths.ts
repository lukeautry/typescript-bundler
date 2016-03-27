const webRoot = "./src";

const systemJsDirectory = `${webRoot}/scripts/systemjs`;
const systemJsFile = `${systemJsDirectory}/system.js`;

export const Paths = {
    WebRoot: webRoot,
    HtmlSrc: `${webRoot}/**/*.html`,
    TypeScriptSrc: `${webRoot}/scripts/**/*.ts`,
    VendorSrc: `${webRoot}/scripts/vendor/sample.js`,
    SystemJsDirectory: systemJsDirectory,
    SystemJsFile: systemJsFile,
    BootstrapSrc: `${webRoot}/scripts/bootstrap.js`,
    StylesSrc: `styles/app.scss`,
    StylesDist: `${webRoot}/styles`
};