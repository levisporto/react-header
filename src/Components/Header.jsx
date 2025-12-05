
import { useState } from 'react'


function Header() {
 
  return (
    <>
    <div class="grid ">
    <div class="col-span-5"><h1>
      <header class="ms-8 flex flex-col gap-2  sm:flex-row sm:items-center sm:gap-6 sm:py-4 justify-between">
        <div  class="flex  gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
        <img src="/digital.svg" alt="Ícone da Digital" />
<p class=" font-bold text-2xl  text-pink-600">
    Digital Store
</p>
<div class=" w-5xl flex px-4 py-3 rounded-md border border-white bg-gray-100 border-white-500   mx-auto">
        <input placeholder="Pesquisar produto..."
          class="w-full outline-none bg-transparent text-gray-600 text-sm" />
           <img class='w-4 h-4 self-center' src="/lupa.png" alt="Lupa da Busca" />
        
      </div>


 
 
        </div>
        <div  class="flex flex-col gap-10 p-8 sm:flex-row   ">
        <p class='text-decoration-line: underline  text-gray-600'>Cadastre-se</p>
        <button type="button" class="bg-pink-500 hover:bg-purple-700 text-white py-1  px-6 rounded" >Entrar</button> 
        <img src="/carrinho.png" alt="Ícone do Carrinho" />
        </div>
      </header></h1></div>
    <div class="col-span-5 row-start-2"> 
      <div class="ms-8 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ">
      <p class=' font-bold text-decoration-line: underline  text-pink-600' >Home</p>
 <p>Produtos</p>
 <p>Categorias</p>
 <p>Meus pedidos</p>
      </div>
 </div>
</div>
      
      





      
    </>
  )
}

export default Header


