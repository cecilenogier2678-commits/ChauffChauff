import React from 'react';
import './PageShared.css';

const RapportsPage = () => {
    return (
        <div className="dashboard-grid">
            {/* KPI Cards */}
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-blue">156</span>
                <span className="kpi-m-label">Rapports reçus (mois)</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-green">148</span>
                <span className="kpi-m-label">Rapports validés</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-yellow">8</span>
                <span className="kpi-m-label">En attente</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val">95%</span>
                <span className="kpi-m-label">Taux de complétion</span>
            </div>

            <div className="card card-light span-12">
                <h2 className="card-title">Rapports d’intervention</h2>
                <div className="table-container">
                    <table className="management-table">
                        <thead>
                            <tr>
                                <th>ID Rapport</th>
                                <th>Client</th>
                                <th>Technicien</th>
                                <th>Date</th>
                                <th>Type d'intervention</th>
                                <th>Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-medium">#RPT-4092</td>
                                <td className="text-gray">M. Dubois</td>
                                <td>Sarah</td>
                                <td>10/03/2026</td>
                                <td>Diagnostic panne</td>
                                <td><span className="pill pill-yellow">À valider</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">#RPT-4091</td>
                                <td className="text-gray">Résidence Atlas</td>
                                <td>Yacine</td>
                                <td>10/03/2026</td>
                                <td>Maintenance annuelle</td>
                                <td><span className="pill pill-green">Validé</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">#RPT-4090</td>
                                <td className="text-gray">Mme Bernard</td>
                                <td>Karim</td>
                                <td>09/03/2026</td>
                                <td>Remplacement chauffe-eau</td>
                                <td><span className="pill pill-green">Validé</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Performance opérationnelle</h2>
                <div className="detail-panel">
                    <div className="d-row"><strong>Résolution T1:</strong> <span className="text-green font-medium">88%</span></div>
                    <div className="d-row"><strong>Délai rép. moyen:</strong> 4h30</div>
                    <div className="d-row"><strong>Délai facturation:</strong> 1.2 jours</div>
                    <div className="d-row"><strong>Ruptures stock:</strong> <span className="text-red font-medium">3 incidents</span></div>
                    <div className="d-row"><strong>Satisfaction:</strong> 4.8 / 5</div>
                </div>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Rapports à valider</h2>
                <ul className="simple-list">
                    <li>
                        <div className="font-medium">Sarah - #RPT-4092</div>
                        <div className="text-gray" style={{ fontSize: '0.8rem' }}>Client non présent au rdv. Déplacement à valider.</div>
                    </li>
                    <li>
                        <div className="font-medium">Yacine - #RPT-4088</div>
                        <div className="text-gray" style={{ fontSize: '0.8rem' }}>Besoin de devis complémentaire pour fuite.</div>
                    </li>
                </ul>
            </div>

            <div className="card card-dark span-4">
                <h2 className="card-title-light">Activité mensuelle</h2>
                {/* Simulated chart */}
                <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ flex: 1, background: 'var(--accent-color)', height: '40%', borderRadius: '4px' }}></div>
                    <div style={{ flex: 1, background: 'var(--accent-color)', height: '60%', borderRadius: '4px' }}></div>
                    <div style={{ flex: 1, background: 'var(--accent-color)', height: '55%', borderRadius: '4px' }}></div>
                    <div style={{ flex: 1, background: 'var(--accent-color)', height: '80%', borderRadius: '4px' }}></div>
                    <div style={{ flex: 1, background: 'var(--accent-color)', height: '65%', borderRadius: '4px' }}></div>
                    <div style={{ flex: 1, background: 'var(--accent-color)', height: '100%', borderRadius: '4px' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.75rem', color: '#adb0b8' }}>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Déc</span>
                    <span>Jan</span>
                    <span>Fév</span>
                    <span>Mar</span>
                </div>
            </div>

        </div>
    );
};

export default RapportsPage;
