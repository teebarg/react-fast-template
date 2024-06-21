import { User } from "@/models/user";
import UnauthorizedError from "@/services/error.service";

const API_URL = import.meta.env.VITE_API_DOMAIN;

class UserService {
    async getProfile(): Promise<User> {
        const res = await fetch(`${API_URL}/users/me`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        if (!res.ok) {
            const errorText = await res.text();
            throw new UnauthorizedError(errorText, res.status);
        }
        return await res.json();
    }
}

export default new UserService();
