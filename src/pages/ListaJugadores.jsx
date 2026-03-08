import Jugador from  "../components/Jugador"
import jugadores from '../datos.json';
import NavegationComponent from "../components/NavegationComponent";

function ListaJugadores() {
    return (
        <>
            <NavegationComponent></NavegationComponent>
            {jugadores.map((jugador, index) => (
                <Jugador
                    key={index}
                    nombre={jugador.nombre}
                    equipo={jugador.equipo}
                    ciudad={jugador.pais}
                    edad={jugador.edad}
                />
            ))}
        </>
    );
}

export default ListaJugadores;