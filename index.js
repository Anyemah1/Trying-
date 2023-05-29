const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
var dragging = null;

inputBox.addEventListener('keypress', e=>{
    if(e.keyCode ===13){
       if(inputBox.value===''){
        alert("You must write something")
       }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.setAttribute('draggable','true')
        listContainer.appendChild(li)
       }
       inputBox.value="";
       
    }
})

document.addEventListener('dragstart', function(event) {
		dragging = event.target;
    event.dataTransfer.setData('text/html', dragging);
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();
});

document.addEventListener('dragenter', function(event) {
    event.target.style['border-bottom'] = 'solid 4px blue';
});

document.addEventListener('dragleave', function(event) {
    event.target.style['border-bottom'] = '';
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    event.target.style['border-bottom'] = '';
    event.target.parentNode.insertBefore(dragging, event.target.nextSibling);
});