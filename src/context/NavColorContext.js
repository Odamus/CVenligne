// src/context/NavColorContext.js
import React, { createContext, useState, useContext } from "react";

// Créer le contexte
const NavColorContext = createContext();

// Créer un fournisseur de contexte
export const NavColorProvider = ({ children }) => {
  const [navColor, setNavColor] = useState("#298eff"); // Couleur par défaut

  return (
    <NavColorContext.Provider value={{ navColor, setNavColor }}>
      {children}
    </NavColorContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useNavColor = () => useContext(NavColorContext);
