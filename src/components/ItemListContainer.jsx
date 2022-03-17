import React from 'react'
import { useState } from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting, producto}) => {
    const [agregarCarrito, setAgregarCarrito] = useState(false)

    const agregaCarrito = () => {
        setAgregarCarrito(!agregarCarrito)
        console.log(agregarCarrito)
    }

  return (
    <div>
        <h1>{greeting}</h1>
        <h3>{producto}</h3>
        <ItemCount valorInicial={1} stock={5}/>
        <button onClick={agregaCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default ItemListContainer