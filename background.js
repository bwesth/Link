//Need to store these somehow. Aiki uses cache?
const urls = [
  "https://www.reddit.com/",
  "https://www.facebook.com/",
  "https://9gag.com/",
];

// Redirection function passed to listeners below
function redirect(tabId) {
  chrome.tabs.update(tabId, { url: "localhost:5000" });
}

// https://developer.chrome.com/extensions/webNavigation#event-onBeforeNavigate
// The event "onBeforeNavigate" fires when a navigation is about to occur.
// What is a navigation? I'm sure you can google it.
chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  if (urls.includes(details.url)) {
    redirect(details.tabId);
  }
});
