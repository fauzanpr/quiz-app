import { ReactNode } from "react";
import Login from "../features/auth/views/Login";
import Quiz from "../features/quiz/views/Quiz";

interface IRoute {
    path: string;
    element: ReactNode;
}

export const route: IRoute[] = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/app",
        element: <Quiz />
    }
]