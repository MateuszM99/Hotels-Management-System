import React from 'react'
import { Button } from '../Button/Buttons'
import './style.scss'
import {Link} from 'react-router-dom'

function Hotel_Management_HotelCard(props) {

    return (
        <div className="hotel__management__hotel__card__main">
            <div>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/268553639.webp?k=7101c398783d132a6aca03209aac4aefc3959f080bed662538d82a6e17873b63&o="></img>
            </div>
            <div className="hotel__management__hotel__card__info">
                <div className="hotel__management__hotel__card__header">
                    <div className="hotel__management__hotel__card__header__name__stars">
                        <h3>Hotel Name</h3>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                    </div>
                    <div className="hotel__management__hotel__card__header__rating">
                        <span>
                            <p style={{fontWeight:700,fontSize:"17px"}}>Znakomity</p>
                            <p style={{color : "gray",fontSize:"12px"}}>2456 opini</p>
                        </span>
                        <Button small>9.5</Button>
                    </div>
                </div>
                <a>Location name</a>
                <span className="hotel__management__hotel__card__header__button">
                    <Link to={`/management/hotelManage/${props.hotelName}`}>
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
