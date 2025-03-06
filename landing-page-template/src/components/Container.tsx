import { Outlet } from 'react-router-dom'; // Import the Outlet component from react-router-dom, used to render child routes.
import Navbar from './Navbar'; // Import the Navbar component to display it on the page.

export default function Container() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Navbar component is rendered at the top of the page */}
            <Navbar />

            {/* Outlet is where the matched child route content will be rendered */}
            <Outlet />
        </div>
    );
}
