import React from 'react'
import { Link } from 'react-router-dom';

const Links = (props) => {
    console.log(props.sub)
    return (
        <Link
            to={`/${props.name}`}
            style={{ color: props.subName === props.name && 'grey' }}
            onClick={() => props.subLinkCheck(props.subLinks, props.name)}
        >
            {props.name}
        </Link>
    )
}

export default Links
