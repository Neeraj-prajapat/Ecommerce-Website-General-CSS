import React, { useState, useEffect } from "react";
import { useProductContext } from "../../Context/ProductContext";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { authorizationToken, API_URL } = useProductContext();

  const config = {
    method: "GET",
    headers: {
      Authorization: authorizationToken,
    },
  };

  // Fetch contacts
  const fetchContacts = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`${API_URL}/api/admin/contacts`, config);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = (id) => {
    // Logic for deleting contact (you can implement API call here)
    console.log("Delete contact with id:", id);
  };

  return (
    <div className="admin-contacts">
      <h1>Contacts</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error loading contacts.</p>
      ) : (
        <div className="contacts-table">
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Message</th>
                <th>Registered</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>{contact.isRegistered ? "Yes" : "No"}</td>
                  <td>
                    <button onClick={() => handleDelete(contact.id)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;




























// import React, { useState, useEffect } from "react";
// import { useProductContext } from "../../Context/ProductContext";
// // import axios from "axios";

// const AdminContacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const { authorizationToken } = useProductContext();

//   const config = {
//     method: "GET",
//     headers: {
//       Authorization: authorizationToken,
//     },
//   };

//   // Fetch contacts
//   const fetchContacts = async () => {
//     setIsLoading(true);
//     setIsError(false);
//     try {
//       const response = await fetch("http://localhost:8000/api/admin/contacts", config);
//       const data = await response.json();
//       setContacts(data);
//       // setContacts(res.data.contacts);
//     } catch (error) {
//       console.error("Error fetching contacts:", error.message);
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   return (
//     <div>
//       <h1>Contacts</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : isError ? (
//         <p>Error loading contacts.</p>
//       ) : (
//         <ul>
//           {contacts.map((contact) => (
//             <li key={contact.id}>
//               {contact.name} - {contact.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AdminContacts;
