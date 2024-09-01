// const ProductReducer = (state, action) =>{
//         if(action.type === "SET_LOADING"){
//             return{
//                 ...state,                            //? this state represents the current state of your appliction or component
//                 isLoading:true,                      //?(all properties of your current state are copied and to the new state. After that,
//             };                                       //?             you can override or add specific properties as you have needed)
//         }
//         if(action.type === "API_ERROR"){
//             return{
//                 ...state,
//                 isLoading:false,
//                 isError:true,
//             };
//         }
//     return state;
// };


const ProductReducer = (state, action) =>{
    switch(action.type){
        case "SET_LOADING":
        return{
            ...state,
            isLoading:true,
        }

        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured ===true;
            })

            return{
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            }
        case "API_ERROR":
        return{
            ...state,
            isLoading:false,
            isError:true,
        }
        default:
            return state

    }
};



export default ProductReducer;    












// Initial State
// First, here’s the initialState defined in the AppProvider component:



// const initialState = {
//     isLoading: false, 
//     isError: false,
//     products: [],
//     featureProducts: []
// };

//? 1. First Case: "SET_LOADING"

//? dispatch({ type: "SET_LOADING" });

//* Current State Before "SET_LOADING" Action:

// isLoading: false (initial value)
// isError: false (initial value)
// products: [] (empty array)
// featureProducts: [] (empty array)


//* State After the Action is Processed:
//* When the reducer handles the "SET_LOADING" action, it returns:


// {
//     ...state,
//     isLoading: true,
// }


//* This updates the state to:

// isLoading: true (updated value)
// isError: false (remains unchanged)
// products: [] (remains unchanged)
// featureProducts: [] (remains unchanged)


//* Final state after "SET_LOADING":

// {
//     isLoading: true,
//     isError: false,
//     products: [],
//     featureProducts: []
// }



//? 2. Second Case: "SET_API_DATA"



//? dispatch({ type: "SET_API_DATA", payload: products });

//* Current State Before "SET_API_DATA" Action:
//* Assuming the "SET_LOADING" action was already processed, the current state would be:

// isLoading: true (set by the previous action)
// isError: false (remains unchanged)
// products: [] (still empty, since no products have been loaded yet)
// featureProducts: [] (still empty)


//* State After the Action is Processed:
//* When the reducer handles the "SET_API_DATA" action, it returns:


// {
//     ...state,
//     isLoading: false,
//     products: action.payload,
//     featureProducts: featureData
// }

// * This updates the state to:

// isLoading: false (updated to indicate loading is complete)
// isError: false (remains unchanged)
// products: action.payload (updated with the list of products from the API)
// featureProducts: featureData (updated with filtered featured products)

//* Final state after "SET_API_DATA":

// {
//     isLoading: false,
//     isError: false,
//     products: action.payload, // products fetched from API
//     featureProducts: featureData // filtered featured products
// }



// Summary
// After "SET_LOADING": The state reflects that data is currently being loaded (isLoading: true).
// After "SET_API_DATA": The state reflects that loading is complete, products are stored, and featured products are filtered and stored accordingly.













            