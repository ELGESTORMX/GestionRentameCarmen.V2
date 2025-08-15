// filepath: c:\Users\tavov\OneDrive\Desktop\nuew\front-end\src\routes\router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from '../Pages/LogIn';
import Dashboard from '../Pages/Dashboard';
import PanelUsers from '../Pages/PanelUsers';
import PanelClients from '../Pages/PanelClients';
function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} /> {/* Nueva ruta */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* Nueva ruta */}
      <Route path="/panel-usuarios" element={<PanelUsers />} /> {/* Nueva ruta */}
      <Route path="/panel-clientes" element={<PanelClients />} /> {/* Nueva ruta */}
    </Routes>
  );
}

export default RouterComponent;