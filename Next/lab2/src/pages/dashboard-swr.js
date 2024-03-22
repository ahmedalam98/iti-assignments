import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:1000/dashboard");
  const data = await res.json();
  console.log(data);
  return data[0];
};

const DashboardSwr = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  console.log(data);
  if (error) return <div>No Data</div>;
  if (!data) return <div>Loading</div>;
  return (
    <div>
      <h1>DashboardSwr</h1>
      Posts :{data.posts}
      likes:{data.likes}
    </div>
  );
};

export default DashboardSwr;
