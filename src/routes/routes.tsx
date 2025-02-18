import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenErator } from "../utils/routesGenarator";
import { adminPaths } from "./routes.admins";
import { facultyPaths } from "./routes.faculty";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenErator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenErator(facultyPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
