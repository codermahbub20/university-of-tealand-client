import { ReactNode } from "react";
import App from "../App";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

type TRoute = { path: string; element: ReactNode };

export const adminPaths = [
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

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      if (child.path && child.element) {
        acc.push({
          path: child.path,
          element: child.element,
        });
      }
    });
  }

  return acc;
}, []);

// export const adminPaths = [
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
// ];
