import React from 'react'
import MenuLayout from '../components/MenuLayout'
import FastNav from '../components/FastNav'
export default function Layout({ children }) {
  return (
    <div className='w-full flex h-screen'>
      <MenuLayout />
      <main className='w-full flex flex-col'>
        <FastNav />
        {children}
      </main>
    </div>
  )
}
