import React from "react";
import { FaRegListAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link, Navigate,  Outlet } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import Spinner from "../spinner";

const AdminLayouts = () => {

  const { user, isLoading } = useProductContext();

  console.log("admin layout", user)

  if ( isLoading) {
    return <Spinner/> ;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!user.isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

 // if (!user.isAdmin) {
 //   return <Navigate to="/" replace />;      //? Redirects to home page who is not admin and replaces the current history entry ki user browser ka back button click kr ke wapas admin waale route pr na ja saake
  //}

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/admin/users"> <FaUser/> Users</Link>
            </li>
            <li>
              <Link to="/admin/contacts"> <FaRegListAlt/> Contacts</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <Outlet /> {/* Nested routes will be rendered here */}
      </main>
    </div>
  );
};

export default AdminLayouts;













































// import React, { useEffect, useState } from "react";
// import { useProductContext } from "../../Context/ProductContext"; // Context for authentication and token
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AdminDashboard = () => {
//   const { user, token, clearTokenFromLS } = useProductContext();
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const navigate = useNavigate();

//   // Fetch user data from API
//   const fetchUsers = async () => {
//     setIsLoading(true);
//     setIsError(false);

//     try {
//       const response = await axios.get("http://localhost:8000/api/admin/users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUsers(response.data.users); // Assuming the API returns a `users` array
//     } catch (error) {
//       console.error("Error fetching user data:", error.response?.data || error.message);
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Redirect unauthorized users
//   useEffect(() => {
//     if (!user || user.role !== "admin") {
//       console.log("Unauthorized access. Redirecting to login...");
//       // navigate("/login");
//     } else {
//       fetchUsers(); // Fetch user data on component mount
//     }
//   }, [user, navigate]);

//   const handleLogout = () => {
//     clearTokenFromLS();
//     // navigate("/login");
//   };

//   return (
//     <div className="admin-dashboard">
//       <header className="dashboard-header">
//         <h1>Admin Dashboard</h1>
//         <button onClick={handleLogout}>Logout</button>
//       </header>

//       {isLoading ? (
//         <p>Loading users...</p>
//       ) : isError ? (
//         <p>Error fetching users. Please try again later.</p>
//       ) : (
//         <section className="user-management">
//           <h2>User Management</h2>
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;









































// import React, { useEffect } from "react";
// import { useProductContext } from "../Context/ProductContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AdminDashboard = () => {
//   const { user, products, getProducts, token, clearTokenFromLS } = useProductContext();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user || user.role !== "admin") {
//       console.log("Unauthorized access. Redirecting to login...");
//       navigate("/login");
//     } else {
//       getProducts("https://api.pujakaitem.com/api/products"); // Fetch all products
//     }
//   }, [user, navigate, getProducts]);

//   const handleDeleteProduct = async (productId) => {
//     try {
//       await axios.delete(`https://api.pujakaitem.com/api/products/${productId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log("Product deleted successfully");
//       getProducts("https://api.pujakaitem.com/api/products"); // Refresh product list
//     } catch (error) {
//       console.error("Error deleting product:", error.response?.data || error.message);
//     }
//   };

//   const handleLogout = () => {
//     clearTokenFromLS();
//     navigate("/login");
//   };

//   return (
//     <div className="admin-dashboard">
//       <header className="dashboard-header">
//         <h1>Admin Dashboard</h1>
//         <button onClick={handleLogout}>Logout</button>
//       </header>

//       <section className="dashboard-overview">
//         <div className="card">Total Products: {products.length}</div>
//         {/* Add other cards like Total Users, Revenue, etc. */}
//       </section>

//       <section className="product-management">
//         <h2>Product Management</h2>
//         <table className="product-table">
//           <thead>
//             <tr>
//               <th>Product ID</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>{product.name}</td>
//                 <td>${product.price}</td>
//                 <td>
//                   <button
//                     onClick={() => navigate(`/admin/edit-product/${product.id}`)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteProduct(product.id)}
//                     className="delete-button"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       <section className="user-management">
//         <h2>User Management</h2>
//         {/* Placeholder: Add user fetching and role management logic */}
//       </section>
//     </div>
//   );
// };

// export default AdminDashboard;































































// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [contacts, setContacts] = useState([]);
//   const [services, setServices] = useState([]);

//   // Fetch data for users, contacts, and services
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           console.error("No token found, please log in.");
//           return;
//         }
  
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
  
        // const usersRes = await axios.get("http://localhost:8000/api/admin/users", config);
        // const contactsRes = await axios.get("http://localhost:8000/api/admin/contacts", config);
//         const servicesRes = await axios.get("http://localhost:8000/api/services", config);
  
//         setUsers(usersRes.data);
//         setContacts(contactsRes.data);
//         setServices(servicesRes.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
  
//     fetchData();
//   }, []);
  
  

//   const handleAddService = () => {
//     // Handle adding a new service
//     console.log("Add Service Clicked");
//   };

//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">Admin Dashboard</h1>

//       {/* Users Section */}
//       <div className="card mb-4">
//         <div className="card-header bg-primary text-white">
//           <h5>Users</h5>
//         </div>
//         <div className="card-body">
//           {users.length > 0 ? (
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No users available.</p>
//           )}
//         </div>
//       </div>

//       {/* Contact Us Section */}
//       <div className="card mb-4">
//         <div className="card-header bg-secondary text-white">
//           <h5>Contact Us</h5>
//         </div>
//         <div className="card-body">
//           {contacts.length > 0 ? (
//             <ul className="list-group">
//               {contacts.map((contact) => (
//                 <li className="list-group-item" key={contact.id}>
//                   <strong>{contact.name}:</strong> {contact.message}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No contact inquiries available.</p>
//           )}
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="card mb-4">
//         <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
//           <h5>Services</h5>
//           <button className="btn btn-light btn-sm" onClick={handleAddService}>
//             Add Service
//           </button>
//         </div>
//         <div className="card-body">
//           {services.length > 0 ? (
//             <ul className="list-group">
//               {services.map((service) => (
//                 <li className="list-group-item" key={service.id}>
//                   {service.name}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No services available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
