import { useState } from "react";

export default function CategoriaForm() {
  
  const [nombre, setNombre] =           useState('');
  const [descripcion, setDescripcion] = useState('');
  
  const procesarFormulario = async(eventoSubmit) => {

    try {
      eventoSubmit.preventDefault();
  
      const categoria = {
        nombre, descripcion
      };
  
      const baseUrl = 'http://localhost:3000';
      const url = baseUrl + '/categoria';
  
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
      });
      if (!respuesta.ok) throw new Error ("No se pudo cargar la categoria...");
      
      const categoriaGuardada = await respuesta.json();
      console.dir(categoriaGuardada);
      
    } catch (error) {
      console.error( error );
    }
  }
  return (
    <>
      <h1>Categoria</h1>
      <form action="form" method="post" onSubmit={procesarFormulario}>
      <label htmlFor= "nombre">Nombre</label>
      <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

      <label>Descripción</label>
      <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>

      <button type="submit">Guardar</button>
      </form>

      Nombre: {nombre} | Descripcion: {descripcion};
    </>
  );
}