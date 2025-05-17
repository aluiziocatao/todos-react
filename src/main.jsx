import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TaskPage from './pages/TaskPage.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
