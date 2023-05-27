import React from 'react';
import MenuItem from "./MenuItem";


const Menu = ({menuItems}) => {

    return (
        <>
            <div>Menu</div>
            {menuItems.map((item) => {
                return (
                    <MenuItem key={item.id} {...item}/>
                )
            })}
        </>
    );
}

export default Menu;
