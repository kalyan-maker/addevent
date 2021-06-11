const input1 = document.createElement('input');
input1.setAttribute('type', 'number');
input1.setAttribute('id', 'input1');
document.body.appendChild(input1)

const input2 = document.createElement('input');
input2.setAttribute('type', 'number');
input2.setAttribute('id', 'input2');
document.body.appendChild(input2)

const button1 = document.createElement("button");
button1.innerText = "submit";
button1.setAttribute('onclick', 'sum()');
document.body.appendChild(button1);

function sum(){
  const num1 = +document.querySelctor('#input1').value
  const num2 = +document.querySelctor('#input2').value
  const result = num1 + num2
  console.log(result)
}

const result = document.createElement("h2");
result.setAttribute('id', 'result');
result.innerText = "";
document.body.appendChild(result);

//print as a text color as given input

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'enter your color');

const button = document.createElement("button");
button.innerText = "submit";
button.setAttribute("onclick", "addItem()");

const list = document.createElement("ul");

document.body.append(input , button , list);

function addItem(){
  const listItem = document.createElement("li");
  listItem.innerText = input.value;
  listItem.style.color = input.value;
  list.append(listItem);
  input.value = "";
}
