import { useState, useEffect } from 'react'
import './CategoryFilter.css';

const CategoryFilter = ({ categoryFilter, setCategoryFilter, categories }) => {
    const [category, setCategory] = useState([]);


    useEffect(() => {
        setCategoryFilter(category)
    }, [category])

    const submitBtn = (e) => {
        // console.log(e.target.__reactProps$0ga9ri11l62i.children)
        console.log(e.nativeEvent.srcElement.innerText)
        const cat = e.nativeEvent.srcElement.innerText;
        const catIndex = category.indexOf(cat);
        if (catIndex === -1) {
            setCategory([...category, cat]);
        } else {
            setCategory(crt => {
                return crt.filter((_el, index) => (index !== catIndex))
             })
        }
        setCategoryFilter(category)
        e.preventDefault()
        // setCategory(cat);
        // setCategoryFilter(category)
        // e.preventDefault()
    }

    const getCategories = () => {
        const key = 'category';

        const uniqueCat = [...new Map(categories.map(item => [item[key], item])).values()];
        return uniqueCat.map(cat => <div key={cat.id} className='cat' style={{ backgroundColor: category.indexOf(cat.category) !== -1 ? '#7e7e7e7e' : '#E5E5E5' }} onClick={submitBtn}>{cat.category}</div>)

    }

    return (
        <div className='cat-filter'>
            <h3>Product Categories</h3>
            <div className='cat-list'>{getCategories()}</div>
        </div>
    )
}

export default CategoryFilter