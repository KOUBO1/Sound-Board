const sounds = ['Oof', 'Fart', 'Shocked', 'Laughing', 'White-Tee-Rizz', 'Among-Us', 'Pookie', 'Ew', 'DUN-DUN-DUN', 'OH-MY-GAWD', 'Rizz-Sound','Snore','Anita-Max-Win','Dadas-Home','Sin-City-Wasnt-Made-For-U','Dolphin','Quack'];


sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});
document.getElementById('stopButton').addEventListener('click', stopSongs);

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}