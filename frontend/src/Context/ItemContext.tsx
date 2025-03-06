import { createContext, useContext, useEffect, useState } from "react";
import { fetchItems, fetchCategories, addItem, deleteItem } from "../api/api";

const ItemContext = createContext<any>(null);

export const ItemProvider = ({ children }: any) => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchItems().then(setItems);
        fetchCategories().then(setCategories); // 🔥 Fetch categories from backend
    }, []);

    return (
        <ItemContext.Provider value={{ items, categories, addItem, deleteItem }}>
            {children}
        </ItemContext.Provider>
    );
};

export const useItems = () => useContext(ItemContext);
