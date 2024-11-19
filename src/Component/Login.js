import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";  // Import the context
import { toast } from 'react-toastify';

export default function Register() {

    const [ user, setUser] = useState({
        email: "",
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

     // Displaying user details properly in the alert
    // alert(JSON.stringify(user));
    console.log(user);

      try {
          const response = await fetch("http://localhost:8000/api/auth/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(user)
          });

          const responseData = await response.json();
          console.log(  "res from server", responseData);

          if (response.ok) {
            // const responseData = await response.json();
            //   console.log(  "res from server", responseData);
              //* stored the token in localhost
              // storetokenInLS(responseData.token);
              // localStorage.setItem("token", responseData.token);

              //* Store the token using the context method
              storeTokenInLS(responseData.token);

            
            toast.success("Login Successful");
            setUser({  email: "", password: "" });
            navigate("/");
          } else {
            toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message)
            console.log("invalid credentials");
          }
  
          console.log( "login form", response);
      } catch (error) {
          console.log("login:", error);
      }
  }


  return (
      <div className='container contact-section mb-5'>
      <h2 className='text-center my-5'> Login Form </h2>

      <div className="row mt-5">
        <div className='form-section mx-auto'>
          <form onSubmit={handleSubmit}  className='register-inputs' >

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

            <button type="submit" className="btn btn-primary px-4"> Login Now </button>

          </form>
        </div>
      </div>
    </div>
  );
}


