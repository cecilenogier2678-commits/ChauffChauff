import React from 'react';
import ManagementTable from '../components/dashboard/ManagementTable';
import './PageShared.css';

const InterventionsPage = () => {
    return (
        <div className="dashboard-grid">
            {/* KPI Cards */}
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val">24</span>
                <span className="kpi-m-label">Interventions aujourd’hui</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-blue">8</span>
                <span className="kpi-m-label">En cours</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-green">14</span>
                <span className="kpi-m-label">Terminées</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-red">3</span>
                <span className="kpi-m-label">Urgentes</span>
            </div>

            {/* Main List */}
            <div className="interventions-list span-12">
                {/* Reusing existing ManagementTable styling logic logic for interventions */}
                <ManagementTable />
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Détail de l’intervention</h2>
                <div className="detail-panel">
                    <div className="d-row"><strong>Client:</strong> Mme Bernard</div>
                    <div className="d-row"><strong>Problème:</strong> Remplacement chauffe-eau 200L</div>
                    <div className="d-row"><strong>Technicien:</strong> Karim</div>
                    <div className="d-row"><strong>Durée estimée:</strong> 2h30</div>
                    <div className="d-row"><strong>Pièce:</strong> Cumulus Thermor (En stock)</div>
                    <div className="d-row"><strong>Rapport:</strong> À remplir</div>
                    <div className="d-row"><strong>Statut Facturation:</strong> À facturer</div>
                </div>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Interventions à valider</h2>
                <ul className="simple-list">
                    <li>Intervention #4092 - Terminé par Sarah</li>
                    <li>Intervention #4091 - Terminé par Yacine</li>
                </ul>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Rapports terrain reçus</h2>
                <ul className="simple-list">
                    <li><span className="pill pill-green">Nouveau</span> Pose Thermor 150L - Atlas</li>
                    <li><span className="pill pill-green">Nouveau</span> Joint défectueux réparé - Petit</li>
                </ul>
            </div>
        </div>
    );
};

export default InterventionsPage;
