var input = document.getElementById('input')

function Display(y){
    input.value += y
}

function ClearAll(){
    input.value = ""
}

function Calculate(){
    var result = eval(input.value)
    input.value = result
    
}