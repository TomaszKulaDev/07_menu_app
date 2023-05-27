import React from 'react';

const Categories = ({categories, filterItems}) => {

    return (
        <div>
            {categories.map((category)=>{
                return(
                    <button key={category} type='button' onClick={()=>filterItems(category)}>{category}</button>
                )
            })}
        </div>
    );

}

export default Categories;
