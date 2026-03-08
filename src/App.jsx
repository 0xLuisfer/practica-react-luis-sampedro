import TableComponent from './components/TableComponent';
import NavegationComponent from './components/NavegationComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaJugadores from './pages/ListaJugadores'
import BusquedaJugador from './pages/BusquedaJugador';
import InformacionProyecto from './pages/InformacionProyecto';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element= {
          <>
            <InformacionProyecto></InformacionProyecto>
          </>
        }/>


        {/** Otras rutas */}
        <Route path="/listarJugadores" element={<ListaJugadores />} />
        <Route path="/buscarJugador" element={<BusquedaJugador />} />
        <Route path="/tablaJugadores" element={<TableComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
