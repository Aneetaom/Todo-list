


var ul = document.getElementById("ul");

 var newtask = document.getElementById("newtask");

 function adding(){
// console.log(newtask.value);
if(newtask.value === ""){
    alert("empty! please enter your task")
}
else{
    // console.log(newtask.value);
    var li = document.createElement("li");
    var text = document.createTextNode(newtask.value);
    li.appendChild(text);
    ul.appendChild(li);
    var editbtn = document.createElement("button");
var editbtntext = document.createTextNode("edit");
editbtn.appendChild(editbtntext);
editbtn.setAttribute("onclick" , "edittask(this)")
li.appendChild(editbtn);

var delbtn = document.createElement("button");
var delbtntext= document.createTextNode("Delete");
delbtn.appendChild(delbtntext);
delbtn.setAttribute("onclick" , "deletetask(this)")
li.appendChild(delbtn)
    }
}  

function deleteall(){
ul.innerHTML = ""
}

function edittask(editbtn){
// console.log(editbtn.parentElement.firstChild.nodeValue);
var oldvalue = editbtn.parentElement.firstChild.nodeValue;
var newvalue = prompt("Edit task" , "Edit");

editbtn.parentElement.firstChild.nodeValue = newvalue

}

function deletetask(delbtn){
delbtn.parentNode.remove()
}