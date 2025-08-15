import React, { use, useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaRedo } from 'react-icons/fa';
import { useApi } from '../utils/ApiContext';
import Swal from 'sweetalert2';

export default function LogIn() {
    const api = useApi();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const handleShowPassword = () => setShowPassword((prev) => !prev);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const datos = {
                usuario: username,
                contraseña: password
            }
            const { data } = await api.post('/admins/login', datos);
            localStorage.setItem('token', data.response.token);
            localStorage.setItem('user', data.response.usuario);
            localStorage.setItem('rol', data.response.rol);
            Swal.fire({
                title: `¡Bienvenido! ${data.response.usuario}`,
                icon: 'success',
                timer: 1000, // duración en milisegundos
                showConfirmButton: false
            }).then(() => {
                window.location.href = '/dashboard';
            });
        } catch (error) {
            alert(error?.response?.data?.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className='w-full h-screen bg-cover bg-[url("/backgroundLogin.webp")] flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='backdrop-blur-md bg-white/80 border border-blue-200 rounded-2xl shadow-2xl p-10 flex flex-col gap-8 min-w-[320px] w-full max-w-md animate-fade-in'>
                <h2 className='text-3xl font-extrabold text-center mb-4 text-blue-700 tracking-wide drop-shadow'>Iniciar sesión</h2>
                <div className='flex flex-col gap-2 relative'>
                    <label htmlFor='username' className='font-semibold text-blue-600'>Usuario</label>
                    <div className='relative'>
                        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                            <FaUser />
                        </span>
                        <input
                            id='username'
                            type='text'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className='border border-blue-300 rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-white/70 placeholder-gray-400 transition-all duration-200'
                            autoComplete='username'
                            required
                            placeholder='Ingresa tu usuario'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2 relative'>
                    <label htmlFor='password' className='font-semibold text-blue-600'>Contraseña</label>
                    <div className='relative'>
                        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                            <FaLock />
                        </span>
                        <input
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className='border border-blue-300 rounded-lg px-3 py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-white/70 placeholder-gray-400 transition-all duration-200'
                            autoComplete='current-password'
                            required
                            placeholder='Ingresa tu contraseña'
                        />
                        <button
                            type='button'
                            onClick={handleShowPassword}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 focus:outline-none'
                            tabIndex={-1}
                            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <button
                    type='submit'
                    className={`flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold py-3 rounded-full shadow-xl transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-800 disabled:opacity-60 disabled:cursor-not-allowed drop-shadow-lg`}
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <FaRedo className='animate-spin' />
                            Cargando...
                        </>
                    ) : (
                        'Entrar'
                    )}
                </button>
            </form>
        </div>
    )
}
