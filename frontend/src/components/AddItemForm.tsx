import { useState } from "react";
import { useItems } from "../Context/ItemContext";

const AddItemForm = () => {
    const { addItem, categories } = useItems();
    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [categoryId, setCategoryId] = useState(categories.length > 0 ? categories[0].id : 1);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await addItem({ name, value, categoryId });
        setName("");
        setValue(0);
        setCategoryId(categories.length > 0 ? categories[0].id : 1);
        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-5 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-center mb-3">Add New Item</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Item Name"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                    required
                />
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    placeholder="Item Value"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                    required
                />
                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                    required
                >
                    {categories.map((category: { id: number; name: string }) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    {loading ? "Adding..." : "Add Item"}
                </button>
            </form>
        </div>
    );
};

export default AddItemForm;
