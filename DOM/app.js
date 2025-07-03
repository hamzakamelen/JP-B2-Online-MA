var div = document.getElementById('abc')

var paragraph = div.getElementsByTagName('p')
console.log(paragraph.length)
// var paragraph = div.childNodes[0]
// var paragraph = div.firstChild
// var para = paragraph[2]
// para.parentNode
// para.nextSibling
// console.log(para.previousSibling)
// console.log(para.nodeName)
// console.log(para.nodeValue)
// paragraph[2].innerHTML = "ABCDEFG"
// paragraph[4].setAttribute('id','new_id')

var create = document.createElement('h1')
var value = document.createTextNode("ABCD")
create.appendChild(value)
div.appendChild(create)

// h1 - Create - No Value/Data - <h1> </h1>
// ABCD - Value - ABCD

// h1.appendchild(value) -<h1>abcd</h1> 
// div.appendchild(h1)