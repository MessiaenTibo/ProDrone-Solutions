import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./Home.tsx";
import Cart from "./Cart.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import CookiePolicy from "./CookiePolicy.tsx"
import Container from "./components/Container.tsx";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Container />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/cookie-policy", element: <CookiePolicy /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <CartProvider> {/* Wrap app with CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
