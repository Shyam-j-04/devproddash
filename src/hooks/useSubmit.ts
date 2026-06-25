import { useAuth } from "./useAuth"
import useAuthStore from "../stores/useAuthStore"

export function useSubmit() {
    const login = useAuthStore((state) => state.login)

    return function handleSubmit(email: string, password: string) {
        if (useAuth(email, password)) {
            localStorage.setItem('token', 'Ae12qFg34q')
            login()
        }
    }
}
