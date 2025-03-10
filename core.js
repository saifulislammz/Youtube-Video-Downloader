function downloadYoutubeSubtitles() {
    if ('/watch' === location.pathname) {

        if (!document.getElementById('doyosu')) {
            let dysElement = document.createElement("div");
            dysElement.id = "doyosu";
            dysElement.innerHTML = `
                <a id='doyosuLink' href='https://www.downloadyoutubesubtitles.com/?u=${encodeURIComponent(window.location.href)}' target='_blank' style='vertical-align:middle;margin-right: 10px;font-size:13px;text-decoration:none;color:#0f0f0f;padding:10px;background-color: #f1f1f1;border-radius: 25px;' title='Download subtitles of this video by DownloadYoutubeSubtitles.com'>
                    <img style='margin-right:5px;vertical-align:middle;width: 22px;height: 22px;' src='https://i.ibb.co/N39DCzb/subtitle64.png'><span style='line-height:22px;'>Download Subtitles</span>
                </a>
                <a id='downloadThumbnail' href='' target='_blank' style='vertical-align:middle;margin-right: 10px;font-size:13px;text-decoration:none;color:#0f0f0f;padding:10px;background-color: #f1f1f1;border-radius: 25px;' title='Download thumbnail of this video'>
                    <img style='margin-right:5px;vertical-align:middle;width: 22px;height: 22px;' src='https://i.ibb.co/7tBT6XB/image-download48.png'><span style='line-height:22px;'>Download Thumbnail</span>
                </a>
                <a id='downloadVideo' href='' target='_blank' style='vertical-align:middle;margin-right: 10px;font-size:13px;text-decoration:none;color:#0f0f0f;padding:10px;background-color: #f1f1f1;border-radius: 25px;' title='Download video of this video'>
                    <img style='margin-right:5px;vertical-align:middle;width: 22px;height: 22px;' src='https://i.ibb.co/mHTZ5C4/videodownload64.png'><span style='line-height:22px;'>Download Video</span>
                </a>
                <a id='downloadMp3' href='' target='_blank' style='vertical-align:middle;margin-right: 10px;font-size:13px;text-decoration:none;color:#0f0f0f;padding:10px;background-color: #f1f1f1;border-radius: 25px;'>
                    <img style='margin-right:5px;vertical-align:middle;width: 22px;height: 22px;' src='https://i.ibb.co/y86C6Qc/mp348.png'><span style='line-height:22px;'>Download mp3</span>
                </a>
            `;
            dysElement.setAttribute("style", "height:22px;margin-top:20px;margin-right:5px;");

            let belowElement = document.getElementById("below");
            belowElement.insertBefore(dysElement, belowElement.children[0]);
            
            // Set the href attribute of the download links
            updateDownloadLinks();
        } else {
            document.getElementById('doyosuLink').setAttribute("href", "https://www.downloadyoutubesubtitles.com/?u=" + encodeURIComponent(window.location.href) + "");
            updateDownloadLinks();
        }
    }
}

function updateDownloadLinks() {
    let videoId = new URLSearchParams(window.location.search).get('v');
    if (videoId) {
        let thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        document.getElementById('downloadThumbnail').setAttribute('href', thumbnailUrl);
        
        let mp3Url = `https://www.y2mate.com/youtube-mp3/${videoId}`;
        document.getElementById('downloadMp3').setAttribute('href', mp3Url);

		let mp4Url = `https://www.y2mate.com/download-youtube/${videoId}`;
        document.getElementById('downloadVideo').setAttribute('href', mp4Url);
    }
}

let urlofthecurrent = window.location.hostname;

if (urlofthecurrent.search(/downloadyoutubesubtitles\.com/i) !== -1) {
    //console.log('its downloadyoutubesubtitles');
    document.getElementById('dysDedector').setAttribute("value", "1");
} else if (urlofthecurrent.search(/youtube\.com/i) !== -1) {
    window.addEventListener('yt-navigate-finish', function () {
        //alert('url changed');
        downloadYoutubeSubtitles();
    });
}
