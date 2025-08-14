console.log("Welcome to Spotify");

// Initialize Varible
let songIndex = 0;
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgress = document.getElementById('myProgress')
let songs = [
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" }
];

// audioElement.play

// Handle play/pause click
masterPlay.addEventListener('click'()=> {
    if(audioElement.paused || audioElement.currentTime <= 0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
} else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
}
})
// Listen to events
myProgress.addEventListener('timeupdate', () => {
    console.log('timeupdate')
})