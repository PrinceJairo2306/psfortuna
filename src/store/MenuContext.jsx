import React, { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLastCurtainDone, setIsLastCurtainDone] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isLastCurtainDone,
        setIsLastCurtainDone,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };
