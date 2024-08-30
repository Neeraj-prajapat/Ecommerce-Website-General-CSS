
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
        featureProducts: []
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

        console.log(" ~ file: productcontex.js ~ line12 ~ getProducts", products)   

    }

    useEffect(()=>{
        getProducts(API);
    }, [])

    return(
        <AppContext.Provider value={{...state}}>
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


