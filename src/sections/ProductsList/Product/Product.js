import './Product.css'
import {Rate} from 'antd';

function Product(props) {
    return (
        <div className="card card-form" style={{ width: '18rem' }} key={props.id}>
            <div className='card-img' style={{ width: '30%', minHeight: '190px', display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                <img className="card-img-top" src={props.image} alt={props.category} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title.split(/\s+/).slice(0, 3).join(" ")}{props.title.split(/\s+/).slice(3, 4).join(" ") !== '' ? '...' : ''}</h5>
                {/* <p className="card-rate">{props.rate}</p> */}
                <Rate value={props.rate} />
                <p className="card-category">{props.category}</p>
                <p className="card-price">${props.price}</p>
            </div>
        </div>
    )
}

export default Product