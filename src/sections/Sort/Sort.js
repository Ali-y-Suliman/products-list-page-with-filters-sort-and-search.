import { useState, useEffect } from 'react'
import './Sort.css'

const Sort = ({ sort, setSort }) => {
    const [select, setSelect] = useState('')

    useEffect(() => {
        setSort(select)
    }, [select])

    const submitBtn = (e) => {
        setSelect(e.target.value);
        setSort(select)
        e.preventDefault()
    }

    return (
        <div className='div-sort'>
            <select className="form-select" defaultValue={'Select'} aria-label="Default select example" onChange={submitBtn}>
                <option value="Select" disabled >Sort by . . .</option>
                <option value="Price lth">Price Low To High</option>
                <option value="Price htl">Price High To Low</option>
                <option value="Name a-z">Name A to Z</option>
                <option value="Name z-a">Name Z to A</option>
                <option value="Rate lth">Rate Low to High</option>
                <option value="Rate htl">Rate High To Low</option>
            </select>
        </div>
    )
}

export default Sort