import React from 'react';
import SeatList from './SeatList';
import Result from './Result';
import data from './data.json';
import './style.scss'

const MovieBooking = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1 className='text-orange text-center mb-4'>ĐẶT VÉ XEM PHIM CYBERLAND.VN</h1>
                    <div className="screen text-center d-flex justify-content-center w-100">màn hình</div>
                    <SeatList data={data} />
                </div>
                <div className="col-4 ps-5">
                    <Result />
                </div>
            </div>
        </div>
    );
};

export default MovieBooking;
