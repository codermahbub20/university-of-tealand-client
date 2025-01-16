import { createBrowserRouter } from "react-router-dom";
import App from "../App";

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
    children: adminPaths,
  },
]);

export default router;
