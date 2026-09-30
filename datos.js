// POKÉAPI


document
    .getElementById("formPokemon")
    .addEventListener("submit", function(event) {

        // Evita recargar página
        event.preventDefault();


        const busqueda =
            document
                .getElementById("busquedaPokemon")
                .value
                .trim()
                .toLowerCase();


        if (busqueda === "") {
            return;
        }


        // PokéAPI buscar directamente
        // un Pokémon utilizando su nombre.

        fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)

            .then(response => {

                if (!response.ok) {
                    throw new Error("Pokémon no encontrado");
                }

                return response.json();

            })

            .then(pokemon => {

                const tipos = pokemon.types
                    .map(tipo => tipo.type.name)
                    .join(", ");


                let tabla = `

                    <table>

                        <thead>

                            <tr>
                                <th>Imagen</th>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Tipo</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>
                                    <img
                                        src="${pokemon.sprites.front_default}"
                                        alt="${pokemon.name}"
                                    >
                                </td>

                                <td>${pokemon.id}</td>

                                <td>${pokemon.name}</td>

                                <td>${tipos}</td>

                            </tr>

                        </tbody>

                    </table>

                `;


                document.getElementById("pokemon").innerHTML = tabla;

            })

            .catch(error => {

                document.getElementById("pokemon").innerHTML = `
                    <p class="error">
                        ${error.message}
                    </p>
                `;

            });

    });


// RICK AND MORTY API

document
    .getElementById("formRick")
    .addEventListener("submit", function(event) {

        // Evita recargar página
        event.preventDefault();


        const busqueda =
            document
                .getElementById("busquedaRick")
                .value
                .trim();


        if (busqueda === "") {
            return;
        }


        // La API tiene un mecanismo de búsqueda con el parámetro name.

        fetch(
            `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(busqueda)}`
        )

            .then(response => {

                if (!response.ok) {
                    throw new Error("Personaje no encontrado");
                }

                return response.json();

            })

            .then(data => {

                let tabla = `

                    <table>

                        <thead>

                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Estado</th>
                                <th>Especie</th>
                                <th>Género</th>
                            </tr>

                        </thead>

                        <tbody>

                `;


                // Iteración de los resultados

                data.results.forEach(personaje => {

                    tabla += `

                        <tr>

                            <td>
                                <img
                                    src="${personaje.image}"
                                    alt="${personaje.name}"
                                >
                            </td>

                            <td>${personaje.name}</td>

                            <td>${personaje.status}</td>

                            <td>${personaje.species}</td>

                            <td>${personaje.gender}</td>

                        </tr>

                    `;

                });


                tabla += `

                        </tbody>

                    </table>

                `;


                document.getElementById("rick").innerHTML = tabla;

            })

            .catch(error => {

                document.getElementById("rick").innerHTML = `
                    <p class="error">
                        ${error.message}
                    </p>
                `;

            });

    });


// JSONPLACEHOLDER

document
    .getElementById("formUsuario")
    .addEventListener("submit", function(event) {

        // Evita recargar página
        event.preventDefault();


        const busqueda =
            document
                .getElementById("busquedaUsuario")
                .value
                .trim()
                .toLowerCase();


        if (busqueda === "") {
            return;
        }


        // Primero obtenemos los usuarios y después  el filtrado con JavaScript.

        fetch("https://jsonplaceholder.typicode.com/users")

            .then(response => response.json())

            .then(data => {


                // Filtrar resultados

                const resultados = data.filter(usuario => {

                    return (

                        usuario.name
                            .toLowerCase()
                            .includes(busqueda)

                        ||

                        usuario.username
                            .toLowerCase()
                            .includes(busqueda)

                    );

                });


                if (resultados.length === 0) {

                    document.getElementById("usuarios").innerHTML = `
                        <p class="error">
                            No se encontraron usuarios.
                        </p>
                    `;

                    return;

                }


                let tabla = `

                    <table>

                        <thead>

                            <tr>
                                <th>Nombre</th>
                                <th>Usuario</th>
                                <th>Correo</th>
                                <th>Ciudad</th>
                            </tr>

                        </thead>

                        <tbody>

                `;


                // Iterar resultados

                resultados.forEach(usuario => {

                    tabla += `

                        <tr>

                            <td>${usuario.name}</td>

                            <td>${usuario.username}</td>

                            <td>${usuario.email}</td>

                            <td>${usuario.address.city}</td>

                        </tr>

                    `;

                });


                tabla += `

                        </tbody>

                    </table>

                `;


                document.getElementById("usuarios").innerHTML = tabla;

            })

            .catch(error => {

                document.getElementById("usuarios").innerHTML = `
                    <p class="error">
                        Error al obtener los datos.
                    </p>
                `;

                console.error(error);

            });

    });