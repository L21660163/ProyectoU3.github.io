document.getElementById("toggle-btn").addEventListener("click", function () {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");

    // Alterna las clases 'collapsed' y 'shifted' para cambiar el tamaño del menú y mover el contenido
    sidebar.classList.toggle("collapsed");
    content.classList.toggle("shifted");

    // Cambia el texto "Menú" a un icono cuando el sidebar está colapsado
    var brandName = document.getElementById("brand-name");
    if (sidebar.classList.contains("collapsed")) {
        brandName.innerHTML = '<i class="bi bi-list"></i>'; // Cambia a un icono
    } else {
        brandName.innerHTML = 'Menú'; // Restaura el texto original
    }
});