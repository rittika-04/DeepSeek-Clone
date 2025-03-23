"use client";
import { createContext, useContext } from "react";
import { useUser } from "@clerk/nextjs";

export const AppContext = createContext(null); // Ensure it has a default value

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};

export const AppContextProvider = ({ children }) => {  // Fix 'Children' to 'children'
    const { user } = useUser(); 

    return (
        <AppContext.Provider value={{ user }}>
            {children}
        </AppContext.Provider>
    );
};
