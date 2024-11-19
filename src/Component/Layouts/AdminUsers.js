import { useEffect, useState } from "react";
import { useProductContext } from "../../Context/ProductContext";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useProductContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false); // Added error state
  const [errorMessage, setErrorMessage] = useState(null);  // State for storing detailed error message    //* optional

  const getAllUsersData = async () => {
    setIsLoading(true);
    setIsError(false); // Reset error state before fetching
    setErrorMessage(null); // Reset error message before the request                                       //* optional
    try {
      const response = await fetch("http://localhost:8000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      // Check if the response is not OK
      if (!response.ok) {                                                                                 //* optional
        const errorData = await response.json(); // Read error details from response
        throw new Error(errorData.message || "Something went wrong"); // Throw error with API message
      }

    const data = await response.json(); // Successful response
    setUsers(data); // Set the fetched user data
    } catch (error) {
      console.log(error);
      setIsError(true); // Set error state on failure
      setErrorMessage(error.message); // Set error message (from thrown error or API)                     //*optional
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  // Logic for deleting user (you can implement API call here)
  const deleteUser =  async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(`Users after delete:", ${data}` ); 
      console.log(`Users after delete:`, data); 
      
      if(response.ok) {
        getAllUsersData();
      }
      
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <div className="admin-users">
      <h2 className="page-title">Users List</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>{errorMessage}</p>  // This will be shown when isError is true
      ) : (
          // Render the list of users when there's no loading or error
        <div>                                 
          <div className="actions">
            <button className="add-user-btn">Add User</button>
          </div>

          <div className="users-table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Admin</th>
                  <th>Edit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                    <td>
                      <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(user._id)} className="delete-btn">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;








//? reality me getAllUserData itna hi hai baaki error handling ke liye hai if you don't want you can remove it 
//? and("isLoading" if good for showing loading... to users and iserror )
//? and ("isError" is good for showing error when there is any type of error occurred   )
//? and you can remove errorMessage if any kind of problem aur baaki dono koi problem nhi karege
//* Note:- these both isLoading and isError are not coming from api it is for this particular component for better user experience

// const getAllUsersData = async () => {

//   try {
//     const response = await fetch("http://localhost:8000/api/admin/users", {
//       method: "GET",
//       headers: {
//         Authorization: authorizationToken,
//       },
//     });

    
//   const data = await response.json(); 
//   setUsers(data); 
//   } catch (error) {
//     console.log(error);

//   } 
// };











// import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [newUser, setNewUser] = useState({ username: "", email: "", phone: "", isAdmin: false });
//   const [errorMessage, setErrorMessage] = useState("");

//   const config = {
//     method: "GET", 
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//   };

//   // Fetch users
//   const fetchUsers = async () => {
//     setIsLoading(true);
//     setIsError(false);
//     try {
//       const res = await axios.get("http://localhost:8000/api/admin/users", config);
//       setUsers(res.data.users); // Adjust this if the response structure is different
//     } catch (error) {
//       console.error("Error fetching users:", error.message);
//       setIsError(true);
//       setErrorMessage("Error loading users.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Add a user
//   const addUser = async () => {
//     setIsLoading(true);
//     setErrorMessage("");
//     try {
//       const res = await axios.post("http://localhost:8000/api/admin/users", newUser, config);
//       setUsers([...users, res.data.user]); // Append new user to the list
//       setNewUser({ username: "", email: "", phone: "", isAdmin: false }); // Reset the form
//     } catch (error) {
//       console.error("Error adding user:", error.message);
//       setErrorMessage("Error adding user.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Delete a user
//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/admin/users/${id}`, config);
//       setUsers(users.filter((user) => user._id !== id)); // Remove deleted user
//     } catch (error) {
//       console.error("Error deleting user:", error.message);
//       setErrorMessage("Error deleting user.");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <Fragment>
//       <h1>Users</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : isError ? (
//         <p>{errorMessage}</p>
//       ) : (
//         <Fragment>
//           <ul>
//             {users.map((user, index) => {
//               return (
//                 <li key={index}>
//                   <p>Username: {user.username}</p>
//                   <p>Email: {user.email}</p>
//                   <p>Phone: {user.phone}</p>
//                   <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
//                   <button onClick={() => deleteUser(user._id)}>Delete</button>
//                 </li>
//               );
//             })}
//           </ul>
//           <h2>Add User</h2>
//           {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//           <input
//             type="text"
//             placeholder="Username"
//             value={newUser.username}
//             onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={newUser.email}
//             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             value={newUser.phone}
//             onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
//           />
//           <label>
//             Admin:
//             <input
//               type="checkbox"
//               checked={newUser.isAdmin}
//               onChange={(e) => setNewUser({ ...newUser, isAdmin: e.target.checked })}
//             />
//           </label>
//           <button onClick={addUser} disabled={isLoading}>Add</button>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default AdminUsers;




















// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [newUser, setNewUser] = useState({ username: "", email: "", phone: "", isAdmin: false });
//   const [errorMessage, setErrorMessage] = useState("");

//   const config = {
//     method: "GET", 
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//   };

//   // Fetch users
//   const fetchUsers = async () => {
//     setIsLoading(true);
//     setIsError(false);
//     try {
//       const res = await axios.get("http://localhost:8000/api/admin/users", config);
//       setUsers(res.data.users); // Adjust this if the response structure is different
//     } catch (error) {
//       console.error("Error fetching users:", error.message);
//       setIsError(true);
//       setErrorMessage("Error loading users.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Add a user
//   const addUser = async () => {
//     setIsLoading(true);
//     setErrorMessage("");
//     try {
//       const res = await axios.post("http://localhost:8000/api/admin/users", newUser, config);
//       setUsers([...users, res.data.user]); // Append new user to the list
//       setNewUser({ username: "", email: "", phone: "", isAdmin: false }); // Reset the form
//     } catch (error) {
//       console.error("Error adding user:", error.message);
//       setErrorMessage("Error adding user.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Delete a user
//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/admin/users/${id}`, config);
//       setUsers(users.filter((user) => user._id !== id)); // Remove deleted user
//     } catch (error) {
//       console.error("Error deleting user:", error.message);
//       setErrorMessage("Error deleting user.");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : isError ? (
//         <p>{errorMessage}</p>
//       ) : (
//         <>
        //   <ul>
        //     {users.map((user, index) => {
        //      return <li key={index}>
        //         <p>Username: {user.username}</p>
        //         <p>Email: {user.email}</p>
        //         <p>Phone: {user.phone}</p>
        //         <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
        //         <button onClick={() => deleteUser(user._id)}>Delete</button>
        //       </li>
        //     })}
        //   </ul>
//           <h2>Add User</h2>
//           {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//           <input
//             type="text"
//             placeholder="Username"
//             value={newUser.username}
//             onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={newUser.email}
//             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             value={newUser.phone}
//             onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
//           />
//           <label>
//             Admin:
//             <input
//               type="checkbox"
//               checked={newUser.isAdmin}
//               onChange={(e) => setNewUser({ ...newUser, isAdmin: e.target.checked })}
//             />
//           </label>
//           <button onClick={addUser} disabled={isLoading}>Add</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;






































// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [newUser, setNewUser] = useState({ username: "", email: "", phone: "", isAdmin: false });

//   const config = {
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//   };

//   // Fetch users
//   const fetchUsers = async () => {
//     setIsLoading(true);
//     setIsError(false);
//     try {
//       const res = await axios.get("http://localhost:8000/api/admin/users", config);
//       setUsers(res.data.users); // Adjusted to match API response
//     } catch (error) {
//       console.error("Error fetching users:", error.message);
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Add a user
//   const addUser = async () => {
//     try {
//       const res = await axios.post("http://localhost:8000/api/admin/users", newUser, config);
//       setUsers([...users, res.data.user]); // Append new user to the list
//     } catch (error) {
//       console.error("Error adding user:", error.message);
//     }
//   };

//   // Delete a user
//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/admin/users/${id}`, config);
//       setUsers(users.filter((user) => user._id !== id)); // Remove deleted user
//     } catch (error) {
//       console.error("Error deleting user:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : isError ? (
//         <p>Error loading users.</p>
//       ) : (
//         <>
//           <ul>
//             {users.map((user) => (
//               <li key={user._id}>
//                 <p>Username: {user.username}</p>
//                 <p>Email: {user.email}</p>
//                 <p>Phone: {user.phone}</p>
//                 <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
//                 <button onClick={() => deleteUser(user._id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           <h2>Add User</h2>
//           <input
//             type="text"
//             placeholder="Username"
//             value={newUser.username}
//             onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={newUser.email}
//             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             value={newUser.phone}
//             onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
//           />
//           <label>
//             Admin:
//             <input
//               type="checkbox"
//               checked={newUser.isAdmin}
//               onChange={(e) => setNewUser({ ...newUser, isAdmin: e.target.checked })}
//             />
//           </label>
//           <button onClick={addUser}>Add</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;
