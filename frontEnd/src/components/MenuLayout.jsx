import React from 'react';
import { FaUser, FaBoxes, FaHome, FaChartLine, FaUsers } from 'react-icons/fa';

export default function MenuLayout() {
  return (
    <div className='w-auto min-w-[17%] bg-[#023E8A] h-screen flex flex-col'>
      <div className='w-full h-[8vh] flex items-center px-5 text-white border-b-[1px] gap-4'>
        <div className='bg-white rounded-full p-1 shadow-md flex items-center justify-center'>
          <img src="/logo.png" alt="logo de rentame carmen" className='w-8 h-8 object-contain bg-red-500 rounded-full' />
        </div>
        <p className='font-bold tracking-wide text-lg'>Gestión Rentame.V2</p>
      </div>
      <nav className='flex-1 mt-8'>
        <ul className='flex flex-col gap-4 px-6'>
          <li>
            <a href='/dashboard' className='group flex items-center gap-3 text-white hover:bg-[#0353a4] rounded-lg px-3 py-2 font-medium transition relative'>
              <FaHome className='text-lg' /> Inicio
              <span className='absolute left-10 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-2/3'></span>
            </a>
          </li>
          <li>
            <a href='/panel-usuarios' className='group flex items-center gap-3 text-white hover:bg-[#0353a4] rounded-lg px-3 py-2 font-medium transition relative'>
              <FaUser className='text-lg' /> Usuarios
              <span className='absolute left-10 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-2/3'></span>
            </a>
          </li>
          <li>
            <a href='/panel-clientes' className='group flex items-center gap-3 text-white hover:bg-[#0353a4] rounded-lg px-3 py-2 font-medium transition relative'>
              <FaUsers className='text-lg' /> Clientes
              <span className='absolute left-10 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-2/3'></span>
            </a>
          </li>
          <li>
            <a href='#' className='group flex items-center gap-3 text-white hover:bg-[#0353a4] rounded-lg px-3 py-2 font-medium transition relative'>
              <FaBoxes className='text-lg' /> Inventario
              <span className='absolute left-10 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-2/3'></span>
            </a>
          </li>
          <li>
            <a href='#' className='group flex items-center gap-3 text-white hover:bg-[#0353a4] rounded-lg px-3 py-2 font-medium transition relative'>
              <FaChartLine className='text-lg' /> Ventas
              <span className='absolute left-10 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-2/3'></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
