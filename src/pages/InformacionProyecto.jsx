import React from 'react';
import NavegationComponent from '../components/NavegationComponent';

function InformacionProyecto() {
    return (
        <>  
            <NavegationComponent></NavegationComponent>
            <h2>⚽ Asistente de Información de Jugadores de Fútbol ⚽</h2>
            <p>
                Bienvenido a esta aplicación de React. Navega por las diferentes secciones
                en la barra de navegación para explorar todas las funcionalidades disponibles.
            </p>

            <h3>FUNCIONALIDADES PRINCIPALES</h3>

            <h3>1. Tabla de Equipos y Jugadores</h3>
            <p>
                Visualiza todos los jugadores y sus equipos en una tabla organizada, para
                consultar fácilmente la información.
            </p>

            <h3>2. Búsqueda de Jugadores</h3>
            <p>
                Busca un jugador manualmente utilizando la barra de búsqueda y consulta
                rápidamente sus datos personales y deportivos.
            </p>

            <h3>3. Listado Detallado de Jugadores</h3>
            <p>
                Consulta toda la información de cada jugador en un listado completo, con
                nombre, país de nacimiento, edad y equipo actual.
            </p>
        </>
    );
}

export default InformacionProyecto;