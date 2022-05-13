import React from 'react';
import './AllApartments.css'
import SingleApartment from '../SingleApartment/SingleApartment';
const data = [
{ "id": 1, "image": "./images/apartment1.jpg","type":"For Buy"},
{ "id": 2, "image": "./images/apartment2.jpg","type":"For Rent"},
{ "id": 3, "image": "./images/apartment3.jpg","type":"For Buy"},
{ "id": 4, "image": "./images/apartment4.jpg","type":"For Rent"},
{ "id": 5, "image": "./images/apartment5.jpg","type":"For Rent"}
]
const AllApartments = () => {
    return (
        <div className='px-3 mx-auto py-5'>
           <div className='py-4 d-flex justify-content-between align-items-center'>
            <span>
           <h1 className='text-start'>All Apartment</h1>
           </span>
           <span>          
            <p>Show All ></p>
            </span>
           </div>

            <div className="cards">

                {

                    data.map(apartment=><div key={apartment.id} class="card">
                    <div className="card-image">
                        <SingleApartment />
                    </div>
                    <div className='floating-icon'><i class="far fa-heart"></i></div>
                    <div className='card-body'>
                        <div className='d-flex flex-start'style={{fontWeight:"500", fontSize:"18px"}} ><p>5300 Lakeside, Newyork</p></div>
                        <div className='info-middle d-flex flex-start align-items-center mb-3'>
                            <button className='button-buy'>{apartment.type}</button>
                            <span style={{fontSize:"18px"}}>$1400</span>
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
    

    );
};

export default AllApartments;