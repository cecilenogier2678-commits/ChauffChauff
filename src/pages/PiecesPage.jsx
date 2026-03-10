import React from 'react';
import './PageShared.css';

const PiecesPage = () => {
    return (
        <div className="dashboard-grid">
            {/* KPI Cards */}
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-green">148</span>
                <span className="kpi-m-label">Pièces disponibles</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-blue">24</span>
                <span className="kpi-m-label">Pièces réservées</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-red">6</span>
                <span className="kpi-m-label">Pièces à commander</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-yellow">2</span>
                <span className="kpi-m-label">Commandes en cours</span>
            </div>

            <div className="card card-light span-12">
                <h2 className="card-title">Catalogue des pièces</h2>
                <div className="table-container">
                    <table className="management-table">
                        <thead>
                            <tr>
                                <th>Pièce</th>
                                <th>Compatibilité</th>
                                <th>Référence</th>
                                <th>Statut</th>
                                <th>Fournisseur</th>
                                <th>Délai de livraison</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-medium">Anode Magnésium</td>
                                <td className="text-gray">Atlantic / Thermor</td>
                                <td>AN-MG-20</td>
                                <td><span className="pill pill-green">En stock (45)</span></td>
                                <td>ProPlombier</td>
                                <td>24h</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Carte électronique ACI</td>
                                <td className="text-gray">Thermor Duralis</td>
                                <td>CE-ACI-01</td>
                                <td><span className="pill pill-blue">Réservée (1)</span></td>
                                <td>Cédéo</td>
                                <td>48h</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Résistance blindée</td>
                                <td className="text-gray">De Dietrich</td>
                                <td>RES-BL-DD</td>
                                <td><span className="pill pill-red">À commander</span></td>
                                <td>ProPlombier</td>
                                <td>72h</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Pièces liées aux interventions</h2>
                <ul className="simple-list">
                    <li>
                        <div className="font-medium">Mme Bernard (Demain)</div>
                        <div className="text-gray" style={{ fontSize: '0.8rem' }}>Réservation: Cumulus Thermor 200L</div>
                    </li>
                    <li>
                        <div className="font-medium">M. Dubois (J+2)</div>
                        <div className="text-gray" style={{ fontSize: '0.8rem' }}>Attente de réception: Sonde de température</div>
                    </li>
                </ul>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Commandes fournisseurs</h2>
                <ul className="simple-list">
                    <li>
                        <span className="pill pill-yellow">En transit</span>
                        <div>
                            <div className="font-medium">Cédéo (C-4890)</div>
                            <div className="text-gray" style={{ fontSize: '0.8rem' }}>Livraison prévue: Demain matin</div>
                        </div>
                    </li>
                    <li>
                        <span className="pill pill-red">Retard</span>
                        <div>
                            <div className="font-medium">ProPlombier (P-109)</div>
                            <div className="text-gray" style={{ fontSize: '0.8rem' }}>Livraison prévue: Hier</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="card card-dark span-4">
                <h2 className="card-title-light">Pièces les plus utilisées</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--text-light)' }}>1. Groupes de sécurité</span>
                        <span style={{ color: 'var(--accent-color)' }}>124 posés</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--text-light)' }}>2. Joints d'étanchéité</span>
                        <span style={{ color: 'var(--accent-color)' }}>89 posés</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--text-light)' }}>3. Thermostats</span>
                        <span style={{ color: 'var(--accent-color)' }}>42 posés</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PiecesPage;
