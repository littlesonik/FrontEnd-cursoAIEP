const formulario = document.querySelector("form");
formulario.addEventListener('submit', (e) => {
  //cancela propagacion del evento 'submit'
  e.preventDefault();
  //recuperar datos del formulario
  const email = document.querySelector("#email").value;
  const contrasena = document.querySelector("#contrasena").value;
  
  //configurar el objeto que se envia por POST
  const usuario = {
    email,
    contrasena
  };

  //llamada remota
  fetch('https://aerial-useful-coin.glitch.me/registro-usuario', {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.dir(data))
  .catch(error => console.error(error))
  ;
});
