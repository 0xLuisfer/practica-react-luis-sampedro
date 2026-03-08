import ButtonComponent from './components/ButtonComponent';
import NavegationComponent from './components/NavegationComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaJugadores from './pages/ListaJugadores'
import BuscadorJugador from './components/BuscadorJugador';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element= {
          <>
            <NavegationComponent></NavegationComponent>
            <ButtonComponent></ButtonComponent>
          </>
        }/>


        {/** Otras rutas */}
        <Route path="/listarJugadores" element={<ListaJugadores />} />
        <Route path="/buscarJugador" element={<BuscadorJugador />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
