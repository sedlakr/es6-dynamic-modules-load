const hash = window.location.hash;
if (hash.includes("old-app")) {
    console.log("going to load old app");
    import('./oldApp.js')
        .then((module) => {
            // Do something with the module.
            console.log("old module loaded", module);
            oldApp.bootstrap.run();
        });
} else {
    console.log("going to load new app");
    import('./newEsModuleApp.js')
        .then((module) => {
            console.log("new module loaded", module);
            // Do something with the module.
            module.bootstrap.run();
            module.default.run();
            testGlobal.run();
        });
}