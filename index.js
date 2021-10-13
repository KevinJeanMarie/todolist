var form = document.getElementById("form");
var todoButton = document.getElementById("list")
var tasks =[];


 function onTaskSubmit() {          
    var input = document.getElementById("input")
    tasks.push({value:input.value, status:"to do"})
    console.log(tasks);
    list.innerHTML=""
    tasks.forEach(function(task){
        list.innerHTML = list.innerHTML + `
     <div><p>${task.value}</p><p>${task.status}</p><i class="fas fa-times"></i></div>`
    })

    todoButton.addEventListener("click", addtoDO);
    function splice(event){
        event.preventDefault();
    
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        todoDiv.splice();
        todoButton.splice(todoDiv);
        todoDiv.value ="";
    }

}
