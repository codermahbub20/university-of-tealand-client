import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenErator } from "../utils/routesGenarator";
import { adminPaths } from "./routes.admins";

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
]);

export default router;
