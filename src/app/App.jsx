import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import HomePage from "../pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
