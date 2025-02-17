import { ReactNode } from "react";
import CreateAdmin from "../pages/admin/UserManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/admin/UserManagement/CreateStudent";
import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AcademicSemester from "../pages/admin/academicManagment/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagment/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagment/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/academicManagment/AcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/academicManagment/CreateAcademicDepartment";
import AcademicDepartment from "../pages/admin/academicManagment/AcademicDepartment";
import StudentData from "../pages/admin/UserManagement/StudentData";

// type TRoute = { path: string; element: ReactNode };

type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
};

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students's",
        path: "student-data",
        element: <StudentData />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];

export const adminSidebars = adminPaths.reduce((acc: TSidebarItems[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => {
        return {
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        };
      }),
    });
  }

  return acc; // Ensures the accumulator is returned
}, []); // Initialize the accumulator as an empty array

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       if (child.path && child.element) {
//         acc.push({
//           path: child.path,
//           element: child.element,
//         });
//       }
//     });
//   }

//   return acc;
// }, []);

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
