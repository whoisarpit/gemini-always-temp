function isTempChatActive() {
  const button =
    document.querySelector('[data-test-id="temp-chat-button"]') ||
    document.querySelector('button[aria-label*="Temporary chat" i]');
  if (
    button &&
    (button.getAttribute("aria-pressed") === "true" ||
      button.getAttribute("aria-checked") === "true" ||
      button.classList.contains("active") ||
      button.classList.contains("selected"))
  ) {
    return true;
  }

  return !!document.querySelector('textarea[placeholder*="temporary chat" i]');
}

function clickTempChat() {
  if (isTempChatActive()) return true;

  const button =
    document.querySelector('[data-test-id="temp-chat-button"]') ||
    document.querySelector('button[aria-label*="Temporary chat" i]');
  if (!button) return false;

  button.click();
  return true;
}

function waitAndClick() {
  if (clickTempChat()) return;

  const observer = new MutationObserver(() => {
    if (clickTempChat()) cleanup();
  });

  const intervalId = setInterval(() => {
    if (clickTempChat()) cleanup();
  }, 500);

  const timeoutId = setTimeout(() => {
    cleanup();
  }, 15000);

  function cleanup() {
    observer.disconnect();
    clearInterval(intervalId);
    clearTimeout(timeoutId);
  }

  observer.observe(document.body, { childList: true, subtree: true });
}

browser.storage.local.get("enabled").then((result) => {
  if (result.enabled) waitAndClick();
});
