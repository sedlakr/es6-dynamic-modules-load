const hash = window.location.hash;
const oldAppSrcPath = './oldApp.js';
const oldAppStyles = [
    "./src/oldApp.css",
    "./src/oldApp2.css",
];
const newAppStyles = [
    "./src/newApp.css",
]

function loadDynamicCss(stylesPaths) {
    const head = document.getElementsByTagName("head")[0];

    stylesPaths.forEach(s => {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = s;
        head.appendChild(style);
    })
}

if (hash.includes("old-app")) {
    console.log("going to load old app");
    import(oldAppSrcPath)
        .then((module) => {
            loadDynamicCss(oldAppStyles);
            // Do something with the module.
            console.log("old module loaded", module);
            oldApp.bootstrap.run();
        });
} else {
    console.log("going to load new app");
    import('./newEsModuleApp.js')
        .then((module) => {
            loadDynamicCss(newAppStyles);
            console.log("new module loaded", module);
            // Do something with the module.
            module.bootstrap.run();
            module.default.run();
            testGlobal.run();
        });
}