import React from 'react';
import SeatList from './SeatList';
import Result from './Result';
import data from './data.json';

const MovieBooking = () => {
    return (
        <div className="container">
            <h1>MovieBooking (redux toolkit)</h1>
            <div className="row mt-5">
                <div className="col-8">
                    <div className="p-2 fs-4 bg-dark text-white text-center mb-3">Screen</div>
                    <SeatList data={data} />
                </div>
                <div className="col-4">
                    <Result />
                </div>
            </div>
        </div>
    );
};

export default MovieBooking;
