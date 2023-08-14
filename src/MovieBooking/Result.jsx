import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieBookingActions } from '../store/movieBooking/slice';
import './style.scss'

const Result = () => {
    const dispatch = useDispatch();
    const { chairBookings } = useSelector((state) => state.movieBooking);
    return (
        <div>
            <h3 class="title">DANH SÁCH GHẾ BẠN CHỌN</h3>
            <div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Seat booked"></div>
                    <p>Ghế đã đặt</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Seat booking"></div>
                    <p>Ghế đang chọn</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Seat"></div>
                    <p>Ghế chưa đặt</p>
                </div>
            </div>
            <div className="table-wrapper">
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th className='text-center'>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {chairBookings.map((chair) => (
                        <tr key={chair.soGhe}>
                            <td>{chair.soGhe}</td>
                            <td>{chair.gia.toLocaleString('en-US')}</td>
                            <td
                                className="text-danger fw-bold fs-4 text-center"
                                style={{
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    dispatch(movieBookingActions.setSeatBookings(chair));
                                }}
                            >
                                X
                            </td>
                        </tr>
                    ))}

                    <tr>
                        <td>Tổng tiền thanh toán</td>
                        <td colspan="2">{chairBookings.reduce((total, chair) => (total += chair.gia), 0).toLocaleString('en-US')}</td>          
                    </tr>
                </tbody>
            </table>

            <button
                className="btn btn-success mt-3"
                onClick={() => {
                    dispatch(movieBookingActions.setSeatBookeds());
                }}
            >
                Thanh toán
            </button>
        </div>
        </div>
    );
};

export default Result;
