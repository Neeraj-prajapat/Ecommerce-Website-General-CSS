import React from 'react'
import { useState, useEffect,  } from 'react';
import { useProductContext } from "../../Context/ProductContext";
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const AdminUpdate = () => {

    const { authorizationToken } = useProductContext();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const params = useParams();

 const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/users/${params.id}`,                       //?getUserById (getting single use data)
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        const userData = await response.json();
        console.log("User single data:", userData);
        setData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          email: userData.email || "",
          phone: userData.phone || "",
        });
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
 
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setData({
            ...data,
            [name]: value,
        })
    }

   //? handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting data:", data);
    
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    Authorization: authorizationToken,
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(data)
            });
    
            if (response.ok) {
                toast.success("Updated successful");
            } else {
                toast.error("Update not successful");
            } 
              
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    }
  


    useEffect(() => {
        getSingleUserData();
    }, [])



  return (
    <div className='container contact-section mb-5'>
    <h2 className='text-center my-5'> Update User Data</h2>

    <div className="row mt-5">
      <div className='form-section mx-auto'>
        <form onSubmit={ handleSubmit } className='contact-inputs' >

          <div className='mb-3'>
            <div className="row">
              <div className="col col-lg-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  id= "firstName"
                  name="firstName"
                  autoComplete='off'
                  value= {data.firstName}
                  onChange={handleInput}
                />
              </div>
              <div className="col col-lg-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  id= "lastName"
                  name="lastName"
                  autoComplete='off'
                  value= {data.lastName}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              required
              className="form-control"
              id= "email"
              placeholder="name@example.com"
              name="email"
              autoComplete='off'
              value= {data.email}
              onChange={handleInput}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label"> Phone Number</label>
            <input
              type="phone"
              required
              className="form-control"
              id= "phone"
              placeholder="name@example.com"
              name="phone"
              autoComplete='off'
              value= {data.phone}
              onChange={handleInput}
            />
          </div>

         


          <button type="submit" className="btn btn-primary px-4"> Update </button>

        </form>
      </div>
    </div>
  </div>
  )
}

export default AdminUpdate
