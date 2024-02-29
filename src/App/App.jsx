import React, { useEffect, useState } from 'react';


const App = () => {
  const [inputValue, getInputValue] = useState('');

  const handleInput = (e)=>{
    getInputValue(e.target.value)
  }

  const [objectContent, giveObjectContent] = useState('');
  class Persona {
    constructor(nombre, edad){
      this.nombre = nombre;
      this.edad = edad;
    }
  }

  let persona1 = new Persona(inputValue, 25)
  console.log(persona1)
  const arr = [];
  const changeObject = ()=>{
    arr.push(persona1);
    console.log(arr);
    giveObjectContent(arr[0].nombre)
  }

  return (
    <>
      <h1 className='red'>Este es el titulo</h1>

      <h2>{objectContent ? `Nombre: ${objectContent}` : ''}</h2>
      <h2>Algo mass</h2>

      <input 
      type='text'
      placeholder='Escribe algo para cambiar el h1'
      value={inputValue}
      onChange={(e)=>handleInput(e)}/>

      <button onClick={()=> changeObject()}>Holi soy un button</button>

    </>
  )
}

export default App