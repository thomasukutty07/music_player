const ctrlIcon = document.getElementById("ctrl-icon")
const song = document.getElementById("song")
const progress = document.getElementById("progress")

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
    timer.textContent = `00:00 / ${formatTime(song.duration)}`;
};

song.ontimeupdate = function() {
    progress.value = song.currentTime;
    timer.textContent = `${formatTime(song.currentTime)} / ${formatTime(song.duration)}`;
};

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }
    else{
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    },500)
}
progress.onchange = function(){
    song.play()
    song.currentTime = progress.value
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")

}