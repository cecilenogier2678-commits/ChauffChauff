import React from 'react';
import './PageShared.css';

const ClientsPage = () => {
    return (
        <div className="dashboard-grid">
            {/* KPI Cards */}
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-blue">842</span>
                <span className="kpi-m-label">Clients actifs</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-green">+14</span>
                <span className="kpi-m-label">Nouveaux clients (mois)</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-yellow">156</span>
                <span className="kpi-m-label">Contrats d’entretien</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-red">5</span>
                <span className="kpi-m-label">Dossiers en attente</span>
            </div>

            <div className="card card-light span-12">
                <h2 className="card-title">Base clients</h2>
                <div className="table-container">
                    <table className="management-table">
                        <thead>
                            <tr>
                                <th>Client</th>
                                <th>Contact</th>
                                <th>Équipement</th>
                                <th>Dernière intervention</th>
                                <th>Statut Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-medium">Mme Sylvie Bernard<br /><span className="text-gray" style={{ fontSize: '0.8rem' }}>75011 Paris</span></td>
                                <td>06 12 34 56 78<br /><span className="text-gray" style={{ fontSize: '0.8rem' }}>sylvie.b@email.com</span></td>
                                <td>Thermor Duralis 200L</td>
                                <td>24/02/2026</td>
                                <td><span className="pill pill-green">Fidèle</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">M. Jean Dubois<br /><span className="text-gray" style={{ fontSize: '0.8rem' }}>92100 Boulogne</span></td>
                                <td>07 98 76 54 32<br /><span className="text-gray" style={{ fontSize: '0.8rem' }}>jean.d@email.com</span></td>
                                <td>Atlantic Linéo 100L</td>
                                <td>Aujourd'hui</td>
                                <td><span className="pill pill-blue">Nouveau</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">Résidence Les Villas<br /><span className="text-gray" style={{ fontSize: '0.8rem' }}>93100 Montreuil</span></td>
                                <td>01 45 67 89 00<br /><span className="text-gray" style={{ fontSize: '0.8rem' }}>syndic@lesvillas.fr</span></td>
                                <td>Multiples (Dietrich)</td>
                                <td>05/01/2026</td>
                                <td><span className="pill pill-yellow">Sous contrat</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Fiche client - Aperçu</h2>
                <div className="detail-panel">
                    <div className="d-row"><strong>Nom:</strong> Mme Sylvie Bernard</div>
                    <div className="d-row"><strong>Adresse:</strong> 14 Rue de la Roquette, 75011 Paris</div>
                    <div className="d-row"><strong>Installation:</strong> Cumulus Thermor 200L</div>
                    <div className="d-row"><strong>Date d'installation:</strong> 12/05/2021</div>
                    <div className="d-row"><strong>Garantie:</strong> Échue depuis 12/05/2023</div>
                    <div className="d-row"><strong>Prochaine visite:</strong> Planifiée demain (08h00)</div>
                    <div className="d-row"><strong>Impayés:</strong> Aucun</div>
                </div>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Clients à recontacter</h2>
                <ul className="simple-list">
                    <li>
                        <div className="font-medium">M. Martin (Devis #4012)</div>
                        <div className="text-gray" style={{ fontSize: '0.8rem' }}>Relance devis remplacement cuve (Émis il y a 7j)</div>
                    </li>
                    <li>
                        <div className="font-medium">Mme Leroux</div>
                        <div className="text-gray" style={{ fontSize: '0.8rem' }}>Programm. visite d'entretien annuelle</div>
                    </li>
                </ul>
            </div>

            <div className="card card-dark span-4">
                <h2 className="card-title-light">Historique récent</h2>
                <ul className="simple-list" style={{ background: 'transparent', gap: '16px' }}>
                    <li style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-light)', border: 'none' }}>
                        <span className="pill pill-green">Facturé</span>
                        <div>
                            <div>M. Dupont - Dépannage</div>
                            <div style={{ fontSize: '0.75rem', color: '#adb0b8' }}>Hier, 14:30</div>
                        </div>
                    </li>
                    <li style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-light)', border: 'none' }}>
                        <span className="pill pill-blue">Appel</span>
                        <div>
                            <div>Mme Durand - Demande infos</div>
                            <div style={{ fontSize: '0.75rem', color: '#adb0b8' }}>Hier, 11:00</div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default ClientsPage;
