var form = document.getElementById("form");
var todoButton = document.getElementById("list")
var tasks =[];
var goAway = document.getElementById("go-away")






// remove.addEventListener('mousemove', function(event) {
//     console.log(event);
// });

 function onTaskSubmit() {          
    var input = document.getElementById("input")
    var values = {
        value:input.value,
        status:"to do"
    }
    tasks.push(values)
    console.log(tasks);
    
    printTasks()
       
}

function onClickRemove(indexElement){
    
    // console.log(indexElement);
    // console.log(`onClickRemove tablau task ${tasks.length}`);
    tasks.splice(indexElement,1)
    // console.log(`onClickRemove after remove tablau task ${tasks.length}`);
    
    printTasks()
    
    // list = taskeList()
    // console.log(`voici ${list}`);
}
function printTasks(){
    list.innerHTML=""
    tasks.forEach(function(task,index){
        
        var croix = `<i class="fas fa-times remove"  onclick="onClickRemove(${index})"></i>`
        list.innerHTML = list.innerHTML + `
     <div id="go-away">
        <p>${task.value}</p>
        <p>${task.status} </p>
        ${croix}
        <i class="fas fa-pencil-alt modification"></i>
    </div>`
    })
<<<<<<< HEAD

    todoButton.addEventListener("click", addtoDO);
    function splice(event){
        event.preventDefault();
    
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        todoDiv.splice();
        todoButton.splice(todoDiv);
        todoDiv.value ="";
    }

=======
    return
>>>>>>> 9d76937c92e6f228ba0f41136da1e5ea3034426c
}






