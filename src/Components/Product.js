import { Link } from 'react-router-dom';

import '../css/Product.css';

import shoes from '../shoes.json'

export const Product = () => {
    // console.log(shoes);
    return (
        <div className='product'>
            {shoes.map(product => {
                return (
                    <div className='card' key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <img src={product.src} alt=''/>
                        </Link>

                        <div className='content'>
                            <h3>
                                <Link to={`product/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <button><Link to='/cart'>Add to cart</Link></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}