$(document).ready(function() {
    const clientes = [
        { nombre: "Juan Perez", descripcion: "Cliente desde que su madre le obligo", imagen: "img1.jfif" },
        { nombre: "Maria Lopez", descripcion: "Cliente desde los tiempos mas remotos", imagen: "img2.jfif" },
        { nombre: "Angel panita", descripcion: "Cliente desde siempre", imagen: "img6.jfif" },
        { nombre: "Carlos Martinez", descripcion: "Cliente desde hoxe", imagen: "img5.jfif" },
        { nombre: "Azucena segunda", descripcion: "Cliente desde ayer", imagen: "img3.jfif" },
        { nombre: "Noel plantas", descripcion: "Cliente desde que le obligamos", imagen: "img4.jfif" }
    ];

    function displayClients(listaClientes) {
        const resultsContainer = $('#resultado');
        resultsContainer.empty();

        listaClientes.forEach((cliente, index) => {
            const listaItem = $(`
                <li class="cliente">
                    <img src="${cliente.imagen}" alt="${cliente.nombre}">
                    <div>
                        <p>${cliente.nombre}</p>
                        <p>${cliente.descripcion}</p>
                    </div>
                    <button class="eliminar" data-index="${index}">eliminar</button>
                </li>
            `);
            resultsContainer.append(listaItem);
        });

        // Añadir evento de eliminación a los botones de eliminar
        $('.eliminar').on('click', function() {
            const index = $(this).data('index');
            clientes.splice(index, 1);
            displayClients(clientes);
        });
    }
 
    displayClients(clientes);

    $('#buscador').on('input', function() {
        const buscar = $(this).val().toLowerCase();
        const filtrarClientes = clientes.filter(cliente => cliente.nombre.toLowerCase().includes(buscar));
        displayClients(filtrarClientes);
    });

    $('#añadir2').on('click', function() {
        $('#formulario-container').show();
    });

    $('#formulario').on('submit', function(event) {
        event.preventDefault();

        const nuevoCliente = {
            nombre: $('#nombre-input').val(),
            descripcion: $('#descripcion-input').val(),
            imagen: $('#imagen-input').val()
        };

        clientes.push(nuevoCliente);
        displayClients(clientes);
        $('#formulario-container').hide();
        $('#formulario')[0].reset();
    });
});
