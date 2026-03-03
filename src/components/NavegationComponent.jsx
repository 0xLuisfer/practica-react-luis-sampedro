import "./NavegationComponent.css"

function NavegationComponent() {
    return (
        <header>
            <h2>Práctica React - LUIS SAMPEDRO</h2>
            <nav className="header">
                <ul className="header-list">
                    <li>
                        <ul>Texto1</ul>
                    </li>
                    <li>
                        <ul>Texto2</ul>
                    </li>
                    <li>
                        <ul>Texto3</ul>
                    </li>
                    <li>
                        <ul>Texto3</ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavegationComponent;