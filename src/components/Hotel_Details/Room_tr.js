import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../Button/Buttons'
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'


function Room_tr(props) {
    const images = [];
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
            <td>Adults</td>
            <td>Standard</td>
            <td>
                <div>
                    <Button>Reserve</Button>
                </div>
            </td>
        </tr>
    )
}

export default Room_tr
