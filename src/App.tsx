import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Board } from "./pages/Board";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

export default function App (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/board"
                    element={
                        <ProtectedRoute>
                            <Board />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    )
}