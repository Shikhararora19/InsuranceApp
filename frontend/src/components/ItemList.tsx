import { useItems } from "../Context/ItemContext";
import { useState } from "react";

interface Item {
    id: number;
    name: string;
    value: number;
    categoryId: number;
}

const ItemList = () => {
    const { items, categories, deleteItem } = useItems();
    const [loading, setLoading] = useState(false);

    // 🔥 Function to calculate total value per category
    const getCategoryTotal = (categoryId: number): number =>
        items
            .filter((item: Item) => item.categoryId === categoryId)
            .reduce((total: number, item: Item) => total + item.value, 0);

    // 🔥 Calculate overall total value
    const totalValue: number = items.reduce((total: number, item: Item) => total + item.value, 0);

    // 🔥 Handle item deletion with loader
    const handleDelete = async (id: number) => {
        setLoading(true);
        await deleteItem(id); // 🔥 Calls `deleteItem`, which refreshes items
        setLoading(false);
    };

    return (
        <div style={{ border: "1px solid black", padding: "20px", maxWidth: "400px", margin: "auto" }}>
            {loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}

            {categories.map((category: { id: number; name: string }) => {
                const categoryTotal = getCategoryTotal(category.id);
                return (
                    <div key={category.id}>
                        <h3>{category.name} <span style={{ float: "right" }}>${categoryTotal}</span></h3>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {items
                                .filter((item: Item) => item.categoryId === category.id)
                                .map((item: Item) => (
                                    <li key={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
                                        {item.name} <span>${item.value}</span>
                                        <button onClick={() => handleDelete(item.id)} style={{ marginLeft: "10px" }}>🗑</button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                );
            })}

            <h3 style={{ borderTop: "1px solid black", paddingTop: "10px", textAlign: "right" }}>
                TOTAL: ${totalValue}
            </h3>
        </div>
    );
};

export default ItemList;
