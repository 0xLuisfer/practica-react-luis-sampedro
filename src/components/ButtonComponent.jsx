import { useState } from "react";
import datos from "../datos.json";

function ButtonComponent() {

    // estado para volver a renderizar el componente cuando se pulsa el botón
    const [info, actualizarInfo] = useState();

    function mostrarInfo() {
        const objeto = JSON.parse(JSON.stringify(datos), (key, value) => {
            // devolvemos el valor en mayúscula en caso de que sea el nombre o el equipo del jugador
            if (key === "equipo" || key === "nombre") {
                return value.toUpperCase();
            }

            // devolvemos el valor sin modificar para el resto
            return value;
        });
        
        // finalmente actualizamos el valor de info con lo que hemos recibido en la variable objeto
        actualizarInfo(objeto);
    }

    return (
        <>
            <button onClick={mostrarInfo}>Jugadores y equipos</button><br /><br />
            {/* Transformamos a texto, sin ninguna función adicional (null) y con indentación de 2 */}
            {info ? (
                <table border="1" cellPadding="5">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>País</th>
                            <th>Equipo</th>
                            <th>Edad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((jugador) => (
                            <tr key={jugador}>
                                <td>{jugador.id}</td>
                                <td>{jugador.nombre}</td>
                                <td>{jugador.pais}</td>
                                <td>{jugador.equipo}</td>
                                <td>{jugador.edad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ):(
                <p>↑ Pulse el botón ↑</p>
            )}
        </>
    );
}

export default ButtonComponent;