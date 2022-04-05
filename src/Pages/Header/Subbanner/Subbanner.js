import React from 'react';
import './Subbanner.css';
import card1 from '../../../Images/card1.svg';
import card2 from '../../../Images/card2.svg';

const Subbanner = () => {
    return (
        <>
            <div className='container-fluid sub-banner'>
                <div className='container'>
                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <div className="card card1 p-4">
                                <div className="card-body">
                                    <span className='fs-2 text-white'>"</span>
                                    <p className="card-text text-muted">It’s good to have money and the things that money can buy, but it’s good, too, to check up once in a while and make sure that you haven’t lost the things that money can’t buy. --George Lorimer </p>
                                    <span className='fs-2 text-white'>"</span>
                                </div>
                                <img src={card1} className="card-img-bottom card1-img" alt="..." />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card card2 p-4">
                                <img src={card2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <span className='fs-2 text-white'>"</span>
                                    <p className="card-text">You can only become truly accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing, and then do them so well that people can’t take their eyes off you. --Maya Angelou</p>
                                    <span className='fs-2 text-white'>"</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card card1 mt-5">
                                <div className="card-body">
                                    <span className='fs-2 text-white'>"</span>
                                    <p className="card-text text-muted">I love money. I love everything about it. I bought some pretty good stuff. Got me a $300 pair of socks. Got a fur sink. An electric dog polisher. A gasoline powered turtleneck sweater. And, of course, I bought some dumb stuff, too. --Steve Martin</p>
                                    <span className='fs-2 text-white'>"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subbanner;