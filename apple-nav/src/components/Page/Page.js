import React from 'react';
import './page.scss';

const Page = (props) => {
    console.log(props)
    return (
        <div className='page'>
            <h1>{props.name.name}</h1>
        </div>
    )
}

export default Page
