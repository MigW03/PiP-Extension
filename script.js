let path = window.location.href

// Se está no Youtube
if (path.includes("youtube")) {
    const playerControBar = document.querySelector(".ytp-right-controls")
    const settingButton = document.querySelector(".ytp-settings-button")

    const button = document.createElement("button");
    button.innerHTML = "PiP"
    button.setAttribute("class", "ytp-button")
    button.setAttribute("style", "align-self: center")
    settingButton.after(button)
    // playerControBar.after(button)
    let pageVideo = document.querySelector("video")
    button.onclick = () => pageVideo.requestPictureInPicture()
    // document.querySelector("video").requestPictureInPicture()

}
// Se está na Twitch
else if (path.includes("twitch")) {

}
