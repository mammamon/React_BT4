import React from 'react';
import Seat from './Seat';
import cn from 'classnames';
import './style.scss'

const SeatList = ({ data }) => {
    return (
        <div>
            {data.map((rowSeat) => {
                return (
                    <div
                        key={rowSeat.hang}
                        className={cn('d-flex gap-3 row-seat')}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <p
                            className="mt-3 mb-0"
                            style={{
                                width: 30,
                            }}
                        >
                            {rowSeat.hang}
                        </p>
                        {rowSeat.danhSachGhe.map((seat) => {
                            return (
                                <Seat
                                    className={cn({
                                        'first-row-seat': rowSeat.hang === '',
                                        'disabled': rowSeat.hang === '',
                                    })}
                                    key={seat.soGhe}
                                    seat={seat}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};




export default SeatList;
