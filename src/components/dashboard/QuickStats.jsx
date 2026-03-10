import React from 'react';
import './QuickStats.css';
import { AlertCircle, CreditCard, ClipboardCheck, PackageSearch } from 'lucide-react';

const QuickStats = () => {
    const stats = [
        { label: "Stock critique", value: "3", icon: <AlertCircle size={20} />, color: "coral" },
        { label: "Paiements reçus", value: "8", icon: <CreditCard size={20} />, color: "green" },
        { label: "Rapports à valider", value: "12", icon: <ClipboardCheck size={20} />, color: "yellow" },
        { label: "Pièces à commander", value: "5", icon: <PackageSearch size={20} />, color: "gray" },
    ];

    return (
        <div className="quick-stats-container">
            {stats.map((stat, idx) => (
                <div key={idx} className="card card-light quick-stat-card">
                    <div className={`qs-icon qs-${stat.color}`}>
                        {stat.icon}
                    </div>
                    <div className="qs-content">
                        <span className="qs-val">{stat.value}</span>
                        <span className="qs-label">{stat.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QuickStats;
