import { useItems } from "../Context/ItemContext";

interface Item {
    id: number;
    name: string;
    value: number;
    categoryId: number;
}

const ItemList = () => {
    const { items, categories, deleteItem } = useItems();

    return (
        <div>
            {categories.map((category: { id: number; name: string }) => (
                <div key={category.id}>
                    <h3>{category.name}</h3>
                    <ul>
                        {items
                            .filter((item: Item) => item.categoryId === category.id)
                            .map((item: Item) => (
                                <li key={item.id}>
                                    {item.name} - ${item.value}
                                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                                </li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
