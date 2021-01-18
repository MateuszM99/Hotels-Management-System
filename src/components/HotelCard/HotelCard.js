import React from 'react'
import {Button} from '../Button/Buttons'
import './style.scss'
import {Link, useParams} from 'react-router-dom'

function HotelCard(props) {

    const createStars = () => {
        let table = [];
        for (var i = 0; i < props.ht.numberOfStars; i++) {
            table.push(<img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>)
        }
        return table;
    }

    const {hotelId} = useParams();
    return (
        <div className="hotel__card__main">
            <div>
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square200/268553639.webp?k=7101c398783d132a6aca03209aac4aefc3959f080bed662538d82a6e17873b63&o="></img>
            </div>
            <div className="hotel__card__info">
                <div className="hotel__card__header">
                    <div className="hotel__card__header__name__stars">
                        <h3>Hotel {props.ht.hotelId}</h3>
                        {
                            createStars()
                        }
                        {/* <img src="https://img.icons8.com/officexs/16/000000/filled-star.png" />
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png" />
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png" />
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png" />
                        <img src="https://img.icons8.com/officexs/16/000000/filled-star.png" /> */}
                    </div>
                    <div className="hotel__card__header__rating">
                        <span>
                            <p style={{fontWeight: 700, fontSize: "17px"}}>Number of stars:</p>
                            {/* <p style={{ color: "gray", fontSize: "12px" }}>2456 opini</p> */}
                        </span>
                        <Button small>{props.ht.numberOfStars}</Button>
                    </div>
                </div>
                <a>{props.location}</a>
                <div className="hotel__card__hotel__info">
                    <p>Address: {props.ht.address} </p>
                    <p>Number of rooms: {props.ht.numberOfRooms}</p>

                </div>
                <span className="hotel__card__header__button">
                    <Link to={`/hotel/${props.ht.hotelId}`}>
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
