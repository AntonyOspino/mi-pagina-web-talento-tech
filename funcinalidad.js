// Seleccionar el formulario
    const formulario = document.querySelector('.formulario-contacto');
    
    // Agregar evento de submit
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío normal
        
        // Obtener valores de los campos
        const nombre = document.getElementById('nombreCliente').value.trim();
        const descripcion = document.getElementById('descripcionCliente').value.trim();
        const correo = document.getElementById('correoCliente').value.trim();
        
        // Validar campos
        if (nombre === '' || descripcion === '' || correo === '') {
            mostrarError('Por favor, complete todos los campos');
            return;
        }
        
        if (!validarEmail(correo)) {
            mostrarError('Por favor, ingrese un correo electrónico válido');
            return;
        }
        
        // Si todo está correcto, mostrar mensaje de éxito
        mostrarMensaje(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te responderé pronto a ${correo}`);
        
        // Limpiar el formulario
        formulario.reset();
    });
    
    // Función para validar email
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function mostrarError(mensaje) {
        // Eliminar mensajes anteriores
        const mensajeAnterior = document.querySelector('.mensaje-error');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }
        
        // Crear elemento de mensaje
        const divError = document.createElement('div');
        divError.className = 'mensaje-error';
        divError.textContent = mensaje;
        
        // Insertar después del botón
        const boton = document.querySelector('.boton-enviar');
        boton.parentNode.insertBefore(divError, boton.nextSibling);
        
        // Desaparecer después de 5 segundos
        setTimeout(() => {
            divError.style.transition = 'opacity 1s';
            divError.style.opacity = '0';
            setTimeout(() => divError.remove(), 1000);
        }, 5000);
    }
    
    // Función para mostrar mensajes de éxito
    function mostrarMensaje(mensaje) {
        // Eliminar mensajes anteriores
        const mensajeAnterior = document.querySelector('.mensaje-exito');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }
        
        // Crear elemento de mensaje
        const divExito = document.createElement('div');
        divExito.className = 'mensaje-exito';
        divExito.textContent = mensaje;
        divExito.style.color = 'green';
        divExito.style.marginTop = '10px';
        divExito.style.padding = '10px';
        divExito.style.backgroundColor = '#eeffee';
        divExito.style.border = '1px solid #ccffcc';
        divExito.style.borderRadius = '5px';
        
        // Insertar después del botón
        const boton = document.querySelector('.boton-enviar');
        boton.parentNode.insertBefore(divExito, boton.nextSibling);
        
        // Desaparecer después de 15 segundos
        setTimeout(() => {
            divExito.style.transition = 'opacity 1s';
            divExito.style.opacity = '0';
            setTimeout(() => divExito.remove(), 1000);
        }, 15000);
    }