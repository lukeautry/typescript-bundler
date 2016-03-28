const webRoot = "./src";

export const Paths = {
    WebRoot: webRoot,
    HtmlSrc: `${webRoot}/**/*.html`,
    TypeScriptSrc: `${webRoot}/scripts/**/*.ts`,
    VendorSrc: `${webRoot}/scripts/vendor/**/*.js`,
    SystemJsFile: "./node_modules/systemjs/dist/system.js",
    BootstrapSrc: `${webRoot}/scripts/bootstrap.js`,
    StylesSrc: `styles/app.scss`,
    StylesDist: `${webRoot}/styles`
};