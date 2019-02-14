document.getElementById('add-todo')
        .addEventListener('click', addtodo);
document.getElementById('remove-todo')
        .addEventListener('click', removetodo);
//for adding todo
function addtodo(e){
    var input_value = document.getElementById('name').value;
    var todo_value = document.textContent = input_value;
    var value = document.createTextNode(todo_value);
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    document.getElementById('name').value = ''
    setTimeout(()=>{
            li.classList = "visual"
    },500)
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.setAttribute('name', 'todo')
    var label = document.createElement('label');
    var todo = {
        list: todo_value
    }
    ul.appendChild(li);
    li.appendChild(input);
    label.appendChild(value)
    li.appendChild(label);
    ul.appendChild(li)
    
    if(localStorage.getItem('todos') === null ){
        var todos = [];
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
        
    } else {
      var todos = JSON.parse(localStorage.getItem('todos'))
      todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
       
    }
     
}

function fetchtodo(){
    var todo_list =JSON.parse(localStorage.getItem('todos'))
    var ul = document.getElementById('list')
//    ul.innerHTML = '';
    for(var i=0; i<todo_list.length; i++ ){
        var list = todo_list[i].list
             ul.innerHTML += "<li><input id='check'  type='checkbox' name='todo' > <label>"+list+"</label"
        } 
        
       
    }

//for removing todo
function removetodo(e){
    var ul = document.getElementById('list');
    var li = ul.children;
    for(var i=0; i<li.length; i++){
       while(li[i] && li[i].children[0].checked){
           ul.removeChild(li[i])
           
       }
    
    }
   
}

$(document).ready(function(e){
    $('input[type=text]').keydown(function(e){
        if(e.keyCode == 13){
            addtodo()
            
            e.target.value.name = ''
        }
    })
            //for showing delete button
            $('input[name="todo"]').click(function() {
                $("#remove-todo").toggle($('input[name="todo"]').is(":checked" ) );
            }); 
    
            $(".jumbotron").mousemove(function(event) {
            var eye = $(".eye");
            var x = (eye.offset().left) + (eye.width() / 2);
            var y = (eye.offset().top) + (eye.height() / 2);
            var rad = Math.atan2(event.pageX - x, event.pageY - y);
            var rot = (rad * (180 / Math.PI) * -1) + 180;
            eye.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
            });
            });
        
})

























