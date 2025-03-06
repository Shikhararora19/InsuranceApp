import { useItems } from "../Context/ItemContext";

interface Item {
    id: number;
    name: string;
    value: number;
}

const ItemList = () => {
    const { items, deleteItem } = useItems();

    return (
        <ul>
            {items.map((item: Item) => (
            <li key={item.id}>
                {item.name} - ${item.value}
                <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
            ))}
        </ul>
    );
};

export default ItemList;
