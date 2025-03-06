const BASE_URL = "http://localhost:5000/api/items";

export async function fetchItems() {
    const res = await fetch(BASE_URL);
    return res.json();
}

export async function addItem(item: { name: string; value: number; categoryId: number }) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });
    return res.json();
}

export async function deleteItem(id: number) {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
