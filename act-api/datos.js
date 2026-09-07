// Función para crear tablas

function crearTabla(datos, columnas, contenedorId) {

    let tabla = "<table>";

    // Crea encabezados

    tabla += "<thead>";

    tabla += "<tr>";

    columnas.forEach(columna => {

        tabla += `<th>${columna.nombre}</th>`;

    });

    tabla += "</tr>";

    tabla += "</thead>";


    // Crea cuerpo

    tabla += "<tbody>";


    // Itera los datos obtenidos

    datos.forEach(dato => {

        tabla += "<tr>";


        columnas.forEach(columna => {

            tabla += `<td>${columna.valor(dato)}</td>`;

        });


        tabla += "</tr>";

    });


    tabla += "</tbody>";

    tabla += "</table>";


    // Muestra la tabla

    document.getElementById(contenedorId).innerHTML = tabla;

}



// POKEAPI

function consultarPokemon() {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")

        .then(response => response.json())

        .then(data => {

            // Obtiene información completa de cada Pokémon
            const promesas = data.results.map(pokemon =>
                fetch(pokemon.url)
                    .then(response => response.json())
            );

            return Promise.all(promesas);

        })

        .then(pokemones => {

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
            `;


            // Iterar los Pokémon

            pokemones.forEach(pokemon => {

                const tipos = pokemon.types
                    .map(tipo => tipo.type.name)
                    .join(", ");


                tabla += `

                    <tr>

                        <td>
                            <img 
                                src="${pokemon.sprites.front_default}"
                                alt="${pokemon.name}"
                                width="80"
                            >
                        </td>

                        <td>${pokemon.id}</td>

                        <td>
                            ${pokemon.name}
                        </td>

                        <td>${tipos}</td>

                    </tr>

                `;

            });


            tabla += `
                    </tbody>

                </table>
            `;


            document.getElementById("pokemon").innerHTML = tabla;

        })

        .catch(error => {

            document.getElementById("pokemon").innerHTML =
                "<p>Error al obtener los datos.</p>";

            console.error(error);

        });

}



// RICK AND MORTY API

function consultarPersonajes() {

    fetch("https://rickandmortyapi.com/api/character")

        .then(response => response.json())

        .then(data => {

            const columnas = [

                {
                    nombre: "Nombre",

                    valor: personaje => personaje.name
                },

                {
                    nombre: "Estado",

                    valor: personaje => personaje.status
                },

                {
                    nombre: "Especie",

                    valor: personaje => personaje.species
                },

                {
                    nombre: "Género",

                    valor: personaje => personaje.gender
                }

            ];


            crearTabla(
                data.results,
                columnas,
                "rick"
            );

        })

        .catch(error => {

            document.getElementById("rick").innerHTML =
                "<p>Error al obtener los datos.</p>";

            console.error(error);

        });

}



// JSONPLACEHOLDER

function consultarUsuarios() {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => response.json())

        .then(data => {

            const columnas = [

                {
                    nombre: "Nombre",

                    valor: usuario => usuario.name
                },

                {
                    nombre: "Usuario",

                    valor: usuario => usuario.username
                },

                {
                    nombre: "Correo",

                    valor: usuario => usuario.email
                },

                {
                    nombre: "Ciudad",

                    valor: usuario => usuario.address.city
                }

            ];


            crearTabla(
                data,
                columnas,
                "usuarios"
            );

        })

        .catch(error => {

            document.getElementById("usuarios").innerHTML =
                "<p>Error al obtener los datos.</p>";

            console.error(error);

        });

}