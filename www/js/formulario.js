(function () {

  /**
  * Validar formulario
  * @author Fernando Magrosoto
  * @copyright 2018 MIT
  * @param {event} e Evento
  * @returns VOID
  */
  function validar (e) {
    var f = this;
    var boton = document.getElementById('elFormSubmit');
    boton.disabled = true;

    if (!f.checkValidity()) {
      f.classList.add('formulario-invalido');
      boton.disabled = false;
      e.preventDefault();
      return false;
    }

    e.preventDefault();
    console.log('Enviado!');
  }

  document.getElementById('elForm').addEventListener('submit', validar, false);

})()
