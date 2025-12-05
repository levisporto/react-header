
import './App.css'

import Header from './Pages/Header.jsx'
import BreadcrumbProdutos from './Pages/BreadcrumbProdutos.jsx'
import BreadcrumbPedidos from './Pages/BreadcrumbPedidos.jsx'
import BreadcrumbCategorias from './Pages/BreadcrumbCategorias.jsx'

import {Route, Routes} from 'react-router-dom'
import BreadcrumbHome from './Pages/BreadcrumbHome.jsx'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<> <Header /> <BreadcrumbHome /> </>}></Route>
        <Route path='/produtos' element={<> <Header /> <BreadcrumbProdutos /> </>}></Route>
        <Route path='/categorias' element={<> <Header /> <BreadcrumbCategorias /> </>}></Route>
        <Route path='/pedidos' element={<> <Header /> <BreadcrumbPedidos /> </>}></Route>
        </Routes>
      
    </>
  )
}

export default App
