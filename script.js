document.addEventListener("DOMContentLoaded", function () {
    const punchInButton = document.getElementById("punchInButton");
    const punchOutButton = document.getElementById("punchOutButton");
    const missedPunchButton = document.getElementById("missedPunchButton");
    const missedPunchTime = document.getElementById("missedPunchTime");
    const missedPunchType = document.getElementById("missedPunchType");
    const punchHistory = document.getElementById("punchHistory");
    const clockElement = document.getElementById("clock");

    let lastPunchType = null;

    function updateClock() {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock();

    function addPunch(type, time = null) {
        if (lastPunchType === type) {
            alert(`You can't ${type.toLowerCase()} twice in a row, make sure you aren't missing any punches.`);
            return;
        }

        const timeStamp = time || new Date().toLocaleString();
        const entry = document.createElement("li");
        entry.textContent = `${type}: ${timeStamp}`;
        punchHistory.appendChild(entry);
        lastPunchType = type;
    }

    punchInButton.addEventListener("click", function () {
        addPunch("Punch In");
    });

    punchOutButton.addEventListener("click", function () {
        addPunch("Punch Out");
    });

    missedPunchButton.addEventListener("click", function () {
        if (!missedPunchTime.value) {
            alert("Please select a date and time for the missed punch.");
            return;
        }
        addPunch(missedPunchType.value, new Date(missedPunchTime.value).toLocaleString());
    });
});
