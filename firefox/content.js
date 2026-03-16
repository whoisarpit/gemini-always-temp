function clickTempChat() {
  const btn = document.querySelector('button[data-test-id="temp-chat-button"]');
  if (!btn) return false;
  const isActive =
    btn.classList.contains("active") ||
    btn.getAttribute("aria-pressed") === "true";
  if (!isActive) btn.click();
  return true;
}

function waitAndClick() {
  if (clickTempChat()) return;
  const observer = new MutationObserver(() => {
    if (clickTempChat()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(() => observer.disconnect(), 15000);
}

browser.storage.local.get("enabled").then((result) => {
  if (result.enabled) waitAndClick();
});
