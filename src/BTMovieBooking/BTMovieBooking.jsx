import React from 'react'
import ChairList from './ChairList'
import Result from './Result'
import data from './data.json'

const BTMovieBooking = () => {
    return (
        <div className="container">
            <h1>BTMovieBooking (redux toolkit)</h1>
            <div className="row mt-5">
                <div className="col-8">
                    <div className="p-2 fs-4 bg-dark text-white text-center mb-3">Screen</div>
                    <ChairList data={data} />
                </div>
                <div className="col-4">
                    <Result />
                </div>
            </div>
        </div>
    )
}

export default BTMovieBooking
