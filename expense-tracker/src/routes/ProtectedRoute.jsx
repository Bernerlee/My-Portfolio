import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = null;

  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
