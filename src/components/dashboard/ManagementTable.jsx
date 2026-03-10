import React from 'react';
import './ManagementTable.css';
import { Plus } from 'lucide-react';

const ManagementTable = () => {
    const jobs = [
        { customer: "Mme Bernard", type: "Remplacement chauffe-eau", tech: "Karim", status: "En cours", payment: "À facturer", stock: "Pièce disponible" },
        { customer: "M. Dubois", type: "Diagnostic fuite", tech: "Sarah", status: "Planifié", payment: "Acompte reçu", stock: "Pièce non requise" },
        { customer: "Résidence Atlas", type: "Maintenance ballon d’eau", tech: "Yacine", status: "Terminé", payment: "Facturé", stock: "Joint commandé" },
        { customer: "Mme Petit", type: "Urgence panne eau chaude", tech: "Lucas", status: "Urgent", payment: "En attente", stock: "En stock" },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'En cours': return 'pill-blue';
            case 'Terminé': return 'pill-green';
            case 'Urgent': return 'pill-red';
            case 'Planifié': return 'pill-gray';
            default: return 'pill-gray';
        }
    };

    const getPaymentClass = (payment) => {
        switch (payment) {
            case 'À facturer': return 'pill-yellow';
            case 'Acompte reçu': return 'pill-blue';
            case 'Facturé': return 'pill-green';
            case 'En attente': return 'pill-red';
            default: return 'pill-gray';
        }
    };

    const getStockClass = (stock) => {
        switch (stock) {
            case 'Pièce disponible':
            case 'En stock': return 'pill-green';
            case 'Pièce non requise': return 'pill-gray';
            case 'Joint commandé': return 'pill-yellow';
            default: return 'pill-gray';
        }
    };

    return (
        <div className="card card-light management-table-card">
            <div className="table-header">
                <h2 className="card-title">Suivi des dossiers en cours</h2>
                <button className="btn-secondary">
                    <Plus size={16} /> Nouveau dossier
                </button>
            </div>

            <div className="table-container">
                <table className="management-table">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Intervention</th>
                            <th>Technicien</th>
                            <th>Statut</th>
                            <th>Paiement</th>
                            <th>Pièces</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, idx) => (
                            <tr key={idx}>
                                <td className="font-medium">{job.customer}</td>
                                <td className="text-gray">{job.type}</td>
                                <td>
                                    <div className="tech-badge">
                                        <div className="tech-avatar">{job.tech.charAt(0)}</div>
                                        {job.tech}
                                    </div>
                                </td>
                                <td><span className={`pill ${getStatusClass(job.status)}`}>{job.status}</span></td>
                                <td><span className={`pill ${getPaymentClass(job.payment)}`}>{job.payment}</span></td>
                                <td><span className={`pill ${getStockClass(job.stock)}`}>{job.stock}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagementTable;
