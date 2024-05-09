import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import StudySection from "./UI/StudySection";
import Quiz from "./UI/Quiz";
import Test from "./UI/Test";
import Game from "./UI/Game";
import Others from "./UI/Others";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: "/",
        element: <Navigate replace to="/study" />,
      },
      {
        path: "/study",
        element: <StudySection />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "others",
        element: <Others />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
