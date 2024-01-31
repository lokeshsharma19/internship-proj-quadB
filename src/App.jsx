import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, SingleShowDetail, RootLayout } from "./pages/index";
import { loader as HomeLoader } from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index loader={HomeLoader} element={<Home />} />
        <Route path="/detail/:id" element={<SingleShowDetail />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
