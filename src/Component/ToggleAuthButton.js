import React from 'react';
import { useProductContext } from "../Context/ProductContext";  // Import the context
import { useNavigate } from 'react-router-dom'; // Import navigate for redirection

const ToggleAuthButton = ({ isLoggedIn }) => {
  const { clearTokenFromLS } = useProductContext(); // Get the function to clear the token
  const navigate = useNavigate(); // Initialize navigate

  const handleAuthToggle = () => {
    if (isLoggedIn) {
      clearTokenFromLS(); // Log out if already logged in
      alert("You have logged out successfully.");
      navigate("/login"); // Redirect to login page
    } else {
      navigate("/login"); // Redirect to login page if not logged in
    }
  };

  return (
    <button onClick={handleAuthToggle} className="nav-link bg-primary ms-1 me-2 rounded-3 px-3">
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default ToggleAuthButton;
