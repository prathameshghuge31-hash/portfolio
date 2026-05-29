function addTask() {

    let input = document.getElementById("taskInput");

    let li = document.createElement("li");

    let currentTime = new Date().toLocaleString();

li.innerHTML =
input.value + " <small>(" + currentTime + ")</small>";

    li.onclick = function () {

    li.classList.toggle("completed");

    saveData();
};

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function (event) {

    event.stopPropagation();

    li.remove();

    updateTaskCount();


    saveData();
};

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    saveData();
}

document.getElementById("taskInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});

function saveData(){
    updateTaskCount();
    localStorage.setItem(
        "data",
        document.getElementById("taskList").innerHTML
    );
}

function showTask(){
    document.getElementById("taskList").innerHTML =
    localStorage.getItem("data");
}

showTask();
updateTaskCount();

function darkMode(){
    document.body.classList.toggle("dark");
}
function updateTaskCount(){

    let totalTasks =
    document.querySelectorAll("#taskList li").length;

    document.getElementById("taskCount").innerText =
    "Total Tasks: " + totalTasks;
}
document.getElementById("searchInput")
.addEventListener("keyup", function () {

    let searchText = this.value.toLowerCase();

    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(function(task){

        if(task.innerText.toLowerCase().includes(searchText)){
            task.style.display = "block";
        }
        else{
            task.style.display = "none";
        }

    });

});
function clearTasks(){

    document.getElementById("taskList").innerHTML = "";

    saveData();

    updateTaskCount();
}