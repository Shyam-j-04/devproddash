import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

export function ProtectedRoute({ children }: { children: ReactNode }) {
    const authenticated = useAuthStore((state) => state.authenticated);

    if (!authenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}