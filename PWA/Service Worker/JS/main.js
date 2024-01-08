let addBtn = document.getElementById("install");
let installation;
window.addEventListener("beforeinstallprompt", (e) => {
  installation = e;
  addBtn.addEventListener("click", (e) => {
    installation.prompt();

    installation.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "Accepted") {
        console.log("App Installed");
      } else {
        console.log("App installation cancelled");
      }
      installation = null;
    });
  });
});
