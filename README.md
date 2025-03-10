# YT-Downloader

YT-Downloader is a powerful browser extension that enables users to download YouTube videos, audio (MP3), subtitles, and thumbnails effortlessly.

![YT-Downloader Extension](https://i.ibb.co.com/fV2kr8zL/20250310-114150.jpg)

## 🚀 Features

- 🎥 Download YouTube videos in various resolutions.
- 🎵 Extract and save audio as MP3 files.
- 📝 Download subtitles in multiple languages.
- 🖼️ Save video thumbnails easily.
- ⚡ User-friendly and seamless integration with YouTube.

## 🔧 Installation

1. 📥 Download the extension files or clone this repository.
2. 🌐 Open your browser and go to `chrome://extensions/` (for Chrome-based browsers) or `about:addons` (for Firefox).
3. 🛠️ Enable "Developer Mode" (for Chrome-based browsers).
4. 📂 Click on "Load unpacked" and select the extension folder.
5. ✅ The extension will be installed and ready to use.

## 🎯 How to Use

1. 🔎 Open any YouTube video.
2. 🛑 You will see download options below the video player.
3. ⬇️ Click on the respective button to download subtitles, thumbnails, video, or MP3 audio.

## 📡 Fetching Data

This extension uses `fetch()` API to retrieve video, audio, and subtitle data. Below is an example of fetching video metadata:

```javascript
async function fetchVideoData(videoUrl) {
    const response = await fetch(videoUrl);
    const data = await response.blob();
    return URL.createObjectURL(data);
}
```

## 📊 Profiling the Extension Performance

To optimize and profile the extension:

1. 🛠️ Open Developer Tools (`F12` or `Ctrl+Shift+I`).
2. 📈 Navigate to the **Performance** tab.
3. ▶️ Click **Record** and use the extension.
4. 🔍 Analyze the performance and optimize network requests.

## ⚠️ Disclaimer

This extension is for educational purposes only. Downloading copyrighted content without permission may violate YouTube's terms of service.

## 📜 License

This project is licensed under the MIT License.
