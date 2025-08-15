import React, { useState } from 'react';
import { FaUserEdit, FaTrashAlt, FaUserPlus } from 'react-icons/fa';
import Layout from '../layouts/layout';

export default function PanelUsers() {
  // Datos ficticios de usuarios
  const permisosEjemplo = [
    ['Visualizar roles', 'Crear roles', 'Eliminar roles'],
    ['Editar usuarios', 'Ver módulos'],
    ['Sin permisos asignados'],
    ['Ver clientes', 'Editar módulos'],
  ];
  const usuariosFicticios = Array.from({ length: 37 }, (_, i) => ({
    id: i + 1,
    nombre: `Usuario ${i + 1}`,
    foto: '',
    permisos: permisosEjemplo[i % permisosEjemplo.length],
  }));

  const [usuarios, setUsuarios] = useState(usuariosFicticios);
  const [busqueda, setBusqueda] = useState('');
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(10);

  const usuariosFiltrados = usuarios.filter(u =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  const totalPaginas = Math.ceil(usuariosFiltrados.length / porPagina);
  const usuariosPagina = usuariosFiltrados.slice((pagina - 1) * porPagina, pagina * porPagina);

  function handleEliminar(id) {
    setUsuarios(usuarios.filter(u => u.id !== id));
  }

  function handleEditar(id) {
    // lógica de edición
    alert('Editar usuario ' + id);
  }

  function handleCrear() {
    // lógica de creación
    alert('Crear nuevo usuario');
  }

  return (
    <Layout>
      <div className='w-full h-screen p-6 bg-gray-50'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-800'>Panel de Usuarios</h1>
          <button onClick={handleCrear} className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition'>
            <FaUserPlus /> Crear usuario
          </button>
        </div>
        <div className='flex flex-wrap items-center gap-4 mb-4 justify-between'>
          <div className='flex items-center gap-2'>
            <span className='text-gray-700'>Mostrar</span>
            <select value={porPagina} onChange={e => { setPorPagina(Number(e.target.value)); setPagina(1); }} className='border rounded px-2 py-1 focus:outline-none'>
              {[10, 20, 30, 40, 50].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <span className='text-gray-700'>usuarios por página</span>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='text'
              value={busqueda}
              onChange={e => { setBusqueda(e.target.value); setPagina(1); }}
              placeholder='Buscar usuario...'
              className='border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div className='flex items-center gap-2 ml-auto'>
            <button
              onClick={() => setPagina(p => Math.max(1, p - 1))}
              disabled={pagina === 1}
              className='p-2 text-blue-700 font-bold disabled:opacity-50'
            >
              {'<<'}
            </button>
            <span className='font-semibold text-blue-700 text-[0.8rem]'>{pagina} de {totalPaginas} páginas</span>
            <button
              onClick={() => setPagina(p => Math.min(totalPaginas, p + 1))}
              disabled={pagina === totalPaginas}
              className='p-2 text-blue-700 font-bold disabled:opacity-50'
            >
              {'>>'}
            </button>
          </div>
        </div>
        <div className='overflow-x-auto bg-white rounded-xl shadow-lg' style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-100 sticky top-0 z-10'>
              <tr>
                <th className='px-4 py-2 text-left font-semibold text-gray-700 bg-gray-100'>Foto</th>
                <th className='px-4 py-2 text-left font-semibold text-gray-700 bg-gray-100'>Nombre</th>
                <th className='px-4 py-2 text-center font-semibold text-gray-700 bg-gray-100'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuariosPagina.map(usuario => (
                <tr key={usuario.id} className='hover:bg-gray-50'>
                  <td className='px-4 py-2'>
                    {usuario.foto ? (
                      <img src={usuario.foto} alt={usuario.nombre} className='w-10 h-10 rounded-full object-cover border-2 border-blue-400' />
                    ) : (
                      <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl'>
                        {usuario.nombre[0]}
                      </div>
                    )}
                  </td>
                  <td className='px-4 py-2 font-medium text-gray-800'>{usuario.nombre}</td>
                  <td className='px-4 py-2 flex justify-center gap-3'>
                    <button onClick={() => handleEditar(usuario.id)} className='bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full shadow transition'>
                      <FaUserEdit />
                    </button>
                    <button onClick={() => handleEliminar(usuario.id)} className='bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow transition'>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  );
}
