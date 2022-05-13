import React from 'react';
import './AllApartments.css'
import SingleApartment from '../SingleApartment/SingleApartment';
const data = [
{ "id": 1, "image": "./images/apartment1.jpg","type":"For Buy"},
{ "id": 2, "image": "./images/apartment2.jpg","type":"For Rent"},
{ "id": 3, "image": "./images/apartment3.jpg","type":"For Buy"},
{ "id": 4, "image": "./images/apartment4.jpg","type":"For Rent"},
{ "id": 5, "image": "./images/apartment5.jpg","type":"For Rent"},
{ "id": 6, "image": "./images/apartment3.jpg","type":"For Buy"},
{ "id": 7, "image": "./images/apartment4.jpg","type":"For Rent"},
{ "id": 8, "image": "./images/apartment5.jpg","type":"For Rent"}
]
const AllApartments = () => {
    return (
        <div>

        <div className='all-container px-3 mx-auto py-5'>
            
           <div className=' py-4 d-flex justify-content-between align-items-center'>
                <span>
                <h1 className='text-start section-title'>All Apartment</h1>
                </span>
                <span className='showAll'>          
                <p>Show All  <i class="fas fa-angle-right"></i> </p>
                </span>
           </div>

            <div className="cards" id="cardsId">

                {

                    data.map(apartment=><div key={apartment.id} class="card">
                    <div className="card-image">
                        <SingleApartment id={apartment.id} />
                    </div>
                    <div className='floating-icon'><i class="far fa-heart"></i></div>
                    <div className='card-body'>
                        <div className='d-flex flex-start'style={{fontWeight:"500", fontSize:"18px"}} ><p>5300 Lakeside, Newyork</p></div>
                        <div className='info-middle d-flex flex-start align-items-center mb-3'>
                            <button className='button-buy'>{apartment.type}</button>
                            <span style={{fontSize:"18px"}}>$1450</span>
                            {apartment.type==='For Rent' &&
                                        <span style={{fontSize:"14px",color:"grey",textDecoration:"line-through", marginLeft:"20px"}} >$1650</span>
                            }
                        </div>
                        <div className='info d-flex justify-content-between'>
                            <span><i className="fas fa-border-style"></i> 1150 sqft</span>
                            <span><i className="fas fa-bed"></i>  4 Rooms</span>
                            <span><i className="fas fa-bath"></i>  2 bath</span>
                        </div>
                    </div>
                    </div>
                )}
            </div>

            </div>
        </div>

    );
};

export default AllApartments;