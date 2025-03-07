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
        <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Add New Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Item Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Item Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter item name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                {/* Item Value */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Item Value</label>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        placeholder="Enter item value"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                {/* Category Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        required
                    >
                        {categories.map((category: { id: number; name: string }) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
                >
                    {loading ? "Adding..." : "➕ Add Item"}
                </button>
            </form>
        </div>
    );
};

export default AddItemForm;
