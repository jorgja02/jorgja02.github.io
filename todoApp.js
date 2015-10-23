addToDo = function() {
              var todoEntry = document.querySelector("#todoInput");
			  var todoList = document.querySelector("#todoPage");
              var ul = document.createElement("ul");
              var li = document.createElement("li");
			  
			  var c = document.createElement("input");
			  c.type = 'checkbox';
			  c.onclick = doneTask;

              var entry = document.createTextNode(todoEntry.value);
              <!-- Needs a checkbox node, not text -->
              
			  li.className = priority.value;
			  li.appendChild(c);
              li.appendChild(entry);
              
			  

              ul.appendChild(li);
              todoList.appendChild(ul);

          }

doneTask = function() {
  if (this.checked) {
    this.parentNode.classList.add("done")
  }
  else{
    this.parentNode.cssList.remove("done")
  }
}

window.onload = function() { restorelist("ul", doneTask)}
