console.log("WELCOME TO PLAYER");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio('audio1.mp3'); // Ensure the file exists
let masterplay = document.getElementById('masterplay'); 
let myprogressbar = document.getElementById('myprogressbar'); 

// Initialize repeat state
let isRepeatActive = false;

// Select buttons
let repeatButton = document.getElementById('repeat');
let forwardButton = document.querySelector('.fa-step-forward');
let backwardButton = document.querySelector('.fa-step-backward');

// Song items
let songItems = Array.from(document.getElementsByClassName('songitem'));

// Songs array
let songs = [
    { songName: "Night Changes", filePath: "audio1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Wake Me Up", filePath: "Ishq Hai_192(ghantalele.com).mp3", coverPath: "covers/2.jpg" },
    { songName: "Thinking Out Loud", filePath: "Valam_192(ghantalele.com).mp3", coverPath: "covers/3.jpg" },
    { songName: "Love Yourself", filePath: "audio4.mp3", coverPath: "covers/4.jpg" }
];

// Play/Pause toggle
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myprogressbar.value = progress;
});

// Seek functionality
myprogressbar.addEventListener('input', () => {
    audioElement.currentTime = (myprogressbar.value / 100) * audioElement.duration;
});

// Play selected song
function playSong(index) {
    songIndex = index;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0; // Start from the beginning
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

    // Update song info
    document.querySelector('.songinfo img').src = songs[songIndex].coverPath; // Update song cover
    document.querySelector('.songinfo').textContent = songs[songIndex].songName; // Update song name

    // Highlight the playing song in the list
    songItems.forEach((item, idx) => {
        item.classList.remove('active');
        if (idx === index) {
            item.classList.add('active');
        }
    });
}

// Add click event to each song item
songItems.forEach((element, index) => {
    element.addEventListener('click', () => {
        playSong(index);console.log("WELCOME TO PLAYER");

        // Initialize variables
        let songIndex = 0;
        let audioElement = new Audio('audio1.mp3'); // Ensure the file exists
        let masterplay = document.getElementById('masterplay'); 
        let myprogressbar = document.getElementById('myprogressbar'); 
        
        // Initialize repeat state
        let isRepeatActive = false;
        
        // Select buttons
        let repeatButton = document.getElementById('repeat');
        let forwardButton = document.querySelector('.fa-step-forward');
        let backwardButton = document.querySelector('.fa-step-backward');
        
        // Song items
        let songItems = Array.from(document.getElementsByClassName('songitem'));
        
        // Songs array
        let songs = [
            { songName: "Night Changes", filePath: "audio1.mp3", coverPath: "covers/1.jpg" },
            { songName: "Wake Me Up", filePath: "Ishq Hai_192(ghantalele.com).mp3", coverPath: "covers/2.jpg" },
            { songName: "Thinking Out Loud", filePath: "audio3.mp3", coverPath: "covers/3.jpg" },
            { songName: "Love Yourself", filePath: "audio4.mp3", coverPath: "covers/4.jpg" }
        ];
        
        // Play/Pause toggle
        masterplay.addEventListener('click', () => {
            if (audioElement.paused || audioElement.currentTime <= 0) {
                audioElement.play();
                masterplay.classList.remove('fa-play-circle');
                masterplay.classList.add('fa-pause-circle');
            } else {
                audioElement.pause();
                masterplay.classList.remove('fa-pause-circle');
                masterplay.classList.add('fa-play-circle');
            }
        });
        
        // Update progress bar
        audioElement.addEventListener('timeupdate', () => {
            let progress = (audioElement.currentTime / audioElement.duration) * 100;
            myprogressbar.value = progress;
        });
        
        // Seek functionality
        myprogressbar.addEventListener('input', () => {
            audioElement.currentTime = (myprogressbar.value / 100) * audioElement.duration;
        });
        
        // Play selected song
        function playSong(index) {
            songIndex = index;
            audioElement.src = songs[songIndex].filePath;
            audioElement.currentTime = 0; // Start from the beginning
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        
            // Update song info
            document.querySelector('.songinfo img').src = songs[songIndex].coverPath; // Update song cover
            document.querySelector('.songinfo').textContent = songs[songIndex].songName; // Update song name
        
            // Highlight the playing song in the list
            songItems.forEach((item, idx) => {
                item.classList.remove('active');
                if (idx === index) {
                    item.classList.add('active');
                }
            });
        }
        
        // Add click event to each song item
        songItems.forEach((element, index) => {
            element.addEventListener('click', () => {
                playSong(index);
            });
        });
        
        // Forward Button Functionality
        forwardButton.addEventListener('click', () => {
            songIndex = (songIndex + 1) % songs.length; // Loop back to the first song if at the last song
            playSong(songIndex);
        });
        
        // Backward Button Functionality
        backwardButton.addEventListener('click', () => {
            songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop to the last song if at the first song
            playSong(songIndex);
        });
        
        // Toggle repeat mode on button click
        repeatButton.addEventListener('click', () => {
            isRepeatActive = !isRepeatActive; // Toggle state
            repeatButton.classList.toggle('active'); // Add/remove styling
            audioElement.loop = isRepeatActive; // Enable/disable loop
            console.log(`Repeat mode: ${isRepeatActive}`);
        });
        
        // Automatically play the next song when the current song ends
        audioElement.addEventListener('ended', () => {
            console.log('Song ended. Repeat active:', isRepeatActive);
            if (!isRepeatActive) {
                songIndex = (songIndex + 1) % songs.length; // Move to the next song
                playSong(songIndex);
            }
        });
        
    });
});

// Forward Button Functionality
forwardButton.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length; // Loop back to the first song if at the last song
    playSong(songIndex);
});

// Backward Button Functionality
backwardButton.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop to the last song if at the first song
    playSong(songIndex);
});

// Toggle repeat mode on button click
repeatButton.addEventListener('click', () => {
    isRepeatActive = !isRepeatActive; // Toggle state
    repeatButton.classList.toggle('active'); // Add/remove styling
    audioElement.loop = isRepeatActive; // Enable/disable loop
    console.log(`Repeat mode: ${isRepeatActive}`);
});

// Automatically play the next song when the current song ends
audioElement.addEventListener('ended', () => {
    console.log('Song ended. Repeat active:', isRepeatActive);
    if (!isRepeatActive) {
        songIndex = (songIndex + 1) % songs.length; // Move to the next song
        playSong(songIndex);
    }
});



