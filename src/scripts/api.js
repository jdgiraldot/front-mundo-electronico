// ─── API Client ──────────────────────────────────────────────────────
const API_BASE = 'http://localhost:5290/api';

async function request(endpoint, options = {}) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
    });

    if (!res.ok) {
        const errorBody = await res.text().catch(() => '');
        throw new Error(`API error ${res.status}: ${errorBody}`);
    }

    return res.json();
}

export function getProducts() {
    return request('/products');
}

export function getProduct(id) {
    return request(`/products/${id}`);
}

export function createOrder(orderData) {
    return request('/orders', {
        method: 'POST',
        body: JSON.stringify(orderData),
    });
}
