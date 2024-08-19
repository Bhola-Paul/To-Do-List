const input=document.querySelector("#search-input");
const btn=document.querySelector("#search-button");
const list=document.querySelector("#list-container");
function saveData() {
    localStorage.setItem("Data",list.innerHTML)
}
function show() {
    list.innerHTML=localStorage.getItem("Data");
}
function add() {
    if (input.value==="") {
        alert("You must write something!")
    }
    else{
        const li=document.createElement('li');
        li.innerHTML=input.value;
        list.appendChild(li);
        input.value="";
        let span=document.createElement('span');
        span.innerHTML="X";
        li.appendChild(span)
        saveData();
    }
}
list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentNode.remove();
        saveData();
    }
})
btn.addEventListener('click',(e)=>{
    add();
})
show();


