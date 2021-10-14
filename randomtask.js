function randomTask() {

    var random = document.getElementById("random");
    var list = ["Sport","Menage","Balade","Travail"]
    list.innerHTML
    
    var random = list[Math.floor(Math.random() * list.length -1)];
    var tasks = {
        value : random,
        status : "To Do"
    };
    array.push(tasks)
    inmain.innerHTML = ""
    array.forEach(function(task) {
        inmain.innerHTML = inmain.innerHTML +  `<div class="inside"><p class="text">${task.value}</p> <div class="insideButton"> <button class="mod"> Modifier </button> <button class="x"> <i class="fas fa-trash-alt"></i> </button></div></div>` 
    })
}