import { useEffect, useState } from 'react'
import './ProductsList.css'
import Product from './Product/Product';

const ProductsList = ({ filter, sort, priceFilter, categoryFilter, categories, setCategories }) => {
    const [products, setProducts] = useState([])
    const [allCategories, setAllCategories] = useState([])
    // let [showedProducts, setShowedProducts] = useState([])

    useEffect(() => {
        setCategories(products)
    }, [products])

    useEffect(() => {
        // setAllCategories([])
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setAllCategories(products.map(pro => pro.category))
                // setCategories(allCategories)

                // console.log('products')
                // console.log(products)
            })
            .catch(err => console.log(err))
    }, [])

    //     useEffect(() => {
    //     console.log('allCategories')
    //     console.log(allCategories)
    // }, [allCategories])


    const mappingProductes = (data) => {
        return data.map((val) => {
            return (

                <Product
                    key={val.id}
                    id={val.id}
                    image={val.image}
                    title={val.title}
                    category={val.category}
                    rate={val.rating.rate}
                    price={val.price} />

            )
        })
    }

    const allFilters = (title = '', sort, price = '', categoryFilter = []) => {
        const filterdProducts = products
            .filter((val) => {
                if (title === '' || val.title.toLowerCase().includes(title.toLowerCase())) {
                    if (price === '' || +val.price <= +price) {
                        if (categoryFilter.length === 0 || categoryFilter.indexOf(val.category) !== -1) {
                            return val;
                        }
                    }
                }
            })
        if (sort !== '') {
            switch (sort) {
                case 'Price lth':
                    filterdProducts?.sort((a, b) => (a.price > b.price ? 1 : -1))
                    break;
                    
                case 'Price htl':
                    filterdProducts?.sort((a, b) => (a.price > b.price ? -1 : 1))
                    break;
                    
                case 'Name a-z':
                    filterdProducts?.sort((a, b) => (a.title > b.title ? 1 : 1))
                    break;
                    
                case 'Name z-a':
                    filterdProducts?.sort((a, b) => (a.price > b.price ? -1 : 1))
                    break;
                    
                case 'Rate lth':
                    filterdProducts?.sort((a, b) => (a.rating.rate > b.rating.rate ? 1 : -1))
                    break;
                    
                case 'Rate htl':
                    filterdProducts?.sort((a, b) => (a.rating.rate > b.rating.rate ? -1 : 1))
                    break;
            }

        }
        return mappingProductes(filterdProducts);
    }

    return (
        <div className='list'>{allFilters(filter, sort, priceFilter, categoryFilter)}</div>
    )
}

export default ProductsList