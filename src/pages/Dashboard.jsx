import MyPieChart from "../components/piechart";
import DataTable from "../components/datatable";
import BarChartComponent from "../components/barcharts";

function Dashboard() {
  return (
    <div className="container-fluid">
      <h1 className="mb-4">Dashboard</h1>

      <div className="row">
        {/* Pie Chart */}
        <div className="col-12 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card p-3">
                <h4>Sales Distribution</h4>
                <MyPieChart />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card p-3">
                <h4>Student Information</h4>
                <BarChartComponent />
              </div>
            </div>
          </div>

        </div>

        {/* Data Table */}
        <div className="col-12 col-md-6 col-lg-6">
          <div className="card p-3">
            <h4>User Details</h4>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;