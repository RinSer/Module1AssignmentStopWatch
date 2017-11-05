// Global variables
var data = {
    time: 0,
    running: false,
    interval: undefined
};

// Main action
setUp();

// Function definitions

// Starts or stops the timer
function startStopTimer() {

    if (!data.running) {

        data.interval = setInterval(function() {

            data.time += 1e-2;
            showTime();

        }, 10);

        data.running = true;

    } else {

        clearInterval(data.interval);

        data.running = false;

    }
    
}

// Resets timer and time values
function resetTimer() {

    if (data.interval) {

        clearInterval(data.inteval);

    }

    data.time = 0;
    showTime();
    clearTimes();

}

// Helper function to display the time
function showTime() {

    document.getElementById("time").innerHTML = data.time === 0 ? data.time : data.time.toFixed(2);

}

// Helper function to add stop timer values
function addTime() {

    var li = document.createElement('li');
    li.innerHTML = data.time === 0 ? data.time : data.time.toFixed(2);
    document.getElementById("times").appendChild(li);

}

// Helper function to clear stop timer values
function clearTimes() {

    document.getElementById("times").innerHTML = "Past Times";

}

// Set up function
function setUp() {

    // Enacts Start/Stop button
    document.getElementById("start-stop").addEventListener('click', startStopTimer);
    // Enacts Reset button
    document.getElementById("reset").addEventListener('click', resetTimer);
    // Enacts Record Time button
    document.getElementById("record-time").addEventListener('click', addTime);
    // Enacts key presses
    document.addEventListener('keypress', function(event) {

        switch (event.key) {

            case 's':
                startStopTimer();
                break;
            case 'r':
                resetTimer();
                break;
            case 't':
                addTime();
                break;

        }

    });

}