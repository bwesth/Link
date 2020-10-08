// // changeColor.onclick = function (element) {
// chrome.tabs.query(
//   {
//     currentWindow: true, // currently focused window
//     active: true, // selected tab
//   },
//   function (foundTabs) {
//     if (foundTabs.length > 0) {
//       var tab = foundTabs[0]; // <--- this is what you are looking for
//       if (tab.url === "https://developer.chrome.com/extensions") {
//         chrome.tabs.update({
//           url: "https://westh.net",
//         });
//       }
//     } else {
//       // there's no window or no selected tab
//     }
//   }
// );
// // };
