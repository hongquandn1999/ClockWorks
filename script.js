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

function updateValue(key, value) {
    if (value < 0) {
        value = 0;
        console.log("Positive Numbers Only");
    }

    if (key == "seconds") {
        if (value < 10) {
            value = "0" + value;
        }
        if (value > 59) {
            value = 59;
        }
    }

    $("#" + key).html(value || 0);
    timeObj[key] = value;

    console.log("Min:" + timeObj.minutes);
    console.log("Second: " + timeObj.seconds);
}

(function detectChanges(key) {
    let input = "#" + key + "-input";

    $(input).change(function() {
        updateValue(key, $(input).val());
    });

    $(input).keyup(function() {
        updateValue(key, $(input).val());
    });
    return arguments.callee;
})("minutes")("seconds");