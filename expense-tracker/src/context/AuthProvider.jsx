import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getCurrentSession } from "../services/authService";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      const { data } = await getCurrentSession();
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    }

    loadSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
