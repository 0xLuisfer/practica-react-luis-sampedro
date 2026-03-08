/* Uso de props */
function Jugador({ nombre, equipo, ciudad, edad }) {
    return (
        <div>
            <h3>{nombre}</h3>
            <p>Equipo: {equipo}</p>
            <p>País: {ciudad}</p>
            <p>Edad: {edad}</p>
        </div>
    );
}

export default Jugador;