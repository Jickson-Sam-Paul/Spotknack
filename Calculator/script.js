function add() {
  var n1 = document.getElementById("n1").value; 
  var n2 = document.getElementById("n2").value;
  var sum = parseFloat(n1) + parseFloat(n2);
  alert(sum);
}

function sub() {
  var n1 = document.getElementById("n1").value; 
  var n2 = document.getElementById("n2").value;
  var difference = parseFloat(n1) - parseFloat(n2);
  alert(difference);
}

function mul() {
  var n1 = document.getElementById("n1").value; 
  var n2 = document.getElementById("n2").value;
  var product = parseFloat(n1) * parseFloat(n2);
  alert(product);
}

function division() {
  var n1 = document.getElementById("n1").value; 
  var n2 = document.getElementById("n2").value;
  var quotient = parseFloat(n1) / parseFloat(n2);
  alert(quotient);
}