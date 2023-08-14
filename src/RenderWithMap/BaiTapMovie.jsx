// rafce
import React from 'react'
import filmList from './data.json'

const BaiTapMovie = () => {
    console.log({ filmList })
    return (
        <div>
            <div className="row">
                {filmList.map((film) => (
                    <div className="col-3 mt-3" key={film.maPhim}>
                        <div className="card">
                            <img
                                className="img-fluid"
                                src={film.hinhAnh}
                                alt="..."
                                style={{
                                    height: 450,
                                }}
                            />
                            <div className="card-body">
                                <p className="fw-bold" style={{ height: 50 }}>
                                    {film.tenPhim}
                                </p>
                                <p className="mt-3">{film.moTa.substring(0, 50)}...</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BaiTapMovie
