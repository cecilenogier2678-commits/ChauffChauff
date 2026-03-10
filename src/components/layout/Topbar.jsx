import React from 'react';
import { useLocation } from 'react-router-dom';
import './Topbar.css';
import { Search, Plus, Download, ChevronDown } from 'lucide-react';
import { useRole } from '../../context/RoleContext';

const Topbar = () => {
    const location = useLocation();
    const { role, toggleRole } = useRole();

    const getPageConfig = (path, currentRole) => {
        switch (path) {
            case '/':
                return {
                    title: currentRole === 'gestion' ? "Tableau de bord" : "Tableau de bord technicien",
                    subtitle: currentRole === 'gestion' ? "Vue centralisée de l’activité Chauffe Chauffe" : "Vos interventions et outils terrain",
                    ctaText: currentRole === 'gestion' ? "Nouvelle intervention" : "Scanner QR code",
                    ctaIcon: <Plus size={18} />
                };
            case '/planning':
                return {
                    title: "Planning",
                    subtitle: "Organisation en temps réel des interventions et disponibilités",
                    ctaText: "Nouvelle planification",
                    ctaIcon: <Plus size={18} />
                };
            case '/interventions':
                return {
                    title: currentRole === 'gestion' ? "Interventions" : "Mes interventions",
                    subtitle: currentRole === 'gestion' ? "Suivi complet des opérations terrain" : "Vos missions du jour et de la semaine",
                    ctaText: "Nouvelle intervention",
                    ctaIcon: <Plus size={18} />
                };
            case '/stock':
                return {
                    title: "Stock",
                    subtitle: "Suivi en temps réel du matériel disponible",
                    ctaText: "Chercher article",
                    ctaIcon: <Search size={18} />
                };
            case '/pieces':
                return {
                    title: "Pièces détachées",
                    subtitle: "Gestion des pièces nécessaires aux interventions",
                    ctaText: "Demander pièce",
                    ctaIcon: <Plus size={18} />
                };
            case '/clients':
                return {
                    title: "Clients",
                    subtitle: "Base de données centralisée des clients et de leurs équipements",
                    ctaText: "Nouveau client",
                    ctaIcon: <Plus size={18} />
                };
            case '/factures':
                return {
                    title: "Factures",
                    subtitle: "Gestion des devis, paiements et facturation automatique",
                    ctaText: "Créer une facture",
                    ctaIcon: <Plus size={18} />
                };
            case '/manuels':
                return {
                    title: "Manuels techniques",
                    subtitle: "Documentation et procédures pour les interventions chauffe-eau",
                    ctaText: "Demander de l'aide",
                    ctaIcon: <Plus size={18} />
                };
            case '/rapports':
                return {
                    title: "Rapports",
                    subtitle: "Rapports digitaux, analyse d’activité et suivi de performance",
                    ctaText: currentRole === 'gestion' ? "Exporter" : "Nouveau rapport",
                    ctaIcon: currentRole === 'gestion' ? <Download size={18} /> : <Plus size={18} />
                };
            default:
                return {
                    title: "Chauffe Chauffe",
                    subtitle: "Espace " + currentRole,
                    ctaText: "Créer",
                    ctaIcon: <Plus size={18} />
                };
        }
    };

    const config = getPageConfig(location.pathname, role);

    return (
        <header className="topbar">
            <div className="topbar-welcome">
                <h1>{config.title}</h1>
                <p>{config.subtitle}</p>
            </div>

            <div className="topbar-actions">
                <div className="role-switcher" onClick={toggleRole}>
                    <span className="text-gray" style={{ fontSize: '0.75rem', fontWeight: '500' }}>Mode utilisateur</span>
                    <div className="role-current">
                        {role === 'gestion' ? 'Vue gestion' : 'Vue technicien'}
                        <ChevronDown size={14} style={{ marginLeft: '8px', color: 'var(--text-gray)' }} />
                    </div>
                </div>

                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Rechercher un client, une pièce ou une intervention" />
                </div>

                <button className="cta-button">
                    {config.ctaIcon}
                    {config.ctaText}
                </button>
            </div>
        </header>
    );
};

export default Topbar;
