import React from 'react';
import './PageShared.css';
import { Search, Download, BookOpen, AlertCircle, ShieldAlert, Settings, Wrench } from 'lucide-react';

const ManuelsPage = () => {
    return (
        <div className="dashboard-grid">
            {/* Search Bar Full Width */}
            <div className="card card-light span-12" style={{ padding: '24px' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={20} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-gray)' }} />
                    <input
                        type="text"
                        placeholder="Rechercher un manuel, un modèle de chauffe-eau ou un code d'erreur"
                        style={{
                            width: '100%',
                            height: '56px',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            padding: '0 24px 0 56px',
                            fontSize: '1rem',
                            outline: 'none',
                            backgroundColor: '#fff'
                        }}
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="card card-dark span-3">
                <h2 className="card-title-light">Catégories</h2>
                <ul className="simple-list" style={{ background: 'transparent', gap: '8px' }}>
                    <li style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: 'none', cursor: 'pointer' }}>
                        <Settings size={16} /> Installation
                    </li>
                    <li style={{ background: 'transparent', color: 'var(--text-light)', border: 'none', cursor: 'pointer' }}>
                        <AlertCircle size={16} /> Diagnostic pannes
                    </li>
                    <li style={{ background: 'transparent', color: 'var(--text-light)', border: 'none', cursor: 'pointer' }}>
                        <Wrench size={16} /> Remplacement résistance
                    </li>
                    <li style={{ background: 'transparent', color: 'var(--text-light)', border: 'none', cursor: 'pointer' }}>
                        <Settings size={16} /> Réglage thermostat
                    </li>
                    <li style={{ background: 'transparent', color: 'var(--text-light)', border: 'none', cursor: 'pointer' }}>
                        <ShieldAlert size={16} /> Sécurité et normes
                    </li>
                </ul>
            </div>

            {/* Manual Cards List */}
            <div className="span-9" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                <div className="card card-light" style={{ display: 'flex', justifyContent: 'space-between', padding: '24px' }}>
                    <div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                            <span className="pill pill-green">Facile</span>
                            <span className="text-gray" style={{ fontSize: '0.85rem' }}>Temps estimé: 15min</span>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', margin: '0 0 4px 0', color: 'var(--text-dark)' }}>Entretien annuel chauffe-eau</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', margin: 0 }}>Procédure standard pour la visite d'entretien annuelle.</p>
                        <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
                            <button className="cta-button" style={{ height: '40px', fontSize: '0.85rem' }}><BookOpen size={16} /> Lire le guide</button>
                            <button className="cta-button" style={{ height: '40px', fontSize: '0.85rem', background: 'transparent', color: 'var(--text-dark)', border: '1px solid rgba(0,0,0,0.1)', boxShadow: 'none' }}><Download size={16} /> PDF</button>
                        </div>
                    </div>
                    <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
                        <Wrench size={32} />
                    </div>
                </div>

                <div className="card card-light" style={{ display: 'flex', justifyContent: 'space-between', padding: '24px' }}>
                    <div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                            <span className="pill pill-yellow">Moyen</span>
                            <span className="text-gray" style={{ fontSize: '0.85rem' }}>Temps estimé: 1h30</span>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', margin: '0 0 4px 0', color: 'var(--text-dark)' }}>Remplacement résistance chauffe-eau électrique</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', margin: 0 }}>Guide pas-à-pas pour les résistances blindées et stéatites.</p>
                        <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
                            <button className="cta-button" style={{ height: '40px', fontSize: '0.85rem' }}><BookOpen size={16} /> Lire le guide</button>
                            <button className="cta-button" style={{ height: '40px', fontSize: '0.85rem', background: 'transparent', color: 'var(--text-dark)', border: '1px solid rgba(0,0,0,0.1)', boxShadow: 'none' }}><Download size={16} /> PDF</button>
                        </div>
                    </div>
                    <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
                        <AlertCircle size={32} />
                    </div>
                </div>

            </div>

            {/* Quick Diagnostics */}
            <div className="card card-light span-12" style={{ marginTop: '8px' }}>
                <h2 className="card-title">Diagnostic rapide</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>

                    <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(235, 122, 102, 0.05)', border: '1px solid rgba(235, 122, 102, 0.1)', cursor: 'pointer' }}>
                        <h4 style={{ color: 'var(--accent-coral)', margin: '0 0 8px 0', fontSize: '1rem' }}>Pas d'eau chaude</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', margin: 0 }}>Vérifier l'alimentation électrique, le thermostat de sécurité, et la résistance.</p>
                    </div>

                    <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(55, 48, 163, 0.05)', border: '1px solid rgba(55, 48, 163, 0.1)', cursor: 'pointer' }}>
                        <h4 style={{ color: '#3730a3', margin: '0 0 8px 0', fontSize: '1rem' }}>Fuite groupe de sécurité</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', margin: 0 }}>Vérifier la pression réseau (réducteur de pression max 3 bars) et entartrage du groupe.</p>
                    </div>

                    <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(22, 101, 52, 0.05)', border: '1px solid rgba(22, 101, 52, 0.1)', cursor: 'pointer' }}>
                        <h4 style={{ color: '#166534', margin: '0 0 8px 0', fontSize: '1rem' }}>Pression faible</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', margin: 0 }}>Contrôler le réducteur de pression, les filtres robinetterie, et l'entartrage cuve.</p>
                    </div>

                    <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(0, 0, 0, 0.03)', border: '1px solid rgba(0, 0, 0, 0.05)', cursor: 'pointer' }}>
                        <h4 style={{ color: 'var(--text-dark)', margin: '0 0 8px 0', fontSize: '1rem' }}>Bruit anormal</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', margin: 0 }}>Souvent causé par un fort entartrage de la résistance blindée (bruit d'ébullition).</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ManuelsPage;
