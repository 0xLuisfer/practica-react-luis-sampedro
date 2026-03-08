import "./NavegationComponent.css"
import { Link } from "react-router-dom";

function NavegationComponent() {
    return (
        <header className="headerComponent">
            <h2>Práctica React - LUIS SAMPEDRO</h2>
            <nav className="header">
                <ul className="header-list">
                    {/** Links a diferentes páginas */}
                    <li>
                        <ul><Link to="/">INFORMACIÓN PROYECTO</Link></ul>
                    </li>
                    <li>
                        <ul><Link to="/tablaJugadores">EQUIPOS Y JUGADORES</Link></ul>
                    </li>
                    <li>
                        <ul><Link to="/buscarJugador">BUSCAR MANUALMENTE</Link></ul>
                    </li>
                    <li>
                        <ul><Link to="/listarJugadores">LISTAR INFO JUGADORES</Link></ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavegationComponent;