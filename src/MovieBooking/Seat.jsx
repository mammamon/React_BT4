import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { movieBookingActions } from '../store/movieBooking/slice';
import cn from 'classnames';

const Seat = ({ seat, className }) => {
    const dispatch = useDispatch();
    const { chairBookings, chairBookeds } = useSelector((state) => state.movieBooking);

    return (
        <div
            className={cn('Seat mt-3', className, {
                booking: chairBookings.find((chair) => chair.soGhe === seat.soGhe),
                booked: chairBookeds.find((chair) => chair.soGhe === seat.soGhe),
            })}
            onClick={() => {
                dispatch(movieBookingActions.setSeatBookings(seat));
            }}
        >
            {seat.soGhe}
        </div>
    );
};

export default Seat;
