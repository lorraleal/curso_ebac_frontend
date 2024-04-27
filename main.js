document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var campoA = parseFloat(document.getElementById('campoA').value);
  var campoB = parseFloat(document.getElementById('campoB').value);
  var message = document.getElementById('message');

  if (campoB > campoA) {
      message.textContent = "Formulário válido!";
      message.className = "message valid";
  } else {
      message.textContent = "Formulário inválido. O número B deve ser maior que o número A.";
      message.className = "message invalid";
  }
});