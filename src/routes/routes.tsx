import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { adminRoutes } from "./routes.admins";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
]);

export default router;
