function addTask() {
  var inputValue = document.getElementById("taskInput").value;
  if (inputValue === '') {
    alert("Please enter a task!");
  } else {
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    listItem.appendChild(textNode);
    
    var span = document.createElement("span");
    var closeBtn = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeBtn);
    listItem.appendChild(span);
    
    document.getElementById("taskList").appendChild(listItem);
    
    document.getElementById("taskInput").value = "";
    
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
}
