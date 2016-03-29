const srcDirectory = "./src";
const distDirectory = "./dist";
const bootstrapDirectory = `${srcDirectory}/bootstrap`;

export const Paths = {
    SrcDirectory: srcDirectory,
    DistDirectory: distDirectory,
    IndexSrc: `${srcDirectory}/index.html`,
    IndexDist: `${distDirectory}/index.html`,
    TypeScriptSrc: [`${srcDirectory}/scripts/**/*.ts`, `${srcDirectory}/scripts/**/*.js`],
    TypeScriptDist: `${distDirectory}/scripts`,
    SystemJsFile: "./node_modules/systemjs/dist/system.js",
    ScriptsDist: `${distDirectory}/scripts`,
    StylesSrc: `${srcDirectory}/styles/app.scss`,
    StylesDist: `${distDirectory}/styles`,
    SystemConfigDevSrc: `${bootstrapDirectory}/_system.config.dev.js`,
    SystemConfigProdSrc: `${bootstrapDirectory}/_system.config.prod.js`,
    SystemImportSrc: `${bootstrapDirectory}/_system.import.js`,
};