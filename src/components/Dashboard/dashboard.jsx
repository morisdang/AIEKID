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
import { apiGetBank } from "../../ConnectBE/axios";
import {useState, useEffect} from 'react';
import TableConmeo from "./table";
import { Button } from "antd";





ChartJS.register(...registerables);

const Dashboard = () => {

    const [bankData, setBankData] = useState([]);
    const [dates, setDates] = useState([]);
    const [revenue, setRevenue] = useState([]);
    useEffect(() => {
        const fetchBankData = async () => {
            try {
              const response = await apiGetBank();
            //   filter reponse by day timestamp
            const groupedData = response.reduce((acc, item) => {
                const itemDate = new Date(item.timestamp).toDateString();
                if (!acc[itemDate]) {
                  acc[itemDate] = [];
                }
                acc[itemDate].push(item);
                return acc;
              }, {});
      
              const groupedArray = Object.keys(groupedData).map(date => {
                const sum = groupedData[date].reduce((total, item) => total + item.amount, 0);
                return {
                  date,
                  sum,
                  items: groupedData[date]
                };
              });

              const datesArray = groupedArray.map(group => group.date);
              const revenueArray = groupedArray.map(group => group.sum);
      
              setDates(datesArray);
              setRevenue(revenueArray);
              setBankData(groupedArray);
            } catch (error) {
              console.error('Error fetching bank data:', error);
            }
          };
          fetchBankData();

    }, []);
// console.log(bankData);
  return (  
    <div>

    <LayoutDashboard
      content={
        <div className="dashboard">
          {/* <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8"> */}
          <div className="today_sales_summary dashboard_boxshadow">
            <TodaySalesSummary revenue={revenue}/>
          </div>
          <div className="visitors_Chart dashboard_boxshadow">
            <VisitorsChart />
          </div>

          <div className="revenue_chart dashboard_boxshadow">
            <RevenueChart dates={dates} revenue={revenue}/>
          </div>
          
          
        

          {/* <div className="satisfaction_chart dashboard_boxshadow">
            <SatisfactionChart />
          </div> */}
          {/* <div className="goals_chart dashboard_boxshadow">
            <GoalsChart />
          </div> */}
          <div className="top_services dashboard_boxshadow">
            <TopServices />
          </div>

          

          {/* <div className="world_map dashboard_boxshadow">
            <WorldMap />
          </div> */}
          {/* <div className="volume_service_level dashboard_boxshadow">
            <VolumeServiceLevel />
          </div> */}

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

    {/* <table className="table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>

                {bankData.map((item, index) => (
                    <tr>
                       <td>{item.bank_id}</td>
                       <td>{item.user_id}</td>
                       <td>{item.amount}</td>
                       <td>{item.status}</td>
                       <td>{item.timestamp}</td>
                   </tr>
                ))}

            </tbody>
        </table> */}
    </div>

  );
};

export default Dashboard;
