function startButton() {
    var dateNow = Date(Date.now());
    var getList = document.getElementById("list");
    var listItem = document.createElement("P")
    listItem.innerText = dateNow
    getList.appendChild(listItem)
}