import React from 'react';
import './HeroCard.css';

const HeroCard = () => {
    return (
        <div className="card card-light hero-card">
            <h2 className="card-title">Vue d’ensemble des opérations du jour</h2>

            <div className="hero-content">
                <div className="kpi-circles">
                    <div className="kpi-circle kpi-planned">
                        <span className="kpi-value">18</span>
                    </div>
                    <div className="kpi-circle kpi-completed">
                        <span className="kpi-value">6</span>
                    </div>
                    <div className="kpi-circle kpi-urgent">
                        <span className="kpi-value">3</span>
                    </div>
                    <div className="kpi-circle kpi-invoices">
                        <span className="kpi-value">12</span>
                    </div>
                </div>

                <div className="completion-rate">
                    <div className="rate-circle">
                        <span className="rate-value">87%</span>
                        <span className="rate-label">Taux de complétion</span>
                    </div>
                </div>
            </div>

            <div className="hero-legend">
                <div className="legend-item"><span className="dot dot-planned"></span> Interventions planifiées</div>
                <div className="legend-item"><span className="dot dot-completed"></span> Interventions terminées</div>
                <div className="legend-item"><span className="dot dot-urgent"></span> Urgences</div>
                <div className="legend-item"><span className="dot dot-invoices"></span> Facturation</div>
            </div>
        </div>
    );
};

export default HeroCard;
