import './App.scss'
// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from './routes/routesConfig';

// Create data router singleton
const router = createBrowserRouter(routesConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
