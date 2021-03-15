import React from 'react';
import Shoe from './../shoes.json';

export const Product = () => {

    // console.log(Shoe);
    // console.log(Object.keys(Shoe));

    return (
        <div>
            <h1>Product</h1>
            <div>
                {Object.keys(Shoe).map((ObjectKey, ind) => {
                    const shoes = Shoe[ObjectKey];
                    return (
                        <div key={ind}>
                            <h4>{shoes.name}</h4>
                            <img src={shoes.img} alt={shoes.name} height={200}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}