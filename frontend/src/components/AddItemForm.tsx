import { useState } from "react";
import { useItems } from "../Context/ItemContext";

const AddItemForm = () => {
    const { addItem, categories } = useItems(); // Get categories from context
    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [categoryId, setCategoryId] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addItem({ name, value, categoryId });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Item Name"
                required
            />
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="Item Value"
                required
            />
            <select value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))} required>
                {categories.map((category: { id: number; name: string }) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
