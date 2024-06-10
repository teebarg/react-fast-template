// import React, { useState, useContext, createContext, ReactNode } from 'react';
// import { useState } from "react";

import { useCookie } from "./use-cookie";

// // Define the shape of the auth context
// interface AuthContextType {
//     isAuthenticated: boolean;
//     username: string | null;
//     signin: (username: string) => Promise<void>;
//     signout: () => Promise<void>;
// }

// // Create a context with the defined shape
// const AuthContext = createContext<AuthContextType | null>(null);

// interface AuthProviderProps {
//     children: ReactNode;
// }

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//     const auth = useProvideAuth();
//     return <AuthContext.Provider value={ auth }> { children } < /AuthContext.Provider>;
// };

// export const useAuth = (): AuthContextType => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };

interface AuthProvider {
    isAuthenticated: boolean;
}

/**
 * This represents some generic auth provider API, like Firebase.
 */
const useAuth = (): AuthProvider => {
    const { getCookie } = useCookie();
    const currentUser = getCookie("user");
    const isAuthenticated = Boolean(currentUser);

    return { isAuthenticated };
};

export { useAuth };
