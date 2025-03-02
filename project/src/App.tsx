import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { ReactNode, useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";
import { AuthContext } from "./Context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Pages/Home/Home";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`} id="body">
          {/* <Navbar mainBody={mainBody} setMainBody={setMainBody} addActivity={addActivity}/> */}
          <div style={{ display: "flex" }}>
            {/* <LeftBar /> */}
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            {/* <RightBar addActivity={addActivity}/> */}
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  interface ProtectedRouteProps {
    children: ReactNode;
  }

  // const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return <>{children}</> || null; 
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
