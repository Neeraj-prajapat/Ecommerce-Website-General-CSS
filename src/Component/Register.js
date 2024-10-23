import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";  // Import the context

export default function Register() {

    const [ user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    })

    const navigate = useNavigate();
    const { storeTokenInLS } = useProductContext();  // Destructure the token function from context

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    //? handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(user)
        console.log(user)

        try {
            const response = await fetch("http://localhost:8000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
              const responseData = await response.json();
              console.log(  "res from server", responseData);
              // stored the token in localhost
              // storetokenInLS(responseData.token);
              // localStorage.setItem("token", responseData.token);

                //* Store the token using the context method
                storeTokenInLS(responseData.token);



              alert("registration successful");
              setUser({firstName: "", lastName: "", email: "", phone: "", password: "" });
              navigate("/login");
            } else {
              console.log("error inside response ", "error");
            }
    
            console.log(response)
        } catch (error) {
            console.log("register:", error)
        }
    }


  return (
      <div className='container contact-section mb-5'>
      <h2 className='text-center my-5'> Registration Form</h2>

      <div className="row mt-5">
        <div className='form-section mx-auto'>
          <form onSubmit={handleSubmit} className='register-inputs' >

            <div className='mb-3'>
              <div className="row">

                <div className="col-12 col-lg-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    id="firstName"
                    name="firstName"
                    autoComplete='off'
                    value={user.firstName}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-12 col-lg-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    id="lastName"
                    name="lastName"
                    autoComplete='off'
                    value= {user.lastName}
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
                id="email"
                placeholder="name@example.com"
                name="email"
                autoComplete='off'
                value= {user.email}
                onChange={handleInput}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label"> Phone </label>
              <input
                type="number"
                required
                className="form-control"
                id="phone"
                placeholder="phone"
                name="phone"
                autoComplete='off'
                value={user.phone}
                onChange={handleInput}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label"> Password </label>
              <input
                type="password"
                required
                className="form-control"
                id="password"
                placeholder="password"
                name="password"
                autoComplete='off'
                value={user.password}
                onChange={handleInput}
              />
            </div>

           


            <button type="submit" className="btn btn-primary px-4"> Register Now </button>

          </form>
        </div>
      </div>
    </div>
  );
}






