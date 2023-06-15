import CampaignTable from "./CampaignTable";
import "./Dashboard.css";
import Graph from "./Graph";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Graph />
      <CampaignTable />
    </div>
  );
};

export default Dashboard;
