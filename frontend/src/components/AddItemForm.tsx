import { useState } from "react";
import { useItems } from "../Context/ItemContext";

const AddItemForm = () => {
    const { addItem } = useItems();
    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [categoryId, setCategoryId] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addItem({ name, value, categoryId });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} required />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
