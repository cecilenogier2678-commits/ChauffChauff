import React from 'react';
import './PageShared.css';

const FacturesPage = () => {
    return (
        <div className="dashboard-grid">
            {/* KPI Cards */}
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-blue">142</span>
                <span className="kpi-m-label">Factures émises (mois)</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-green">89k€</span>
                <span className="kpi-m-label">Paiements reçus</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-yellow">12k€</span>
                <span className="kpi-m-label">En attente</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-red">3.4k€</span>
                <span className="kpi-m-label">En retard</span>
            </div>

            <div className="card card-light span-12">
                <h2 className="card-title">Liste des factures</h2>
                <div className="table-container">
                    <table className="management-table">
                        <thead>
                            <tr>
                                <th>N° Facture</th>
                                <th>Client</th>
                                <th>Montant TTC</th>
                                <th>Date d'émission</th>
                                <th>Échéance</th>
                                <th>Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-medium">FC-2026-03-014</td>
                                <td className="text-gray">Résidence Atlas</td>
                                <td className="font-medium">450,00 €</td>
                                <td>10/03/2026</td>
                                <td>10/04/2026</td>
                                <td><span className="pill pill-blue">Envoyée</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">FC-2026-03-013</td>
                                <td className="text-gray">M. Jean Dubois</td>
                                <td className="font-medium">1 250,50 €</td>
                                <td>08/03/2026</td>
                                <td>22/03/2026</td>
                                <td><span className="pill pill-yellow">En attente</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">FC-2026-02-089</td>
                                <td className="text-gray">Mme Leroy</td>
                                <td className="font-medium">120,00 €</td>
                                <td>15/02/2026</td>
                                <td>01/03/2026</td>
                                <td><span className="pill pill-red">En retard</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">FC-2026-02-088</td>
                                <td className="text-gray">Mme Bernard</td>
                                <td className="font-medium">85,00 €</td>
                                <td>14/02/2026</td>
                                <td>14/02/2026</td>
                                <td><span className="pill pill-green">Payée</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Facturation automatique</h2>
                <div className="detail-panel">
                    <div className="d-row"><strong>Rapports prêts:</strong> 14</div>
                    <div className="d-row"><strong>Factures générées:</strong> 14</div>
                    <div className="d-row"><strong>Envoyées auto:</strong> 12</div>
                    <div className="d-row"><strong>Erreurs (email manquant):</strong> 2</div>
                </div>
                <button className="cta-button" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
                    Lancer le lot
                </button>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Paiements récents</h2>
                <ul className="simple-list">
                    <li>
                        <span className="pill pill-green">CB</span>
                        <div>
                            <div className="font-medium">Mme Bernard (85,00 €)</div>
                            <div className="text-gray" style={{ fontSize: '0.8rem' }}>Payé via lien Stripe à 10:14</div>
                        </div>
                    </li>
                    <li>
                        <span className="pill pill-green">Virement</span>
                        <div>
                            <div className="font-medium">Syndic Foncia (450,00 €)</div>
                            <div className="text-gray" style={{ fontSize: '0.8rem' }}>Rapproché hier matin</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="card card-dark span-4">
                <h2 className="card-title-light">Relances à envoyer</h2>
                <ul className="simple-list" style={{ background: 'transparent', gap: '16px' }}>
                    <li style={{ background: 'rgba(235, 122, 102, 0.15)', border: 'none', color: 'var(--text-light)' }}>
                        <div>
                            <div style={{ fontWeight: '600' }}>Mme Leroy</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--accent-coral)' }}>120,00 € - Retard de 9 jours</div>
                        </div>
                    </li>
                </ul>
                <button className="cta-button" style={{ marginTop: '20px', width: '100%', justifyContent: 'center', background: 'var(--accent-coral)', color: '#fff' }}>
                    Envoyer la relance
                </button>
            </div>

        </div>
    );
};

export default FacturesPage;
