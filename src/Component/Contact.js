import React from 'react';
import { useState, useEffect,  } from 'react';
// Import context or props where user data is available
import { useProductContext } from '../Context/ProductContext';

export default function Contact() {
  const { user } = useProductContext(); // Access user from context

  const [ contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
})

  // Populate form fields with user data if available
  useEffect(() => {
    if (user) {
      setContact((prevContact) => ({
        ...prevContact,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
      }));
    }
  }, [user]);


const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
        ...contact,
        [name]: value,
    })
    
    // setContact((prev) => {
    //   ...prev,
    //   [name]: value,
    // })
}

//? handling the form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  alert(contact)
  console.log(contact)

  try {
      const response = await fetch("http://localhost:8000/api/auth/contact", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(contact)
      });

      if (response.ok) {
        const responseData = await response.json();
        alert("Delivered successful");
        setContact({ firstName: "", lastName: "", email: "", message: "" });
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
      }

      console.log(response)
  } catch (error) {
      console.log("contact:", error)
  }
}




  return (
      <div className='container contact-section mb-5'>
      <h2 className='text-center my-5'>Feel Free To Contact Us</h2>
      <iframe
        title='Motion Drona Location Map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.8996204875434!2d75.85990057021277!3d25.14382117057272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f851eaaaaaab9%3A0x524980316cf0c0ef!2sMotion%20Drona!5e0!3m2!1sen!2sin!4v1722487270471!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="row mt-5">
        <div className='form-section mx-auto'>
          {/* <form action='https://formspree.io/f/myzgwjdo' method='POST' className='contact-inputs' > */}
          <form onSubmit={handleSubmit} className='contact-inputs' >

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
                    value= {contact.firstName}
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
                    value= {contact.lastName}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-3">
              {/* <label htmlFor="exampleFormControlInput1" className="form-label text-white">Email address</label>
              <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email"/> */}
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                required
                className="form-control"
                id= "email"
                placeholder="name@example.com"
                name="email"
                autoComplete='off'
                value= {contact.email}
                onChange={handleInput}
              />
            </div>

            <div className="mb-3">
              {/* <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea> */}
              <label htmlFor="message" className="form-label">Textarea</label>
              <textarea
                className="form-control"
                required
                id="message"
                rows="3"
                name="message"
                autoComplete='off'
                value= {contact.message}
                onChange={handleInput}
              ></textarea>
            </div>


            <button type="submit" className="btn btn-primary px-4">Submit</button>

          </form>
        </div>
      </div>
    </div>
  );
}






