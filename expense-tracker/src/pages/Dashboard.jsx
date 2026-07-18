import { useEffect } from "react";
import { supabase } from "../services/supabase";

function Dashboard() {
  useEffect(() => {
    async function testconnection() {
      const { data, error } = await supabase.auth.getSession();

      console.log(data);
      console.log(error);
    }

    testconnection();
  });
  return <div>Dashboard</div>;
}

export default Dashboard;
