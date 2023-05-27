import React from 'react';

const MenuItem = ({img, title, category, price, desc }) => {

    return (
    <article>
        <img style={{width:250, height:250 }} src={img} alt={title}/>
        <header>
            <h5>{title}</h5>
            <span>{price}</span>
            <p>{desc}</p>
        </header>
    </article>
    );

}

export default MenuItem;
