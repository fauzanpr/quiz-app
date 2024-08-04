import ReactDOM from 'react-dom/client'
import "./entries/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { route } from './entries/route'
import { QueryClient, QueryClientProvider } from 'react-query';

const router = createBrowserRouter([...route]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
