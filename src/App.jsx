import TableComponent from './components/TableComponent';
import NavegationComponent from './components/NavegationComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaJugadores from './pages/ListaJugadores'
import BuscadorJugador from './pages/BuscadorJugador';
import InformacionProyecto from './pages/InformacionProyecto';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element= {
          <>
            <NavegationComponent></NavegationComponent>
            <TableComponent></TableComponent>
          </>
        }/>


        {/** Otras rutas */}
        <Route path="/listarJugadores" element={<ListaJugadores />} />
        <Route path="/buscarJugador" element={<BuscadorJugador />} />
        <Route path="/informacionProyecto" element={<InformacionProyecto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
