import React from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopDestination from '../TopDestination/TopDestination';
import './HotelDetails.css'
import useAuth from '../../Context/useAuth/useAuth';

const HotelDetails = () => {

    const { isLoading } = useAuth();


    const [hoteels, setHotel] = useState([]);


    useEffect(() => {
        fetch('https://aqueous-tundra-43046.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotel(data))
    }, []);
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    return (
        <Container>
            <div className="font last-deal">
                <h2>Last Minute Deals</h2>
            </div>
            <div className="font hotel-details">
                {
                    hoteels.map(hotel => <div key={hotel._id} className="single-details">
                        <img src={hotel.img} alt="" />
                        <div>
                            <h4>{hotel.name}</h4>
                            <p>{hotel.location}</p>
                            <p>{hotel.price}</p>
                            <Link to={`/book/${hotel?._id}`} > <button className=" book-button btn-primary">Book Now</button></Link>
                        </div>
                        <div>

                        </div>
                    </div>
                    )
                }
            </div>
            <TopDestination></TopDestination>
        </Container >
    );
};

export default HotelDetails;