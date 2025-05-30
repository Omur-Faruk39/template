import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter(createRouterFromEment());

  return <RouterProvider router={router} />;
}

export default App;
