import MyPieChart from "../components/piechart";
import DataTable from  "../components/datatable";

function Dashboard() {
  return (
   <div className="container-fluid">
      <h1 className="mb-4">Dashboard</h1>

      <div className="row g-4">
        {/* Pie Chart */}
        <div className="col-md-6">
          <div className="card p-3">
            <h4>Sales Distribution</h4>
            <MyPieChart />
          </div>
        </div>

        {/* Data Table */}
        <div className="col-md-6">
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