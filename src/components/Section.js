import React from 'react';
import {Product} from './Product';
import {Detail} from './Detail';
import {Cart} from './Cart'

import {Route} from 'react-router-dom';

export const Section = () => {
    return(
        <div>
            <Route path='/' component={Product} exact/>
            <Route path='/product' component={Product} exact/>
            <Route path='/product/:id' component={Detail}/>
            <Route path='/cart' component={Cart}/>
        </div>
    )
}