const BASE_URL = "http://localhost:5067/api"; // Ensure this matches backend

export async function fetchItems() {
    const res = await fetch(`${BASE_URL}/items`);
    return res.json();
}

export async function fetchCategories() { // 🔥 Fetching from new /api/categories
    const res = await fetch(`${BASE_URL}/categories`);
    return res.json();
}

export async function addItem(item: { name: string; value: number; categoryId: number }) {
    const res = await fetch(`${BASE_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });
    return res.json();
}

export async function deleteItem(id: number) {
    await fetch(`${BASE_URL}/items/${id}`, { method: "DELETE" });
}
