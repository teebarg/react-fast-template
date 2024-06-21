const API_URL = import.meta.env.VITE_API_DOMAIN;

class AuthService {
    async login(data: { email: string; password: string }) {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(errorText);
        }
        return await res.json();
    }

    async socialLogin(data: { firstname: string; lastname: string; email: string }) {
        const res = await fetch(`${API_URL}/auth/social`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(errorText);
        }
        return await res.json();
    }

    async refreshToken() {
        const res = await fetch(`${API_URL}/auth/refresh-token`, {
            method: "POST",
            body: JSON.stringify({}),
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(errorText);
        }
        return await res.json();
    }

    logout() {
        document.cookie = `user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

export default new AuthService();
