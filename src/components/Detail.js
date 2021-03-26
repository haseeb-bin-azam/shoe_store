import '../css/Detail.css'

import { useParams } from 'react-router-dom';
import shoes from '../shoes.json';
import { Link } from 'react-router-dom';

export const Detail = () => {

    const prod_id = useParams().id;
    // console.log(prod_id);

    let shoe = shoes.filter(item => {
        return prod_id === item._id;
    });
    // console.log(shoe);
    shoe = shoe[0];

    return (
        <div className='detail'>
            <img src={shoe.src} alt='' />

            <div className='box'>
                <div className='row'>
                    <h2>{shoe.title}</h2>
                    <span>${shoe.price}</span>
                </div>

                <div className='color'>
                    {
                        shoe.colors.map((color, ind) => {
                            return <button key={ind} style={{ backgroundColor: color }}></button>
                        })
                    }
                </div>

                <p>{shoe.description}</p>
                <p>{shoe.content}</p>

                <Link to='/cart' className='cart'>
                    Add to cart
                </Link>

            </div>
        </div>
    )
}