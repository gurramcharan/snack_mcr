import React, {useContext} from 'react'
import {headings} from '../data/DataHeadings'
import {DataContext} from '../context/DataContext'
import "./HomePage.css"

export const HomePage = () => {
    const {dataHeading, setDataHeading, filteredSnacks, setSearchData} = useContext(DataContext);
    const handleBtnClick = (e) => {
        setDataHeading(dataHeading.includes("asc")
            ? `${e} desc`
            : `${e} asc`)
    }
    return (
        <div className='main-container'>
            <input
                className='search'
                type="text"
                name="search"
                id="search"
                placeholder='Search with Products or Ingredients...'
                onChange={(e) => setSearchData(e.target.value)}/>
            <table className='table-container'>
                <tr className='table-fields'>
                    {headings.map((head) => (
                        <th className='table-fields'>
                            <button className='heading-btn' onClick={() => handleBtnClick(head)}>{head}</button>
                        </th>
                    ))}
                </tr>
                {filteredSnacks.map((item) => (
                    <tr className='table-fields'>
                        <td className='table-fields'>{item.id}</td>
                        <td className='table-fields'>{item.product_name}</td>
                        <td className='table-fields'>{item.product_weight}</td>
                        <td className='table-fields'>{item.price}</td>
                        <td className='table-fields'>{item.calories}</td>
                        <td>
                            {item
                                .ingredients
                                .map((ing) => (
                                    <span>
                                        {ing},</span>
                                ))}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
