import React, { useEffect } from 'react';
import { GiReceiveMoney } from 'react-icons/gi'
import { MdSecurity } from 'react-icons/md'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

export default function Services() {


  useEffect(() => {
    const adjustDimensions = () => {
      // Get all the columns
      const columns = document.querySelectorAll('.col-lg-4');

      // Check if there are at least three columns
      if (columns.length < 3) return;

      // Get the dimensions of the middle column's card
      const middleCard = columns[1].querySelector('.card');
      const middleHeight = middleCard.offsetHeight;
      const middleWidth = middleCard.offsetWidth;

      // Set the height and width of the first and last columns' cards
      columns[0].querySelector('.card').style.height = `${middleHeight}px`;
      columns[0].querySelector('.card').style.width = `${middleWidth}px`;
      columns[2].querySelector('.card').style.height = `${middleHeight}px`;
      columns[2].querySelector('.card').style.width = `${middleWidth}px`;
    };

    // Adjust dimensions on initial load
    adjustDimensions();

    // Adjust dimensions on window resize
    window.addEventListener('resize', adjustDimensions);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', adjustDimensions);
  }, []);



      return (
        <div className="container  mb-5"  >
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card Services-1 bg-info d-flex flex-column justify-content-center align-items-center">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                    <TbTruckDelivery className='icon-circle mb-2'/>
                    <h3 className='fs-4'>Super Fast <br/>Free Delivery</h3>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col-lg-4">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card Services-2 bg-info d-flex flex-column justify-content-center align-items-center p-3">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="row mb-2">
                      <div className="col-12 d-flex flex-column align-items-center">
                        <MdSecurity className='icon-circle mb-2'/>
                        <h3 className='fs-4'>Non-Contact Shipping</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex flex-column align-items-center">
                        <GiReceiveMoney className='icon-circle mb-2'/>
                        <h3 className='fs-4'>Money-back Guaranteed</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col-lg-4">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card Services-3 bg-info d-flex flex-column justify-content-center align-items-center">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                    <RiSecurePaymentFill className='icon-circle mb-2'/>
                    <h3 className='fs-4'>Super Secure Payment <br/> System</h3>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      );
    }