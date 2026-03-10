import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import PlanningPage from './pages/PlanningPage';
import InterventionsPage from './pages/InterventionsPage';
import StockPage from './pages/StockPage';
import PiecesPage from './pages/PiecesPage';
import ClientsPage from './pages/ClientsPage';
import FacturesPage from './pages/FacturesPage';
import RapportsPage from './pages/RapportsPage';
import ManuelsPage from './pages/ManuelsPage';
import { RoleProvider } from './context/RoleContext';

function App() {
  return (
    <RoleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="planning" element={<PlanningPage />} />
            <Route path="interventions" element={<InterventionsPage />} />
            <Route path="stock" element={<StockPage />} />
            <Route path="pieces" element={<PiecesPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="factures" element={<FacturesPage />} />
            <Route path="manuels" element={<ManuelsPage />} />
            <Route path="rapports" element={<RapportsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  );
}

export default App;
