import { useState, useEffect } from 'react';
import './PriceFilter.css'
import priceImage from './../../assets/images/price.png';

const PriceFilter = ({ priceFilter, setPriceFilter }) => {
    const [price, setPrice] = useState('1000')
    useEffect(() => {
        setPriceFilter(price + '')
    }, [price])

    const submitBtn = (e) => {
        setPrice(e.target.value + '', );
        setPriceFilter(price + '')
        e.preventDefault()
    }

    return (
        <div>
            <div className='price-header'>
                <h3>Price</h3>
                <img className="price-img" src={priceImage} alt='price image' />
            </div>
            <div className='price-input'>
                <input className='form-range' type="range" min="5" max="1000" step="10" value={price + ''} onChange={submitBtn} />
            </div>
            <div className='price-footer'>
                <h3>Range</h3>
                <h2>$5-${!price ? 1000 : price}</h2>
            </div>
        </div>
    )
}

export default PriceFilter