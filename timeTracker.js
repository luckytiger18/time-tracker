var lastTaskTime = Date.now();

function startButton() {
    var dateNow = new Date();
    var getList = document.getElementById("list");
    var listItem = document.createElement("P");
    var getDate = dateNow.getMonth() + "/" + dateNow.getDate() + "/" + dateNow.getFullYear();
    var getTime = dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
    var strDate = "Start: " + getDate + " Time: " + getTime;
    lastTaskTime = Date.now();
    listItem.innerText = strDate;
    getList.appendChild(listItem);
}

function stopTask() {
    var textValue = document.getElementById("taskInput").value;
    var getList = document.getElementById("list");
    var newTask = document.createElement("P");
    var dateNow = new Date();
    var getTime = dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
    document.getElementById("taskInput").innerText = "";
    var elaspedSeconds = elapsedTime(lastTaskTime);
    var elaspedTime = bunchOfSeconds(elaspedSeconds);
    newTask.innerText = "Task: " + textValue + " Completion time: " + getTime + " " + elaspedTime;
    getList.appendChild(newTask);
    lastTaskTime = Date.now();
}

// utility function
function elapsedTime(preTime) {
    var getNowTime = Date.now();
    console.log(getNowTime);
    console.log(preTime);
    return (getNowTime - preTime) / 1000
}

// utility function
function bunchOfSeconds(secs) {
    var seconds = 0;
    var hours = 0;
    var minutes = 0
    console.log(secs)

    while (secs > 3600) {
        hours += 1;
        secs -= 3600;
    }
    while (secs > 60) {
        minutes += 1;
        secs -= 60;
    }
    seconds = secs
    return "Elapsed Time: " + hours + ":" + minutes + ":" + Math.floor(seconds)
}