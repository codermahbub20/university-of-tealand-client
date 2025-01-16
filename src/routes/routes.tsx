import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
]);

export default router;
