import '../css/Cart.css';
import { TransactionContext } from '../context/GlobalState'
import { useContext } from 'react';
import { Link } from 'react-router-dom';


export const Cart = () => {

    let { cart, reduction, increase, removeProduct, getTotal } = useContext(TransactionContext);

    if (cart.length === 0) {
        return (
            <div className='cart_div'>
                cart is empty
            </div>
        )
    }

    return (
        <div>
            <div>
                {
                    cart.map(item => {
                        return (
                            <div className='detail' key={item._id}>
                                <img src={item.src} alt='' />

                                <div className='box'>
                                    <div className='row'>
                                        <h2>{item.title}</h2>
                                        <span>${item.price*item.count}</span>
                                    </div>

                                    <div className='color'>
                                        {
                                            item.colors.map((color, ind) => {
                                                return <button key={ind} style={{ backgroundColor: color }}></button>
                                            })
                                        }
                                    </div>

                                    <p>{item.description}</p>
                                    <p>{item.content}</p>

                                    <div className='amount'>
                                        <button className='count' onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className='count' onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className='delete' onClick={() => removeProduct(item._id)}>
                                    X
                            </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='total'>
                <Link to='/payment'>Payment</Link>
                <h3>Total: $ {getTotal()}</h3>
            </div>
        </div>
    )
};

