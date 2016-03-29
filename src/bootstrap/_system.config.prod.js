System.config({ 
    defaultJSExtensions: true, 
    baseURL: "/scripts",
    paths: {
        // TODO: Not a good hack, find a better way to get systemjs to ignore paths
        "vendor/*": "empty"
    }
});