// CRUD - Create Read Update Delete

var list = document.getElementById("list")

function Add(){
    var li = document.createElement('li')
    var input = document.getElementById("input")
    var text = document.createTextNode(input.value)
    li.appendChild(text)
    list.appendChild(li)
    input.value = ""

    // Edit Button
    var editbtn = document.createElement('button')
    var editText = document.createTextNode("Edit")
    editbtn.appendChild(editText)
    
    // Delete Button
    var deletebtn = document.createElement('button')
    var delText = document.createTextNode("Delete")
    deletebtn.appendChild(delText)
    deletebtn.setAttribute('onclick','del(this)')

    // Append to Li
    li.appendChild(editbtn)
    li.appendChild(deletebtn)

}

function delAll(){
    list.innerHTML = ""
}

function del(element){
    element.parentNode.remove()
}

// Task
function edit(){}