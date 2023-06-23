import {createContext, useState} from "react";
import {snacks} from "../data/Data";
export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [dataHeading,
        setDataHeading] = useState("");
    const [searchData,
        setSearchData] = useState("")
    const allSnacks = snacks;

    const SearchFilter = searchData.length > 0
        ? allSnacks.filter((item) => item.product_name.toLowerCase().includes(searchData.toLowerCase()) || item.ingredients.find((innerItem) => innerItem.toLowerCase().includes(searchData.toLowerCase())))
        : allSnacks;

    const filteredSnacks = (dataHeading === "" || dataHeading === "Product Name desc" || dataHeading === "Product Weight desc" || dataHeading === "Ingredients desc")
        ? SearchFilter
        : (dataHeading === "ID desc")
            ? SearchFilter.sort((a, b) => b.id - a.id)
            : (dataHeading === "ID asc")
                ? SearchFilter.sort((a, b) => a.id - b.id)
                : (dataHeading === "Price (INR) desc")
                    ? SearchFilter.sort((a, b) => b.price - a.price)
                    : (dataHeading === "Price (INR) asc")
                        ? SearchFilter.sort((a, b) => a.price - b.price)
                        : (dataHeading === "Calories desc")
                            ? SearchFilter.sort((a, b) => b.calories - a.calories)
                            : (dataHeading === "Calories asc")
                                ? SearchFilter.sort((a, b) => a.calories - b.calories)
                                : []
    return (
        <DataContext.Provider
            value={{
            setDataHeading,
            dataHeading,
            filteredSnacks,
            setSearchData
        }}>
            {children}
        </DataContext.Provider>
    )
}