import React from 'react'
import { Button } from '../Button/Buttons'
import './style.scss'
import {Link, useParams} from 'react-router-dom'

function HotelCard(props) {

    const {hotelId} = useParams();

    return (
        <div className="hotel__card__main">
            <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/268553639.webp?k=7101c398783d132a6aca03209aac4aefc3959f080bed662538d82a6e17873b63&o="></img>
            </div>
            <div className="hotel__card__info">
                <div className="hotel__card__header">
                    <div className="hotel__card__header__name__stars">
                        <h3>{props.hotelName}</h3>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                    </div>
                    <div className="hotel__card__header__rating">
                        <span>
                            <p style={{fontWeight:700,fontSize:"17px"}}>Znakomity</p>
                            <p style={{color : "gray",fontSize:"12px"}}>2456 opini</p>
                        </span>
                        <Button small>9.5</Button>
                    </div>
                </div>
                <a>{props.location}</a>
                <div className="hotel__card__hotel__info">
                <p>Pokoj jakis tam</p>
                <p>Łóżka </p>
                <p>Śniadanie wliczone w cene</p>
                </div>
                <span className="hotel__card__header__button">
                    <Link to={`/hotel/${hotelId}`}>
                        <Button>
                            Check out
                        </Button>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default HotelCard
