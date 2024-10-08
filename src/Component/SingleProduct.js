import { useEffect } from "react";
import { useParams } from "react-router"
import { useProductContext } from "../Context/ProductContext";
import PageNavigation from "./PageNavigation";
import MyImage from './MyImage'
import FormatPrice from '../Helpers/FormatPrice'
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import StarRating from './StarRating';
import AddToCart from './AddToCart'

const API = "https://api.pujakaitem.com/api/products"

const SingleProduct =() =>{

    const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext();
    const { id } = useParams();

    const {  name, company, price, description, category, stock, stars, reviews, image } = singleProduct




    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, [id]);                               // Now it will re-fetch data when 'id' changes

    if (isSingleLoading) {
        return <div>Loading...</div>; // Display a loading message while fetching data
      }

    return(
        <>
            <PageNavigation title ={name}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-images">
                            <MyImage imgs ={image}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-data">
                            <h2 className="fw-lighter mb-4">{name}</h2>
                            <StarRating stars = {stars} reviews= {reviews}/>
                            <p className="product-data-price mt-3 mb-2">
                                MRP: <del> <FormatPrice price = {price + 250000}/> </del>
                            </p>
                            <p className="text-primary product-data-price product-data-real-price mb-2">
                                Deal of the Day: <FormatPrice price = {price}/>
                            </p>
                            <p className="description">{description}</p>
                            <div className="d-flex justify-content-between mt-2 product-data-warranty">
                                <div className="product-warranty-data">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <TbTruckDelivery className="warranty-icon" size={20}/>
                                    </div>    
                                    <p className="warranty-paragraph">Free Delivery</p>
                                </div>                      
                                <div className="product-warranty-data">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <TbReplace className="warranty-icon" size={20}/>
                                    </div>
                                    <p className="warranty-paragraph">30 Days Replacement </p>
                                </div>                      
                                <div className="product-warranty-data">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <MdSecurity className="warranty-icon" size={20}/>
                                    </div>
                                    <p className="warranty-paragraph">2 Years Warranty</p>
                                </div>                      
                                <div className="product-warranty-data">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <TbTruckDelivery className="warranty-icon" size={20}/>
                                    </div>
                                    <p className="warranty-paragraph">Fast Delivery</p>
                                </div>                      
                            </div>
                            <hr className="p-0 mt-0" />        
                            <div className="product-data-info">
                                <p> 
                                    Available: <span className="fw-bold text-danger">{ stock ? "In stock" : "Not Available" }</span>
                                </p>
                                <p className="my-1">
                                    ID : <span className="fw-bold text-danger"> {id} </span>
                                </p>
                                <p>
                                    Brand: <span className="fw-bold text-danger"> {company} </span>   
                                </p>
                            </div>
                            <hr style={{  borderWidth: '3px' , color:'black' }} />
                            {stock > 0 && <AddToCart product ={singleProduct}/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}


export default SingleProduct




