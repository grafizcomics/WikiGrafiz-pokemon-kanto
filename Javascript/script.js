document.addEventListener('DOMContentLoaded', function() {
    // Primera imagen (materialboxed)
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {
      onOpenStart: function() {
        document.querySelector('.materialbox-overlay').style.display = 'block';
        var closeButton = document.querySelector('.materialbox-close');
        closeButton.style.display = 'block';
        closeButton.classList.add('show');  // Añadimos la clase para mostrar la "X" con animación
      },
      onCloseEnd: function() {
        document.querySelector('.materialbox-overlay').style.display = 'none';
        var closeButton = document.querySelector('.materialbox-close');
        closeButton.classList.remove('show');  // Quitamos la clase para ocultar la "X"
        closeButton.style.display = 'none'; // Ocultamos la "X"
      }
    });
  
    // Lógica para la "X" de cierre
    document.querySelector('.materialbox-close').addEventListener('click', function() {
      instances[0].close(); // Cierra la imagen ampliada
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Segunda imagen (materialboxed1)
    var elems1 = document.querySelectorAll('.materialboxed1');
    var instances1 = M.Materialbox.init(elems1, {
      onOpenStart: function() {
        document.querySelector('.materialbox-overlay1').style.display = 'block';  // Cambiado a 'block' en lugar de 'block1'
        var closeButton1 = document.querySelector('.materialbox-close1');
        closeButton1.style.display = 'block';  // Cambiado a 'block' en lugar de 'block1'
        closeButton1.classList.add('show1');  // Añadimos la clase para mostrar la "X" con animación
      },
      onCloseEnd: function() {
        document.querySelector('.materialbox-overlay1').style.display = 'none';  // Cambiado a 'none' en lugar de 'none1'
        var closeButton1 = document.querySelector('.materialbox-close1');
        closeButton1.classList.remove('show1');  // Quitamos la clase para ocultar la "X"
        closeButton1.style.display = 'none'; // Ocultamos la "X"
      }
    });
  
    // Lógica para la "X" de cierre
    document.querySelector('.materialbox-close1').addEventListener('click', function() {
      instances1[0].close(); // Cierra la imagen ampliada
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    // 3 imagen (materialboxed1)
    var elems2 = document.querySelectorAll('.materialboxed2');
    var instances2 = M.Materialbox.init(elems2, {
      onOpenStart: function() {
        document.querySelector('.materialbox-overlay2').style.display = 'block';  // Cambiado a 'block' en lugar de 'block1'
        var closeButton2 = document.querySelector('.materialbox-close2');
        closeButton2.style.display = 'block';  // Cambiado a 'block' en lugar de 'block1'
        closeButton2.classList.add('show2');  // Añadimos la clase para mostrar la "X" con animación
      },
      onCloseEnd: function() {
        document.querySelector('.materialbox-overlay2').style.display = 'none';  // Cambiado a 'none' en lugar de 'none1'
        var closeButton2 = document.querySelector('.materialbox-close2');
        closeButton2.classList.remove('show2');  // Quitamos la clase para ocultar la "X"
        closeButton2.style.display = 'none'; // Ocultamos la "X"
      }
    });
  
    // Lógica para la "X" de cierre
    document.querySelector('.materialbox-close2').addEventListener('click', function() {
      instances2[0].close(); // Cierra la imagen ampliada
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // 3 imagen (materialboxed1)
    var elems3 = document.querySelectorAll('.materialboxed3');
    var instances3 = M.Materialbox.init(elems3, {
      onOpenStart: function() {
        document.querySelector('.materialbox-overlay3').style.display = 'block';  // Cambiado a 'block' en lugar de 'block1'
        var closeButton3 = document.querySelector('.materialbox-close3');
        closeButton3.style.display = 'block';  // Cambiado a 'block' en lugar de 'block1'
        closeButton3.classList.add('show3');  // Añadimos la clase para mostrar la "X" con animación
      },
      onCloseEnd: function() {
        document.querySelector('.materialbox-overlay3').style.display = 'none';  // Cambiado a 'none' en lugar de 'none1'
        var closeButton3 = document.querySelector('.materialbox-close3');
        closeButton3.classList.remove('show3');  // Quitamos la clase para ocultar la "X"
        closeButton3.style.display = 'none'; // Ocultamos la "X"
      }
    });
  
    // Lógica para la "X" de cierre
    document.querySelector('.materialbox-close3').addEventListener('click', function() {
      instances3[0].close(); // Cierra la imagen ampliada
    });
  });