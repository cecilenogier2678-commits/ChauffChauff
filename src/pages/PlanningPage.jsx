import React from 'react';
import CalendarCard from '../components/dashboard/CalendarCard';
import './PageShared.css';

const PlanningPage = () => {
    return (
        <div className="dashboard-grid">
            {/* Top section: Calendar and Next to it something else */}
            <div className="card card-dark planning-calendar-extended">
                <h2 className="card-title-light">Calendrier Mensuel</h2>
                {/* We reuse the look of CalendarCard but extended. For simplicity we use the CalendarCard component and wrap it or expand its grid span */}
                <div style={{ padding: '0 24px 24px' }}>
                    <CalendarCard />
                </div>
            </div>

            <div className="card card-light planning-daily-schedule">
                <h2 className="card-title">Planning du jour</h2>
                <div className="schedule-list">
                    <div className="schedule-item">
                        <span className="time-badge">08:00</span>
                        <div className="schedule-info">
                            <span className="sc-client">Mme Bernard</span>
                            <span className="text-gray">Remplacement chauffe-eau</span>
                        </div>
                        <span className="tech-badge"><div className="tech-avatar">K</div> Karim</span>
                    </div>
                    <div className="schedule-item">
                        <span className="time-badge">10:30</span>
                        <div className="schedule-info">
                            <span className="sc-client">M. Dubois</span>
                            <span className="text-gray">Diagnostic panne</span>
                        </div>
                        <span className="tech-badge"><div className="tech-avatar">S</div> Sarah</span>
                    </div>
                    <div className="schedule-item">
                        <span className="time-badge">14:00</span>
                        <div className="schedule-info">
                            <span className="sc-client">Résidence Atlas</span>
                            <span className="text-gray">Maintenance</span>
                        </div>
                        <span className="tech-badge"><div className="tech-avatar">Y</div> Yacine</span>
                    </div>
                    <div className="schedule-item alert-bg">
                        <span className="time-badge bg-red">16:30</span>
                        <div className="schedule-info">
                            <span className="sc-client">Mme Petit</span>
                            <span className="text-gray">Urgence eau chaude</span>
                        </div>
                        <span className="tech-badge"><div className="tech-avatar">L</div> Lucas</span>
                    </div>
                </div>
            </div>

            <div className="card card-light tech-availability">
                <h2 className="card-title">Disponibilité des techniciens</h2>
                <div className="tech-cards">
                    <div className="tech-status-card">
                        <div className="tech-avatar-lg">K</div>
                        <div className="t-name">Karim</div>
                        <span className="pill pill-blue">En intervention</span>
                    </div>
                    <div className="tech-status-card">
                        <div className="tech-avatar-lg">S</div>
                        <div className="t-name">Sarah</div>
                        <span className="pill pill-green">Disponible</span>
                    </div>
                    <div className="tech-status-card">
                        <div className="tech-avatar-lg">Y</div>
                        <div className="t-name">Yacine</div>
                        <span className="pill pill-gray">Pause</span>
                    </div>
                    <div className="tech-status-card">
                        <div className="tech-avatar-lg">L</div>
                        <div className="t-name">Lucas</div>
                        <span className="pill pill-blue">En intervention</span>
                    </div>
                </div>
            </div>

            <div className="card card-light urgent-requests">
                <h2 className="card-title">Demandes urgentes</h2>
                <div className="urgent-list">
                    <div className="urgent-item">
                        <span className="pill pill-red">Attente allocation</span> Fuite majeure - 75011
                    </div>
                    <div className="urgent-item">
                        <span className="pill pill-red">Attente allocation</span> Panne totale - 75015
                    </div>
                    <div className="urgent-item">
                        <span className="pill pill-red">Attente allocation</span> Chaudière HS - 92100
                    </div>
                </div>
            </div>

            <div className="card card-light route-optimization">
                <h2 className="card-title">Optimisation des tournées</h2>
                <div className="route-stats">
                    <div className="r-stat">
                        <span className="r-val highlight-green">-45 min</span>
                        <span className="r-label">Temps de trajet sauvé</span>
                    </div>
                    <div className="r-stat">
                        <span className="r-val">3</span>
                        <span className="r-label">Zones groupées</span>
                    </div>
                    <div className="r-stat">
                        <span className="r-val">Haute</span>
                        <span className="r-label">Densité d'interventions</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanningPage;
