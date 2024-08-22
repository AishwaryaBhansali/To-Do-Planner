const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); 

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let cross = document.createElement("cross");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(perform){
    if(perform.target.tagName === "LI"){
        perform.target.classList.toggle("checked");
        saveData();
    }
    else if(perform.target.tagName === "CROSS"){
        perform.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();