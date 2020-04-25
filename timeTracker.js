function startButton() {
    var dateNow = new Date();
    var getList = document.getElementById("list");
    var listItem = document.createElement("P");
    var strDate = "Start: " + dateNow.getMonth() + "/" + dateNow.getDate() + "/" + dateNow.getFullYear()
    listItem.innerText = strDate
    getList.appendChild(listItem);
}

function stopButton() {

    document.getElementById("taskInput")
}