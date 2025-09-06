import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root/Root";
import HomePage from "./pages/Home/Home";
import ChecklistPage from "./pages/Checklist/ChecklistPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "lists",
        element: <ChecklistPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
