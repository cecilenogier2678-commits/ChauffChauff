import React from 'react';
import HeroCard from '../components/dashboard/HeroCard';
import CalendarCard from '../components/dashboard/CalendarCard';
import QuickStats from '../components/dashboard/QuickStats';
import ProgressCard from '../components/dashboard/ProgressCard';
import BillingCard from '../components/dashboard/BillingCard';
import ManagementTable from '../components/dashboard/ManagementTable';
import { useRole } from '../context/RoleContext';
import { ArrowRight, FileText, Wrench, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    const { role } = useRole();

    if (role === 'technicien') {
        return (
            <div className="dashboard-grid">
                {/* Row 1: Interventions */}
                <div className="card card-light span-8">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 className="card-title" style={{ margin: 0 }}>Interventions du jour</h2>
                        <span className="pill pill-blue">3 restantes</span>
                    </div>
                    <div className="schedule-list">
                        <div className="schedule-item">
                            <span className="time-badge">08:00</span>
                            <div className="schedule-info">
                                <span className="sc-client">Mme Bernard</span>
                                <span className="text-gray" style={{ fontSize: '0.85rem', display: 'block', marginTop: '2px' }}>14 Rue de la Roquette, 75011</span>
                                <span className="text-dark" style={{ fontWeight: 500, display: 'block', marginTop: '4px' }}>Remplacement chauffe-eau</span>
                            </div>
                            <button className="cta-button" style={{ height: '36px', padding: '0 16px', fontSize: '0.85rem' }}>
                                Naviguer <ArrowRight size={14} />
                            </button>
                        </div>
                        <div className="schedule-item alert-bg">
                            <span className="time-badge bg-red">14:30</span>
                            <div className="schedule-info">
                                <span className="sc-client">M. Leroy</span>
                                <span className="text-gray" style={{ fontSize: '0.85rem', display: 'block', marginTop: '2px' }}>89 Blvd Diderot, 75012</span>
                                <span className="text-dark" style={{ fontWeight: 500, display: 'block', marginTop: '4px', color: 'var(--accent-coral)' }}>Urgence Fuite</span>
                            </div>
                            <button className="cta-button" style={{ height: '36px', padding: '0 16px', fontSize: '0.85rem' }}>
                                Naviguer <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Row 1 right side */}
                <div className="card card-dark span-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 className="card-title-light">Intervention suivante</h2>
                    <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-color)', lineHeight: 1 }}>Dans 45m</div>
                        <p style={{ color: '#eceef2', marginTop: '12px', fontSize: '1rem' }}>Départ recommandé à <strong style={{ color: '#fff' }}>14h00</strong> pour M. Leroy (Urgence).</p>
                    </div>
                </div>

                {/* Row 2: Tools */}
                <div className="card card-light span-4">
                    <h2 className="card-title">Pièces nécessaires</h2>
                    <ul className="simple-list" style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span className="pill pill-green">À bord</span>
                            <div>
                                <div style={{ fontWeight: 500 }}>Cumulus Thermor 200L</div>
                                <div className="text-gray" style={{ fontSize: '0.8rem' }}>Pour: Mme Bernard</div>
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span className="pill pill-yellow">Dépôt</span>
                            <div>
                                <div style={{ fontWeight: 500 }}>Joints toriques 3/4"</div>
                                <div className="text-gray" style={{ fontSize: '0.8rem' }}>Pour: M. Leroy</div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card card-light span-4">
                    <h2 className="card-title">Rapports à compléter</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '160px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(235, 122, 102, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-coral)' }}>
                            <FileText size={24} />
                        </div>
                        <div>
                            <strong style={{ display: 'block', fontSize: '1.2rem' }}>1 rapport en attente</strong>
                            <span className="text-gray" style={{ fontSize: '0.9rem' }}>Résidence Atlas (Terminé hier)</span>
                        </div>
                        <button className="cta-button" style={{ marginTop: '8px', height: '36px' }}>Rédiger</button>
                    </div>
                </div>

                <div className="card card-light span-4">
                    <h2 className="card-title">Accès rapide</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Link to="/planning" style={{ textDecoration: 'none' }}>
                            <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-color)', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dark)', fontWeight: 500, transition: 'background 0.2s' }}>
                                <CalendarDays size={20} className="text-gray" /> Voir le planning
                            </div>
                        </Link>
                        <Link to="/manuels" style={{ textDecoration: 'none' }}>
                            <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-color)', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dark)', fontWeight: 500, transition: 'background 0.2s' }}>
                                <Wrench size={20} className="text-gray" /> Voir les manuels
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-grid">
            {/* Row 1 */}
            <HeroCard />
            <CalendarCard />

            {/* Row 2 */}
            <QuickStats />

            {/* Row 3 & 4 */}
            <ProgressCard />
            <ManagementTable />
            <BillingCard />
        </div>
    );
};

export default DashboardPage;
