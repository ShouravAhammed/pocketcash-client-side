import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Overview from "../Pages/Overview/Overview";
import UserRoute from "./UserRoute";
import Transactions from "../Pages/Transactions/Transactions";
import SendMoney from "../Pages/SendMoney/SendMoney";
import CashOut from "../Pages/CashOut/CashOut";
import CashIn from "../Pages/CashIn/CashIn";
import Register from "../Pages/Register/Register";
import Notifications from "../Pages/Notifications/Notifications";
import PrivateRoute from "./PrivateRoute";
import Management from "../Pages/Admin/Management/Management";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import CashInRequest from "../Pages/Agent/CashInRequest";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element:  <Home/>
        },

        {
            path: "/overview",
            element: <Overview/>
        },
        {
            path: "/transactions",
            element: <Transactions />,
          },
          {
            path: "/sendMoney",
            element: <SendMoney />,
          },
          {
            path: "/cashOut",
            element: <CashOut />,
          },
          
          {
            path: "/cashIn",
            element: (
              <UserRoute>
                <CashIn />
              </UserRoute>
            ),
          },
          {
            path: "/cashInReq",
            element: (
              <AgentRoute>
                <CashInRequest />
              </AgentRoute>
            ),
          },
          {
            path: "/dashboard/admin",
            element: (
              <AdminRoute>
                <Management />
              </AdminRoute>
            ),
          },
          {
            path: "/notifications",
            element: (
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            ),
          },
      ]
    },
    {
        path: "/login",
        element: <Login/> 
    },
    {
        path: "/register",
        element:  <Register/>

    }
  ]);


  export default router;