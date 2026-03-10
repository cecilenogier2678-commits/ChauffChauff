import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import {
    LayoutDashboard,
    CalendarDays,
    Wrench,
    Package,
    Settings,
    FileText,
    Users,
    Settings2,
    BarChart3,
    BookOpen
} from 'lucide-react';
import { useRole } from '../../context/RoleContext';

const Sidebar = () => {
    const { role } = useRole();

    const allMenuItems = [
        { icon: <LayoutDashboard size={20} />, label: "Tableau de bord", path: "/", roles: ['gestion', 'technicien'] },
        { icon: <CalendarDays size={20} />, label: "Planning", path: "/planning", roles: ['gestion', 'technicien'] },
        { icon: <Wrench size={20} />, label: role === 'gestion' ? "Interventions" : "Mes interventions", path: "/interventions", roles: ['gestion', 'technicien'] },
        { icon: <Package size={20} />, label: "Stock", path: "/stock", roles: ['gestion', 'technicien'] },
        { icon: <Settings size={20} />, label: "Pièces détachées", path: "/pieces", roles: ['gestion', 'technicien'] },
        { icon: <Users size={20} />, label: "Clients", path: "/clients", roles: ['gestion', 'technicien'] },
        { icon: <FileText size={20} />, label: "Factures", path: "/factures", roles: ['gestion'] },
        { icon: <BookOpen size={20} />, label: "Manuels", path: "/manuels", roles: ['technicien'] },
        { icon: <BarChart3 size={20} />, label: "Rapports", path: "/rapports", roles: ['gestion', 'technicien'] },
        { icon: <Settings2 size={20} />, label: "Paramètres", path: "/parametres", roles: ['gestion'] }
    ];

    const menuItems = allMenuItems.filter(item => item.roles.includes(role));

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <div className="logo-circle"></div>
                <h2>Chauffe Chauffe</h2>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    {menuItems.map((item, idx) => (
                        <li key={idx}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                end={item.path === "/"}
                            >
                                <span className="icon-wrapper">
                                    {item.icon}
                                </span>
                                <span className="nav-label">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sidebar-footer">
                <div className="user-avatar">
                    {role === 'gestion' ? (
                        <img src="https://ui-avatars.com/api/?name=Amanda+Doe&background=eb7a66&color=fff&size=40" alt="Avatar Gestion" />
                    ) : (
                        <img src="https://ui-avatars.com/api/?name=Karim+Tech&background=034874&color=fff&size=40" alt="Avatar Technicien" />
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
