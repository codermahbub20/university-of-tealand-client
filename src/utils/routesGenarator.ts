import { ReactNode } from "react";

type TRoute = { path: string; element: ReactNode };

type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export const routesGenErator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
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

  return routes;
};
