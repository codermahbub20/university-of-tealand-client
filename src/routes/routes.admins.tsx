import App from "../App";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <App />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];

export const adminPaths = [
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
];
