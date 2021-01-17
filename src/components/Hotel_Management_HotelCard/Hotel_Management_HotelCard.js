import React from 'react'
import { Button } from '../Button/Buttons'
import './style.scss'
import { Link } from 'react-router-dom'

function Hotel_Management_HotelCard(props) {

    return (
        <div className="hotel__management__hotel__card__main">
            <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/268553639.webp?k=7101c398783d132a6aca03209aac4aefc3959f080bed662538d82a6e17873b63&o="></img>
            </div>
            <div className="hotel__management__hotel__card__info">
                <div className="hotel__management__hotel__card__header">
                    <div className="hotel__management__hotel__card__header__name__stars">
                        <h3>Hotel {props.ht.hotelId}</h3>
                    </div>
                    <div className="hotel__management__hotel__card__header__rating">
                        <span>
                            <p style={{ fontWeight: 700, fontSize: "17px" }}>Number of stars</p>
                        </span>
                        <Button small> {props.ht.numberOfStars}</Button>
                    </div>
                </div>
                <a>{props.ht.address}</a>
                <span className="hotel__management__hotel__card__header__button">
                    <Link to={`/management/hotelManage/${props.ht.hotelId}`}>
                        <Button>
                            Manage
                        </Button>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Hotel_Management_HotelCard
