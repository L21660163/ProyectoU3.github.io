document.addEventListener("DOMContentLoaded", function () {
    try {
        const images = document.querySelectorAll('.gallery-image');
        const modal = document.getElementById('myModal');
        const modalIframe = document.getElementById('modalIframe');
        const closeModal = document.getElementById('closeModal');

        // Verifica si los elementos fueron correctamente seleccionados
        if (!modal || !modalIframe || !closeModal) {
            throw new Error('No se encontraron uno o más elementos del modal.');
        }

        if (images.length === 0) {
            console.warn('No se encontraron imágenes con la clase .gallery-image');
        }

        console.log(images, modal, modalIframe, closeModal); // Verifica si los elementos son seleccionados

        images.forEach(image => {
            image.addEventListener('click', function () {
                try {
                    const url = this.getAttribute('data-url');
                    if (!url) {
                        throw new Error('No se encontró la URL para la imagen seleccionada.');
                    }
                    console.log('URL seleccionada:', url); // Verifica si se obtiene la URL correcta
                    modalIframe.src = url;
                    modal.style.display = 'block';
                } catch (error) {
                    console.error('Error al intentar mostrar la imagen:', error);
                }
            });
        });

        closeModal.addEventListener('click', function () {
            try {
                modal.style.display = 'none';
                modalIframe.src = '';
            } catch (error) {
                console.error('Error al intentar cerrar el modal:', error);
            }
        });

        window.addEventListener('click', function (event) {
            try {
                if (event.target === modal) {
                    modal.style.display = 'none';
                    modalIframe.src = '';
                }
            } catch (error) {
                console.error('Error al intentar cerrar el modal haciendo clic fuera:', error);
            }
        });
    } catch (error) {
        console.error('Error en la inicialización del modal:', error);
    }
});
