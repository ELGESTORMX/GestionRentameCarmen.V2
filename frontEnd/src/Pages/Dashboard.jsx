import React from 'react';
import Layout from '../layouts/layout';
import { FaChartLine, FaMoneyBillWave, FaHome } from 'react-icons/fa';
export default function Dashboard() {
  // Datos ficticios
  const ventas = 120;
  const rentas = 45;
  const ingresos = 35000;
  return (
    <Layout>
      <div className='w-full h-screen overflow-y-auto p-6 bg-gray-50'>
        <h1 className='text-3xl font-bold mb-8 text-blue-800'>Dashboard RentameCarmen</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
          <div className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-2'>
            <FaChartLine className='text-blue-600 text-4xl mb-2' />
            <span className='text-2xl font-bold'>{ventas}</span>
            <span className='text-gray-500'>Ventas</span>
          </div>
          <div className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-2'>
            <FaHome className='text-green-600 text-4xl mb-2' />
            <span className='text-2xl font-bold'>{rentas}</span>
            <span className='text-gray-500'>Rentas</span>
          </div>
          <div className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-2'>
            <FaMoneyBillWave className='text-yellow-500 text-4xl mb-2' />
            <span className='text-2xl font-bold'>${ingresos}</span>
            <span className='text-gray-500'>Ingresos</span>
          </div>
        </div>
        {/* Gráfico ficticio */}
        <div className='bg-white rounded-xl shadow-lg p-8'>
          <h2 className='text-xl font-bold mb-4 text-blue-700'>Gráfico de Ventas y Rentas</h2>
          <div className='w-full h-48 flex items-end gap-6'>
            <div className='flex flex-col items-center w-1/2'>
              <div className='bg-blue-400 w-16' style={{height: ventas}}></div>
              <span className='mt-2 text-blue-700 font-semibold'>Ventas</span>
            </div>
            <div className='flex flex-col items-center w-1/2'>
              <div className='bg-green-400 w-16' style={{height: rentas*2}}></div>
              <span className='mt-2 text-green-700 font-semibold'>Rentas</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
