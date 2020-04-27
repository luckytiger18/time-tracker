var lastTaskTime = "";

function startButton() {
    var dateNow = new Date();
    var getList = document.getElementById("list");
    var listItem = document.createElement("P");
    var getDate = dateNow.getMonth() + "/" + dateNow.getDate() + "/" + dateNow.getFullYear();
    var getTime = dateNow.getHours() + ":" + dateNow.getMinutes() +":" + dateNow.getSeconds();
    var strDate = "Start: "+ getDate + " Time: " + getTime;
    lastTaskTime = getTime 
    listItem.innerText = strDate;
    getList.appendChild(listItem);
}

function stopTask() {
   var textValue = document.getElementById("taskInput").value;
   var getList = document.getElementById("list");
   var newTask = document.createElement("P");
   var dateNow = new Date();
   var getTime = dateNow.getHours() + ":" + dateNow.getMinutes() +":" + dateNow.getSeconds();
   newTask.innerText = "Task: " + textValue + " Completion time: "+ getTime;
   getList.appendChild(newTask);
  document.getElementById("taskInput").innerText = "";
  lastTaskTime = getTime 
}
