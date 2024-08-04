import { ReactNode } from "react";
import Login from "../features/auth/views/Login";

interface IRoute {
    path: string;
    element: ReactNode;
}

export const route: IRoute[] = [
    {
        path: "/",
        element: <Login />
    }
]