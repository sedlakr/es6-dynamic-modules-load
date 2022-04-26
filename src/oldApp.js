/* eslint-disable no-use-before-define,no-redeclare */
var oldApp = oldApp || {
    bootstrap: {}
};
// must exported to superglobal window
window.oldApp = oldApp;
(function () {
    oldApp.bootstrap.run = () => {
        console.log("hello world from old app");
        const root = document.getElementById("root");
        root.innerHTML = "hello world from old app";
    }
}());