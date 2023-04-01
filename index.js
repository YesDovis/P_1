var boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
  boton.style.backgroundColor = "red";
});
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if(name === '' || email === '') {
    alert('Please enter both name and email');
  } else {
    // Send form data using fetch
    fetch('/submit-form', {
      method: 'POST',
      body: JSON.stringify({ name: name, email: email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
});