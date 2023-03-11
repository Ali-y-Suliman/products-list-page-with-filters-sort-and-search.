import { useState } from 'react'
import {  Header, ProductsList, Filters, Sort, PriceFilter, CategoryFilter } from "./sections/index";
import './App.css';

const App = () => {
    const [filter, setFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState('')
    const [categoryFilter, setCategoryFilter] = useState([])
    const [categories, setCategories] = useState([])
    const [sort, setSort] = useState('')
    return (
        <>
            <Header />
            <div className="back-g">
                <div className="container" style={{ padding: '0' }}>
                    <div className="row mobile-row" style={{ margin: '0' }}>
                        <div className="col-4 mobile-4" style={{ padding: '0' }}>
                            <Filters filter={filter} setFilter={setFilter} />
                            <Sort sort={sort} setSort={setSort} /> 
                            <PriceFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
                            <CategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} categories = {categories} />
                        </div>
                        <div className="col-8 mobile-8" style={{ padding: '0 0 0 71px' }}>
                            <ProductsList filter={filter} sort={sort} priceFilter={priceFilter} categoryFilter={categoryFilter} categories = {categories} setCategories = {setCategories} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;