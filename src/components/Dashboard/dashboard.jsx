import "./style/dashboard.scss";
import LayoutDashboard from "./LayoutDashboard";
import { Chart as ChartJS, registerables } from "chart.js";
import TodaySalesSummary from "./dashboardChart/TodaySalesSummary";
import VisitorsChart from "./dashboardChart/VisitorsChart";
import RevenueChart from "./dashboardChart/RevenueChart";
import SatisfactionChart from "./dashboardChart/SatisfactionChart ";
import GoalsChart from "./dashboardChart/GoalsChart";
import TopServices from "./dashboardChart/TopServices";
import WorldMap from "./dashboardChart/WorldMap";
import VolumeServiceLevel from "./dashboardChart/VolumeServiceLevel";
ChartJS.register(...registerables);

const Dashboard = () => {
  return (
    <LayoutDashboard
      content={
        <div className="dashboard">
          {/* <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8"> */}
          <div className="today_sales_summary dashboard_boxshadow">
            <TodaySalesSummary />
          </div>
          <div className="visitors_Chart dashboard_boxshadow">
            <VisitorsChart />
          </div>

          <div className="revenue_chart dashboard_boxshadow">
            <RevenueChart />
          </div>
          <div className="satisfaction_chart dashboard_boxshadow">
            <SatisfactionChart />
          </div>
          <div className="goals_chart dashboard_boxshadow">
            <GoalsChart />
          </div>
          <div className="top_services dashboard_boxshadow">
            <TopServices />
          </div>
          <div className="world_map dashboard_boxshadow">
            <WorldMap />
          </div>
          <div className="volume_service_level dashboard_boxshadow">
            <VolumeServiceLevel />
          </div>

          {/* Row 2: Revenue, Satisfaction, Goals */}
          {/* Row 3: Top Services, World Map, Volume vs Service Level */}
          {/*<div className="row">
        <TopServices />
         <WorldMap />
        <VolumeServiceLevel />
      </div> */}
          {/* </div> */}
        </div>
      }
    />
  );
};

export default Dashboard;