import React from 'react'

function Navdownlink() {
  return (
    <div className='body-container-navdown'>
            <hr className='horizontal-tag1'></hr>
            <h1 className='body-title-navdown'>Restaurants with online food delivery in Coimbatore</h1>
            <div className='body-button'>
                <div className='body-button-1'>
                    <a className='body-button-a' href=''>Filter</a>
                    <a className='body-button-a' href=''>Sort By</a>
                    <a className='body-button-a' href=''>Fast Delivery</a>
                </div>
                <div className='body-button-1'>
                    <a className='body-button-a' href=''>Ratings 40+</a>
                    <a className='body-button-a' href=''>Pure Veg</a>
                    <a className='body-button-a' href=''>Order</a>
                </div>
                <div className='body-button-1'>
                    <a className='body-button-a' href=''>Rs.300-Rs.600</a>
                    <a className='body-button-a' href=''>Less then Rs.300</a>
                </div>    
            </div>
    </div>
  )
}

export default Navdownlink