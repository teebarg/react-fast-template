import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};

const useProvideAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    const signin = async (username) => {
        await new Promise((resolve) => setTimeout(resolve, 500)); // fake delay
        setIsAuthenticated(true);
        setUsername(username);
    };

    const signout = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500)); // fake delay
        setIsAuthenticated(false);
        setUsername(null);
    };

    return {
        isAuthenticated,
        username,
        signin,
        signout,
    };
};
