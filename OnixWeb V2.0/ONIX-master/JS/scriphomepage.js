
// Obtén referencias a los elementos relevantes
const agregarCarritoBtns = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('lista-carrito').querySelector('tbody');

// Crea un objeto para almacenar los elementos en el carrito
const carritoItems = {};

// Agrega un evento de clic a cada botón "Agregar al Carrito"
agregarCarritoBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const id = btn.getAttribute('data-id');
        const nombre = btn.parentNode.querySelector('h3').textContent;
        const precio = btn.parentNode.querySelector('.precio').textContent;
        const imagenSrc = btn.parentNode.parentNode.querySelector('img').getAttribute('src');

        if (carritoItems[id]) {
            carritoItems[id].cantidad++;
        } else {
            carritoItems[id] = {
                cantidad: 1,
                nombre: nombre,
                precio: precio,
                imagenSrc: imagenSrc
            };
        }

        actualizarCarrito();
    });
});

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
    listaCarrito.innerHTML = '';

    for (const item in carritoItems) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="${carritoItems[item].imagenSrc}" width="50" alt="Producto"></td>
            <td>${carritoItems[item].nombre}</td>
            <td>${carritoItems[item].precio}</td>
            <td>${carritoItems[item].cantidad}</td>
        `;
        listaCarrito.appendChild(fila);
    }
}


