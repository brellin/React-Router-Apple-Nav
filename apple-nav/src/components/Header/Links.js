import React from 'react'
import { Link } from 'react-router-dom';

const Links = (props) => {
    return (
        <Link to={`/${props.name}`} onClick={() => props.subLinkCheck(props.subLinks)}>
            {props.name}
        </Link>
    )
}

export default Links
