var testGlobal = {
    run() {
        console.log("testGlobal run");
    }
}
window.testGlobal = testGlobal;
const newEsModuleApp = {
    run: () => {
        console.log("hello world from new app");
        const root = document.getElementById("root");
        root.innerHTML = "hello world from new app";
    }
}
export default newEsModuleApp;

export const bootstrap = newEsModuleApp;