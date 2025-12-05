import {Link, Router, Routes} from 'react-router-dom'




function NavCategorias() {
 
  return (
    <>
    
    <div class="col-span-5 row-start-2"> 
      <div class="ms-8 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ">
      <p  ><Link to ='/'>Home</Link></p>
 <p ><Link to ='/produtos'>Produtos</Link></p>
 <p class=' font-bold text-decoration-line: underline  text-pink-600'    ><Link to ='/categorias'>Categorias</Link></p>
 <p><Link to ='/pedidos'>Meus Pedidos</Link></p>
      </div>
 </div>

      
      





      
    </>
  )
}

export default NavCategorias


