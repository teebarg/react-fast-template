// auth-context.tsx
import { useCookie } from "@/hooks/use-cookie";
import React, { createContext, useState, useEffect, useContext } from "react";

interface LoginUser {
    name: string;
    email: string;
    image: string;
}

interface AuthContextValue {
    isAuthenticated: boolean;
    currentUser: LoginUser;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [currentUser, setcurrentUser] = useState<LoginUser>({} as LoginUser);
    const { getCookie, removeCookie } = useCookie();

    useEffect(() => {
        // Check if the user is already authenticated (e.g., from Cookie)
        const currentUser = getCookie("user");
        const isAuthenticated = Boolean(currentUser);
        if (isAuthenticated) {
            setIsAuthenticated(isAuthenticated);
            setcurrentUser((prev) => ({ ...prev, ...currentUser }));
        }
    }, []);

    const login = async () => {
        await new Promise((r) => setTimeout(r, 1000)); //
        const user = getCookie("user");
        setIsAuthenticated(true);
        setcurrentUser((prev) => ({ ...prev, ...user }));
    };

    const logout = async () => {
        await new Promise((r) => setTimeout(r, 1000)); //
        removeCookie("user");
        setIsAuthenticated(false);
    };

    const authContextValue: AuthContextValue = {
        isAuthenticated,
        currentUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export type { AuthContextValue };
export const useAuth = () => useContext(AuthContext);
