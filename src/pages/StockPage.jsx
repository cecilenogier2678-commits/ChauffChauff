import React from 'react';
import './PageShared.css';

const StockPage = () => {
    return (
        <div className="dashboard-grid">
            {/* KPI Cards */}
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-blue">1,204</span>
                <span className="kpi-m-label">Articles en stock</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-yellow">12</span>
                <span className="kpi-m-label">Stock faible</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-red">3</span>
                <span className="kpi-m-label">Ruptures</span>
            </div>
            <div className="card card-light kpi-mini">
                <span className="kpi-m-val text-green">45k€</span>
                <span className="kpi-m-label">Valeur du stock</span>
            </div>

            {/* Main Inventory Card */}
            <div className="card card-light span-12">
                <h2 className="card-title">Inventaire central</h2>
                <div className="table-container">
                    <table className="management-table">
                        <thead>
                            <tr>
                                <th>Article</th>
                                <th>Référence</th>
                                <th>Quantité</th>
                                <th>Emplacement</th>
                                <th>Seuil minimum</th>
                                <th>Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-medium">Chauffe-eau 200L Thermor</td>
                                <td className="text-gray">TH-200-XZ</td>
                                <td>8</td>
                                <td>Allée A - Rack 2</td>
                                <td>4</td>
                                <td><span className="pill pill-green">Disponible</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">Résistance Stéatite 1200W</td>
                                <td className="text-gray">RES-ST-12</td>
                                <td>3</td>
                                <td>Allée B - Bac 14</td>
                                <td>5</td>
                                <td><span className="pill pill-yellow">Stock faible</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">Groupe de sécurité coudé</td>
                                <td className="text-gray">GS-C-24</td>
                                <td>45</td>
                                <td>Allée C - Bac 02</td>
                                <td>20</td>
                                <td><span className="pill pill-green">Disponible</span></td>
                            </tr>
                            <tr>
                                <td className="font-medium">Thermostat de sécurité</td>
                                <td className="text-gray">THS-01</td>
                                <td>0</td>
                                <td>Allée B - Bac 09</td>
                                <td>10</td>
                                <td><span className="pill pill-red">Rupture</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Alertes stock critique</h2>
                <ul className="simple-list">
                    <li>
                        <span className="pill pill-red">Critique</span>
                        <div>
                            <div className="font-medium">Thermostat de sécurité</div>
                            <div className="text-gray" style={{ fontSize: '0.8rem' }}>Rupture totale</div>
                        </div>
                    </li>
                    <li>
                        <span className="pill pill-yellow">Attention</span>
                        <div>
                            <div className="font-medium">Résistance Stéatite 1200W</div>
                            <div className="text-gray" style={{ fontSize: '0.8rem' }}>Reste: 3 (Seuil: 5)</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="card card-light span-4">
                <h2 className="card-title">Mouvements récents</h2>
                <ul className="simple-list">
                    <li>
                        <span className="text-green font-medium">+10</span>
                        <div className="text-gray">Chauffe-eau 150L Atlantic (Reception)</div>
                    </li>
                    <li>
                        <span className="text-red font-medium">-1</span>
                        <div className="text-gray">Chauffe-eau 200L Thermor (Intervention)</div>
                    </li>
                    <li>
                        <span className="text-red font-medium">-4</span>
                        <div className="text-gray">Joints toriques (Interventions)</div>
                    </li>
                </ul>
            </div>

            <div className="card card-dark span-4">
                <h2 className="card-title-light">Répartition du stock</h2>
                {/* Simple visual bar chart using CSS blocks representation */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem', color: '#adb0b8' }}>
                            <span>Chauffe-eaux</span> <span>45%</span>
                        </div>
                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                            <div style={{ height: '100%', width: '45%', background: 'var(--accent-color)', borderRadius: '3px' }}></div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem', color: '#adb0b8' }}>
                            <span>Résistances & Thermostats</span> <span>30%</span>
                        </div>
                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                            <div style={{ height: '100%', width: '30%', background: '#eb7a66', borderRadius: '3px' }}></div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem', color: '#adb0b8' }}>
                            <span>Accessoires & Joints</span> <span>25%</span>
                        </div>
                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                            <div style={{ height: '100%', width: '25%', background: '#f5f1ea', borderRadius: '3px' }}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StockPage;
