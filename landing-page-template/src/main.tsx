import { StrictMode } from 'react'
import './index.css'

import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from './Home.tsx'
import Cart from './Cart.tsx'
import Container from './components/Container.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Home />
//   </StrictMode>,
// )


const router = createBrowserRouter([
  {
    element: <Container />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
