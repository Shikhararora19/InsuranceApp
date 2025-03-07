import { createContext, useContext, useEffect, useState } from "react";
import { fetchItems, fetchCategories, addItem as apiAddItem, deleteItem as apiDeleteItem } from "../api/api";

const ItemContext = createContext<any>(null);

export const ItemProvider = ({ children }: any) => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    // 🔥 Fetch items & categories on mount
    const refreshData = async () => {
        const newItems = await fetchItems();
        const newCategories = await fetchCategories();
        setItems(newItems);
        setCategories(newCategories);
    };

    useEffect(() => {
        refreshData();
    }, []);

    // 🔥 Update `addItem` to refresh items after adding
    const addItem = async (item: { name: string; value: number; categoryId: number }) => {
        await apiAddItem(item);
        refreshData(); // 🔥 Fetch updated items
    };

    // 🔥 Update `deleteItem` to refresh items after deleting
    const deleteItem = async (id: number) => {
        await apiDeleteItem(id);
        refreshData(); // 🔥 Fetch updated items
    };

    return (
        <ItemContext.Provider value={{ items, categories, addItem, deleteItem }}>
            {children}
        </ItemContext.Provider>
    );
};

export const useItems = () => useContext(ItemContext);
