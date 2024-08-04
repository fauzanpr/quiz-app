import { ReactNode } from "react";
import Login from "../features/auth/views/Login";
import LandingQuiz from "../features/quiz/views/LandingQuiz";
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
        element: <LandingQuiz />
    },
    {
        path: "/quiz/:id",
        element: <Quiz />
    }
]