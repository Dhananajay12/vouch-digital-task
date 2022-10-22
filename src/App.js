import "./App.css";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import ViewClient from "./pages/ViewClient";
import AddClient from "./pages/AddClient";
import "antd/dist/antd.min.css";
import Success from "./pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/viewclient",
    element: (
      <div className="d-flex margin-page">
        <SideBar />
        <ViewClient />
      </div>
    ),
  },
  {
    path: "/addclient",
    element: (
      <div className="d-flex">
        <SideBar />
        <AddClient />
      </div>
    ),
  },
  {
    path: "/success",
    element: (
      <div className="d-flex">
        <SideBar />
        <Success />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
