import React from 'react'
import { Link } from 'react-router-dom';

const SubLink = (props) => {
    return (
        <div className='subLink'>
            <Link to='/'>
                <object data={props.link.img} type='image/svg+xml'>{props.link.name}</object>
                <span>{props.link.name}</span>
            </Link>
        </div>
    )
}

export default SubLink
