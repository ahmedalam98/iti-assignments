const http = require("http");
const fs = require("fs");

let mainHtml = "";
let welcome = "";
let mainCss = "";
let welcomeCss = "";
let favicon = "";
let pngImage = "";
let bgImage = "";
let ajaxScript = "";
let clientsJson = "";

fs.readFile("../Client/main.html", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  mainHtml = data;
});

fs.readFile("../Client/welcome.html", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  welcome = data;
});

fs.readFile("../Client/main.css", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  mainCss = data;
});

fs.readFile("../Client/welcome.css", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  welcomeCss = data;
});

fs.readFile("../Client/favicon.ico", (err, data) => {
  if (err) {
    throw err;
  }
  favicon = data;
});

fs.readFile("../Client/assets/logo.png", (err, data) => {
  if (err) {
    throw err;
  }
  pngImage = data;
});

fs.readFile("../Client/assets/bg.png", (err, data) => {
  if (err) {
    throw err;
  }
  bgImage = data;
});

fs.readFile("../Client/ajax.js", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  ajaxScript = data;
});

fs.readFile("./clients.json", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  clientsJson = data;
});

http
  .createServer((req, res) => {
    switch (req.method) {
      // Handling GET request
      case "GET":
        switch (req.url) {
          case "/":
          case "/main.html":
          case "/Client/main.html":
            res.writeHead(200, "OK", { "Content-Type": "text/html" });
            res.write(mainHtml);
            break;

          case "/main.css":
          case "/Client/main.css":
            res.writeHead(200, "OK", { "Content-Type": "text/css" });
            res.write(mainCss);
            break;

          case "/welcome.html":
          case "/Client/welcome.html":
            res.writeHead(200, "OK", { "Content-Type": "text/html" });
            res.write(welcome);
            break;

          case "/welcome.css":
          case "/Client/welcome.css":
            res.writeHead(200, "OK", { "Content-Type": "text/css" });
            res.write(welcomeCss);
            break;

          case "/favicon.ico":
          case "/Client/favicon.ico":
            res.writeHead(200, "OK", { "Content-Type": "image/x-icon" });
            res.write(favicon);
            break;

          case "/assets/bg.png":
          case "/Client/assets/bg.png":
            res.writeHead(200, "OK", { "Content-Type": "image/png" });
            res.write(bgImage);
            break;

          case "/assets/logo.png":
          case "/Client/assets/logo.png":
            res.writeHead(200, "OK", { "Content-Type": "image/png" });
            res.write(pngImage);
            break;

          case "/ajax.js":
          case "/Client/ajax.js":
            res.writeHead(200, "OK", { "Content-Type": "text/javascript" });
            res.write(ajaxScript);
            break;

          case "/clients.json":
          case "/Server/clients.json":
            res.writeHead(200, "OK", { "Content-Type": "application/json" });
            res.write(clientsJson);
            break;

          default:
            res.writeHead(404, "Not Found", { "Content-Type": "text/plain" });
            res.write("Error has occured while posting data ...");
            break;
        }

        res.end();
        break;

      // Handling POST request
      case "POST":
        let formQueryString = [];

        req.on("data", (data) => {
          let allData = data.toString();
          formQueryString = allData.split("&");
        });

        req.on("end", () => {
          let clientData = {
            clientName: formQueryString[1].split("=")[1].replace(/\+/g, " "),
            clientEmail: formQueryString[0].split("=")[1].replace("%40", "@"),
            clientAddress: formQueryString[2].split("=")[1].replace(/\+/g, " "),
            clientPhone: formQueryString[3].split("=")[1],
          };

          // ----------------- Bonus 1 -----------------
          // Read existing data from clients.json
          fs.readFile("clients.json", "utf8", (err, data) => {
            if (err) {
              throw err;
            }

            let clients = [];

            if (data) {
              clients = JSON.parse(data);
            }

            clients.push(clientData);

            // update clients.json
            fs.writeFile("clients.json", JSON.stringify(clients), (err) => {
              if (err) {
                console.error("Error creating file : ", err);
              } else {
                console.log("File created");
              }
            });

            let info = welcome
              .replace("{clientName}", clientData.clientName)
              .replace("{clientEmail}", clientData.clientEmail)
              .replace("%40", "@")
              .replace("{clientAddress}", clientData.clientAddress)
              .replace("{clientPhone}", clientData.clientPhone);

            res.write(info);
            res.end();
          });
        });
        break;

      default:
        break;
    }
  })
  .listen(7000);
