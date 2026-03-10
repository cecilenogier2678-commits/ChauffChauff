import React from 'react';
import './ProgressCard.css';
import { ChevronRight } from 'lucide-react';

const ProgressCard = () => {
    return (
        <div className="card card-light progress-card">
            <h3 className="card-subtitle">Interventions du jour</h3>

            <div className="progress-content">
                <div className="progress-stats">
                    <div className="stat-row">
                        <span className="stat-label">Objectif:</span>
                        <span className="stat-val">20</span>
                    </div>
                    <div className="stat-row">
                        <span className="stat-label">Réalisées:</span>
                        <span className="stat-val highlight">14</span>
                    </div>
                    <div className="stat-row">
                        <span className="stat-label">En cours:</span>
                        <span className="stat-val">4</span>
                    </div>
                </div>

                <div className="progress-visual">
                    <div className="circular-progress">
                        <svg viewBox="0 0 36 36" className="circular-chart">
                            <path className="circle-bg"
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path className="circle"
                                strokeDasharray="70, 100"
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <div className="progress-text">70%</div>
                    </div>
                </div>
            </div>

            <button className="action-button">
                Voir le détail <ChevronRight size={16} />
            </button>
        </div>
    );
};

export default ProgressCard;
