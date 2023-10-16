import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "bookDetail",
    element: <Details />
  }
]);

const Router = () => {
	return(
		<RouterProvider router={router} />
	)
}

export default Router;