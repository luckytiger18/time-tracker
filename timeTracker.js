function startButton() {
    var dateNow = new Date();
    var getList = document.getElementById("list");
    var listItem = document.createElement("P");
    var strDate = "Start: "+ dateNow.getMonth() + "/" + dateNow.getDate() + "/" + dateNow.getFullYear()
    listItem.innerText = strDate
    getList.appendChild(listItem);
}

function stopTask() {
   var textValue = document.getElementById("taskInput").value;
   var getList = document.getElementById("list");
   var newTask = document.createElement("P");
   newTask.innerText = "Task: " + textValue
   getList.appendChild(newTask)
  document.getElementById("taskInput").innerText = "";
}