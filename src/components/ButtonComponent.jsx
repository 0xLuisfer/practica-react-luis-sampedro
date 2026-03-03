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
            <button onClick={mostrarInfo}>Listar todos los jugadores</button>
            {/* Transformamos a texto, sin ninguna función adicional (null) y con indentación de 2 */}
            <pre>{JSON.stringify(info, null, 2)}</pre>
        </>
    );
}

export default ButtonComponent;