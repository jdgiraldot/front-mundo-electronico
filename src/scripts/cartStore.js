// ─── Cart Store (LocalStorage) ───────────────────────────────────────
const CART_KEY = 'mundo-electronico-cart';

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
}

export function addToCart(product) {
  const cart = getCart();
  const idx = cart.findIndex((item) => item.id === product.id);

  if (idx >= 0) {
    cart[idx].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });
  }

  saveCart(cart);
}

export function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
}

export function updateQuantity(productId, quantity) {
  const cart = getCart();
  const idx = cart.findIndex((item) => item.id === productId);
  if (idx >= 0) {
    if (quantity <= 0) {
      cart.splice(idx, 1);
    } else {
      cart[idx].quantity = quantity;
    }
  }
  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: [] }));
}

export function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}
