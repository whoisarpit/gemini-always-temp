function updateIcon(enabled) {
  browser.browserAction.setIcon({
    path: enabled ? "icon-48.png" : "icon-grey-48.png",
  });
}

browser.storage.local.get("enabled").then((result) => {
  updateIcon(!!result.enabled);
});

browser.browserAction.onClicked.addListener(() => {
  browser.storage.local.get("enabled").then((result) => {
    const newValue = !result.enabled;
    browser.storage.local.set({ enabled: newValue });
    updateIcon(newValue);
  });
});
