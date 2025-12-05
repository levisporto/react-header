
import './App.css'

import Header from './Pages/Header.jsx'
import NavProdutos from './Pages/NavProdutos.jsx'
import NavPedidos from './Pages/NavPedidos.jsx'
import NavCategorias from './Pages/NavCategorias.jsx'

import {Route, Routes} from 'react-router-dom'
import NavHome from './Pages/NavHome.jsx'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<> <Header /> <NavHome /> </>}></Route>
        <Route path='/produtos' element={<> <Header /> <NavProdutos /> </>}></Route>
        <Route path='/categorias' element={<> <Header /> <NavCategorias /> </>}></Route>
        <Route path='/pedidos' element={<> <Header /> <NavPedidos /> </>}></Route>
        </Routes>
      
    </>
  )
}

export default App
