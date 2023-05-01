import { useEffect, useState } from "react"

export default function CategoriaListado() {
  const[categorias, setCategorias] = useState([]);

  const cargarDatos = async () => {
    try {
      const baseUrl = 'http://localhost:3000';
      const url = baseUrl + '/categoria';
      const respuesta = await fetch(url);

      if(!respuesta.ok) throw new Error ("Problemas al recuperar las categorias!")
      const categories = await respuesta.json();
      setCategorias( categories);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(()=> {
    cargarDatos();
  }, []);
  
  
  return (
    <>
      <h2>Listado de Categorias</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map( categoria => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
              <td>{categoria.nombre}</td>
              <td>{categoria.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}