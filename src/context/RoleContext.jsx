import React, { createContext, useState, useContext } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [role, setRole] = useState('gestion'); // 'gestion' or 'technicien'

    const toggleRole = () => {
        setRole(prevRole => prevRole === 'gestion' ? 'technicien' : 'gestion');
    };

    return (
        <RoleContext.Provider value={{ role, toggleRole }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => useContext(RoleContext);
