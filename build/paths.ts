const srcDirectory = "./src";
const distDirectory = "./dist";

export const Paths = {
    SrcDirectory: srcDirectory,
    DistDirectory: distDirectory,
    HtmlSrc: `${srcDirectory}/**/*.html`,
    TypeScriptSrc: `${srcDirectory}/scripts/**/*.ts`,
    VendorSrc: `${srcDirectory}/scripts/vendor/**/*.js`,
    SystemJsFile: "./node_modules/systemjs/dist/system.js",
    MainImportSrc: `${srcDirectory}/bootstrapper/system.main.js`,
    SystemConfigSrc: `${srcDirectory}/bootstrapper/system.config.js`,
    ScriptsDist: `${distDirectory}/scripts`,
    StylesSrc: `${srcDirectory}/styles/app.scss`,
    StylesDist: `${distDirectory}/styles`
};