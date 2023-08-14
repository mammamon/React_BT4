import React from 'react';
import Seat from './Seat';
import cn from 'classnames';

const SeatList = ({ data }) => {
    return (
        <div>
            {data.map((rowSeat) => {
                return (
                    <div
                        key={rowSeat.hang}
                        className={cn('d-flex gap-3')}
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
                                        disabled: !rowSeat.hang,
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
