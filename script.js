var plsShow =[]
var showMe = 0

function displayTodo(){
    if(Firdiv.value === ''){
        // alert("Kindly input your value")
        showError.style.display = 'block'
    } else{
        showError.style.display = 'none'
        var date = new Date().toLocaleDateString()
        // console.log(date);
 
        var time = new Date().toLocaleTimeString()
        // console.log(time);



        var TodoList = {
            whyMe: document.getElementById('Firdiv').value,
            MustShow: document.getElementById('Seconddiv').value,


            date,
            time
        
    
        };

        plsShow.push (TodoList)
        // console.log("beans");
        document.getElementById('Firdiv').value= ''
        document.getElementById('Seconddiv').value=''

        date = ''
        time = ''
        showTodos()

    }
}

function showTodos(){
    sndDiv.value =Firdiv.value
    show.innerHTML = ''
    // for(var i = 0; i < plsShow.length; i++)
    plsShow.map((TodoList, i)=>{
        show.innerHTML += `<h5>${i+1}.</h5> 
        <h6>${TodoList.whyMe}</h6>
        <h6>${TodoList.MustShow}</h6>

        <h6>${TodoList.date}</h6>
        <h6>${TodoList.time}</h6>


        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editTodo(${i})">Edit</button>
        <button class="btn btn-danger" onclick="deleteTodo(${i})">Delete</button>
        
        `
    })
        
    
    
}
function deleteTodo(j){
    var confirmation = confirm ("Are you sure you want to delete?")
        if (confirmation == true){
        plsShow.splice(j,1)
    showTodos()
        

    }

}


function editTodo(p){
    showMe = p

}


function editedTodo(){
    if(sndDiv.value == ''){
        alert("Pls, enter an item")
        // showsError.style.display ='block'
    }else {
        // showsError.style.display ='none'
       var date = new Date().toLocaleDateString()
       var time = new Date().toLocaleTimeString()

       
        var TodoList = {
            whyMe: document.getElementById('firstDiv').value,
            MustShow: document.getElementById('sndDiv').value,

            date,
            time
            
        }
        plsShow.splice(showMe, 1, TodoList)
        document.getElementById('sndDiv').value=''

        showTodos()
    }

}
