let timeObj = {
    minutes: 0,
    seconds: 0,
    timeId: 0,
};

function soundAlarm() {
    let amount = 3;
    let audio = new Audio("Time_Sound_Effect.mp3");

    function playSound() {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
    for (let i = 0; i < amount; i++) {
        setTimeout(playSound, 1200 * i);
    }
}