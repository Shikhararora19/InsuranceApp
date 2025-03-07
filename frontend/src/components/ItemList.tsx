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
        <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Insurance Items</h2>
            
            {loading && <p className="text-center text-gray-500">Loading...</p>}

            <div className="space-y-6">
                {categories.map((category: { id: number; name: string }) => {
                    const categoryTotal = getCategoryTotal(category.id);
                    return (
                        <div key={category.id} className="p-4 border border-gray-300 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-800 flex justify-between">
                                {category.name} <span className="text-indigo-600">${categoryTotal}</span>
                            </h3>
                            <ul className="mt-2 space-y-2">
                                {items
                                    .filter((item: Item) => item.categoryId === category.id)
                                    .map((item: Item) => (
                                        <li key={item.id} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md">
                                            <span className="text-gray-700">{item.name}</span>
                                            <span className="text-gray-900">${item.value}</span>
                                            <button 
                                                onClick={() => handleDelete(item.id)} 
                                                className="text-red-500 hover:text-red-700 transition duration-200"
                                            >
                                                🗑
                                            </button>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            <h3 className="text-xl font-bold text-right text-indigo-700 border-t border-gray-300 pt-4 mt-6">
                TOTAL: ${totalValue}
            </h3>
        </div>
    );
};

export default ItemList;
