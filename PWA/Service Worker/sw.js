const filesToCache = [
  "index.html",
  "CSS/main.css",

  "HTML/page1.html",
  "CSS/page1.css",
  "JS/page1.js",

  "Error.html",
  "CSS/Error.css",

  "offline.html",
  "CSS/offline.css",

  "manifest_and_icons/manifest.json",
];

const staticCache = "pages-cache";

/////////////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", (event) => {
  console.log("Installing service worker....");

  // to delete old caches and activate new service worker if any changes are made to chached files
  // self.skipWaiting();

  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

/////////////////////////////////////////////////////////////////////////////////////////

self.addEventListener("activate", (event) => {
  console.log("Service worker activating....");
});

/////////////////////////////////////////////////////////////////////////////////////////

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          console.log("Found ", event.request.url, " in cache");
          return response;
        }
        // console.log('network request....');
        return fetch(event.request).then((res) => {
          if (res.ok) {
            return res;
          } else {
            // To Do 1 : Add custom error page
            return fetch("Error.html");
          }
        });
      })
      // To Do 2 : Add custom offline page
      .catch((error) => {
        console.error("Error in fetching ", error);
        return caches.match("offline.html");
      })
  );
});

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// Old Code ( App download appear one time only bug)

// if (navigator.onLine) {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         console.log("Cashed page loaded");
//         return response;
//       } else {
//         return fetch(event.request)
//           .then((res) => {
//             if (res.status.toString().startsWith("4")) {
//               throw new Error();
//             }
//           })
//           .catch(() => {
//             console.log("Error page loaded");
//             return fetch("Error.html");
//           });
//       }
//     })
//   );
// } else {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         console.log("Cached page loaded");
//         return response;
//       } else {
//         console.log("Offline page loaded");
//         return caches.match("offline.html");
//       }
//     })
//   );
// }
