import AdminLayout from "../components/AdminLayout";
import { Cards } from "../components/Card";
import { LatestOrders } from "../components/LatestOrders";
import { weeklyData } from "../utils/weeklyData";

const Collections = () => {
  return (
    <AdminLayout className="min-h-screen pt-20">
      <div className="pt-10">
        <div>
          <div className="py-5 mx-5">
            <h1 className="text-3xl">Weekly Overview</h1>
          </div>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 ">
            {weeklyData.map((data, index) => (
              <Cards key={index} items={data} />
            ))}
          </div>
        </div>
        <LatestOrders />
      </div>
    </AdminLayout>
  );
};

export default Collections;
