import React from 'react';
import { FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function FastNav() {
  // Simulación de datos
  const usuario = {
    nombre: 'kassandra',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZmlsJTIwZGVsJTIwdXN1YXJpb3xlbnwwfHwwfHx8MA%3D%3D' // Si tiene foto, poner la URL aquí
  };
  const notificaciones = 2;
  function Logout() {
    localStorage.clear();
    Swal.fire({
      title: 'Sesión cerrada',
      icon: 'success',
      timer: 1000,
      showConfirmButton: false
    }).then(() => {
      window.location.href = '/'; // Redirigir al login
    });
  }
  return (
  <div className='w-full bg-white border-b border-gray-200 shadow-sm h-[9vh] flex justify-end items-center gap-6 px-5'>
      <div className='relative'>
        <FaBell className='text-blue-700 text-xl cursor-pointer' />
        {notificaciones > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold shadow'>
            {notificaciones}
          </span>
        )}
      </div>
      {usuario.foto ? (
        <img src={usuario.foto} alt='usuario' className='w-8 h-8 rounded-full object-cover border-2 border-blue-400 shadow' />
      ) : (
        <FaUserCircle className='text-blue-700 text-3xl' />
      )}
      <p className='font-semibold text-blue-900'>{usuario.nombre || 'Undefined'}</p>
      <button
        className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full font-semibold shadow flex items-center gap-2 transition duration-200'
        onClick={() => {Logout()}}
      >
        <FaSignOutAlt />
        Salir
      </button>
    </div>
  );
}
