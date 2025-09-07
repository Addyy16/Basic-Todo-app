let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerText = input.value;
    input.value = "";
    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add('delete');
    li.appendChild(delBtn);
    ul.append(li);
});


ul.addEventListener('click', function(event){
   if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
   }
});

