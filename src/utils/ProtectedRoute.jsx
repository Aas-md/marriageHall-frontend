// ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, redirectTo = "/login" }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    // dynamic redirect
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  return children;
}
