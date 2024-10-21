import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Register() {

    const [ user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
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
          const response = await fetch("http://localhost:8000/api/auth/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(user)
          });

          if (response.ok) {
            const responseData = await response.json();
            alert("Login Successful");
            setUser({  email: "", password: "" });
            console.log(responseData);
            navigate("/");
          } else {
            alert("invalid credentials")
            console.log("invalid credentials");
          }
  
          console.log(response)
      } catch (error) {
          console.log("login:", error)
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




