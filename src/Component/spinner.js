// import "bootstrap/dist/css/bootstrap.min.css";

// const Spinner = () => {
//   return <div className="spinner-border text-primary" role="status"></div>;
// };



const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center my-5 ">
         <div className="spinner"></div>
        </div>
    )
  };
  


  export default Spinner;
  








//? it is custom css of spinner which is applied on above and there's uses bootstrap on div to center
//? the formed spinner {you can use this whenever you are using  }         and if you want to use only css (to center spinner and also formed) use case:2

//? case:1 Custom Css
// .spinner {
//     border: 4px solid rgba(0, 0, 0, 0.1);
//     border-left-color: #000;
//     border-radius: 50%;
//     width: 40px;
//     height: 40px;
//     animation: spin 1s linear infinite;
//   }
  
//   @keyframes spin {
//     to {
//       transform: rotate(360deg);
//     }
//   }
  




//? Case:2 custom and also included spinner in center code (full vanilla )


// /* Center the spinner */
// .spinner-container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh; /* Full viewport height */
//     margin-top: -50px; /* Adjust if you want extra space from the top */
//   }
  
//   /* Spinner styling */
//   .spinner {
//     border: 4px solid rgba(0, 0, 0, 0.1);
//     border-left-color: #000;
//     border-radius: 50%;
//     width: 40px;
//     height: 40px;
//     animation: spin 1s linear infinite;
//   }
  
//   /* Keyframes for spinner animation */
//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
  