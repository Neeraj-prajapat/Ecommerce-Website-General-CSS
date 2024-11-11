import { createContext, useContext, useEffect, useReducer} from "react"
import axios from "axios";
import reducer from "../Reducer/ProductReducer"



const AppContext = createContext();


const API = "https://api.pujakaitem.com/api/products"

const AppProvider = ({children}) => {

    const initialState ={
        isLoading: false, 
        isError: false,
        products: [],
        featureProducts: [],
        isSingleLoading: false,
        singleProduct:{},
        token: localStorage.getItem("token") || null, // Get token from localStorage
        user: null, // State to hold user data if authenticated
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    

    const getProducts= async(url)=> {
        
        dispatch({type: "SET_LOADING" })

       try {
         const res = await axios.get(url);
         const products = await res.data;
         dispatch({type:"SET_API_DATA", payload: products})               
       } catch (error) {
        dispatch({type:"API_ERROR"})
       }
    }

    const getSingleProduct = async (url) => {

        dispatch({type: "SET_SINGLE_LOADING" })

      try {
          const res = await axios.get(url);
           const singleProduct = await res.data;
           dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct})
      } catch (error) {
        dispatch({type:"SET_SINGLE_ERROR"})
      }
    }

     // Function to store token in localStorage
    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        dispatch({ type: "SET_TOKEN", payload: serverToken });
    };

  // Function to clear token from localStorage
    const clearTokenFromLS = () => {
        localStorage.removeItem("token");
        dispatch({ type: "CLEAR_TOKEN" });
    };



     // JWT Authentication - Get the currently logged-in user data
  const userAuthentication = async () => {
    const token = state.token; // Get token from state

    if (!token) return; // Exit if no token is found

    try {
      const response = await fetch("http://localhost:8000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User data:", data.userData);
        dispatch({ type: "SET_USER", payload: data.userData }); // Save user data in state
      } else {
        clearTokenFromLS(); // Clear token if unauthorized
        console.log("Failed to authenticate user.");
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "SET_TOKEN", payload: token }); // Set token in state initially
    }
    getProducts(API);
    userAuthentication(); // Check for authenticated user on mount
  }, []); // Run once on mount to load token and fetch data
  
  // useEffect(() => {
  //   getProducts(API);
  //   userAuthentication(); // Check for authenticated user on mount
  // }, [state.token]); // Re-run on token change

    return(
        <AppContext.Provider value={{...state, getSingleProduct,  storeTokenInLS, clearTokenFromLS, userAuthentication}}>
         {children}
        </AppContext.Provider>
    ); 
};

//custom hooks                                          //? This custom Hooks created bz you do not need to write many times useContext while importing createContext
const useProductContext =()=>{
    return useContext(AppContext);
};




export {AppProvider, AppContext, useProductContext}





  



//here children is app

// create context 
// provider
// consumer => useContext Hook





// import { createContext, useContext} from "react"

// const AppContext = createContext();

// const AppProvider = ({children}) => {

//     return(
//         <AppContext.Provider value={{...state}}>
//          {children}
//         </AppContext.Provider>
//     ); 
// };

// //custom hooks
// const useProductContext =()=>{                               
//     return useContext(AppContext);
// };




//? ONLY MAIN PRODUCTS CODE (HOME PAGE)

// import { createContext, useContext, useEffect, useReducer} from "react"
// import axios from "axios";
// import reducer from "../Reducer/ProductReducer"



// const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products"

// const AppProvider = ({children}) => {

//     const initialState ={
//         isLoading: false, 
//         isError: false,
//         products: [],
//         featureProducts: []
//     }
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const getProducts= async(url)=> {
        
//         dispatch({type: "SET_LOADING" })

//        try {
//          const res = await axios.get(url);
//          const products = await res.data;
//          dispatch({type:"SET_API_DATA", payload: products})               
//        } catch (error) {
//         dispatch({type:"API_ERROR"})
//        }
//     }


//     useEffect(()=>{
//         getProducts(API);
//     }, [])

//     return(
//         <AppContext.Provider value={{...state}}>
//          {children}
//         </AppContext.Provider>
//     ); 
// };

// //custom hooks                                          //? This custom Hooks created bz you do not need to write many times useContext while importing createContext
// const useProductContext =()=>{
//     return useContext(AppContext);
// };




// export {AppProvider, AppContext, useProductContext}
 




