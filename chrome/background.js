function updateIcon(enabled) {
  chrome.action.setIcon({
    path: enabled ? "icon-48.png" : "icon-grey-48.png",
  });
}

chrome.storage.local.get("enabled", (result) => {
  updateIcon(!!result.enabled);
});

chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get("enabled", (result) => {
    const newValue = !result.enabled;
    chrome.storage.local.set({ enabled: newValue });
    updateIcon(newValue);
  });
});
