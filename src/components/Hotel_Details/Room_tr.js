import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { Button } from '../Button/Buttons'
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'
import { getUrlsByRoomId } from '../../api/PhotoManagementRequest';

let images;

async function getPhotos(roomId) {

    try {
        let test = await getUrlsByRoomId(roomId);
        images = test.data;
    } catch (error) {

    }
}

function Room_tr(props) {
    const {hotelName} = useParams();
    getPhotos(props.rm.roomId);

    const [isOpen, setIsOpen] = useState(false);
    return (
        <tr>
            <td>
                <Button onClick={() => setIsOpen(true)}>
                    View images
                </Button>
                <ReactBnbGallery
                    show={isOpen}
                    photos={images}
                    onClose={() => setIsOpen(false)}
                />
            </td>
            <td>{props.rm.numberOfPeople}</td>
            <td>{props.rm.price}</td>
            <td>{props.rm.description}</td>
            <td>
                <div>
                    <Link to={`/hotel/${hotelName}/reserve/${props.rm.roomId}`}>Reserve</Link>
                </div>
            </td>
        </tr>
    )
}

export default Room_tr
