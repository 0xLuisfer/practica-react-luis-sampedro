import { useState, useEffect } from "react";
import datos from "../datos.json";
import NavegationComponent from "./NavegationComponent";

function BuscadorJugador() {
    const [nombre, setNombre] = useState(""); // lo que escribe el usuario
    const [mensaje, setMensaje] = useState(""); // resultado que se muestra
    const [buscar, setBuscar] = useState(false); // para activar la búsqueda

    // useEffect que se ejecuta cuando el usuario escribe en el input o pulsa el botón
    useEffect(() => {
        if (!buscar) return; // bloquea el useEffect hasta que el usuario pulse el botón de 'buscar'
        
        // buscamos jugador y guardamos en una variable
        const jugadorEncontrado = datos.find(
            (j) => j.nombre.toLowerCase() === nombre.toLowerCase()
        );
        
        if (jugadorEncontrado) {
            setMensaje(
                `Jugador ${jugadorEncontrado.nombre}, nacido en ${jugadorEncontrado.pais}, tiene ${jugadorEncontrado.edad} años y juega en ${jugadorEncontrado.equipo}.`
            );
        } else {
            setMensaje(`Jugador "${nombre}" no encontrado.`);
        }

        setBuscar(false); // se resetea para poder hacer una nueva búsqueda
    }, [buscar, nombre]);

    return (
        <>
            <NavegationComponent />
            <p>
                Introduce el nombre de algún jugador tal y como está en los datos (se ignoran mayúsculas y minúsculas).
            </p>
            <input
                type="text" placeholder="Ej: 'Lionel Messi'" value={nombre} onChange={(e) => setNombre(e.target.value)}
            />
            <br /><br />
            <button onClick={() => setBuscar(true)}>Buscar</button>
            
            {/** Renderizado condicional, no muestra nada si aún no existe el mensaje */}
            {mensaje ? <p>{mensaje}</p> : null}
        </>
    );
}

export default BuscadorJugador;