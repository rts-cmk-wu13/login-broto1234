import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Signup";
import Notfound from "./pages/Notfound";
import Secrets from "./pages/Secrets";
import Statements from "./pages/Statements";
import RequireAuth from "./components/RequireAuth";
import List from "./pages/List";
import Signup from "./pages/Signup";
import { statements, secretsLoads } from "./api/localHost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "list",
        element: <List />
      },
      {
        path: "statements",
        element: <Statements />,
        loader: statements
      },
      {
        path: "secrets",
        element: (
          <RequireAuth>
            <Secrets />
          </RequireAuth>
        ),
        loader: secretsLoads
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "*",
        element: <Notfound />
      }
    ]
  }
])

export default router;