import { createContext, useContext, useEffect, useState } from "react";
import { fetchItems, addItem, deleteItem } from "../api/api";

const ItemContext = createContext<any>(null);

export const ItemProvider = ({ children }: any) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems().then(setItems);
    }, []);

    return (
        <ItemContext.Provider value={{ items, addItem, deleteItem }}>
            {children}
        </ItemContext.Provider>
    );
};

export const useItems = () => useContext(ItemContext);
