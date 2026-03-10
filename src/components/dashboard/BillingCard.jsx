import React from 'react';
import './BillingCard.css';

const BillingCard = () => {
    return (
        <div className="card card-light billing-card">
            <h3 className="card-subtitle">Facturation automatique</h3>

            <div className="billing-progress">
                <div className="billing-meta">
                    <span className="billing-percentage">68%</span>
                    <span className="billing-text">des rapports validés</span>
                </div>

                <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: '68%' }}></div>
                </div>
            </div>

            <div className="billing-stats">
                <div className="b-stat">
                    <div className="b-stat-val">12</div>
                    <div className="b-stat-label">factures générées<br />automatiquement</div>
                </div>
                <div className="b-stat">
                    <div className="b-stat-val">4</div>
                    <div className="b-stat-label">en attente<br />de validation</div>
                </div>
            </div>
        </div>
    );
};

export default BillingCard;
