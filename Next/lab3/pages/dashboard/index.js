import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) signIn();
      else setLoading(false);
      console.log(session);
    };
    securePage();
  }, []);

  if (!loading) return <h2 style={{ margin: "0 30px" }}>Dashboard</h2>;
  else {
    return <div> loading......</div>;
  }
};

export default Dashboard;
