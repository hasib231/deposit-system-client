import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import UserDashboard from "../pages/Sidebar/User/UserDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/",
                element: <UserDashboard></UserDashboard>
            }
        ]
    }
])

export default router;