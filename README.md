# Gemini Always Temporary Chat

A browser extension that automatically enables temporary chat mode when you open Google Gemini.

Click the toolbar icon to toggle on (blue) or off (grey).

## Install

- **Firefox:** [Install from Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/gemini-always-temporary-chat/)
- **Chrome:** [Install from Chrome Web Store](https://chromewebstore.google.com/detail/gemini-always-temporary-c/kelpmaddlmkdagkfkmnlpjhokcopfnhl)

## Development

### Firefox

1. Clone the repo
2. Open `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on..."
4. Select `firefox/manifest.json`

### Chrome

1. Clone the repo
2. Open `chrome://extensions`
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select the `chrome/` directory

## CI Publish Automation

Pushes to `main` run `.github/workflows/package.yml`, which now:

1. Packages Chrome zip and creates a GitHub release for the manifest version.
2. Uploads and publishes the Chrome extension through Chrome Web Store API v2 (if configured).
3. Submits Firefox to AMO listed channel.

### Required GitHub Secrets

Configure these repository secrets to enable automatic Chrome publish:

- `CWS_PUBLISHER_ID`
- `CWS_EXTENSION_ID`
- `CWS_CLIENT_ID`
- `CWS_CLIENT_SECRET`
- `CWS_REFRESH_TOKEN`
- `AMO_JWT_ISSUER`
- `AMO_JWT_SECRET`

If the Chrome secrets are missing, the workflow will skip Chrome API publish and still continue with release + Firefox submission.
