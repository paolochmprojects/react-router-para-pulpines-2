import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootPage from "./pages/RootPage"
import HelpPage, { action as helpAction } from "./pages/HelpPage"
import HomePage, { loader as homeLoader } from "./pages/HomePage"
import NotFound from "./pages/NotFoundPage"
import { action as registerAction } from "./pages/RegisterPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <HomePage />
      },
      {
        path: "help",
        action: helpAction,
        element: <HelpPage />
      },
      {
        path: "register",
        action: registerAction,
      }
    ]
  },
  {
    path: "/*",
    element: <NotFound />
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
