const buildPath = "./build";

require("ts-node").register({ 
    noProject: true
});
 
require("require-dir")(`${buildPath}/tasks`);