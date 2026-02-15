import type { CartItem } from "@/types/cart";

const CART_KEY = "mundo-electronico-cart";

export function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent<CartItem[]>("cart-updated", { detail: cart }));
}

export function addToCart(product: Omit<CartItem, "quantity">): void {
  const cart = getCart();
  const idx = cart.findIndex((item) => item.id === product.id);

  if (idx >= 0) {
    cart[idx].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
}

export function removeFromCart(productId: string): void {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
}

export function updateQuantity(productId: string, quantity: number): void {
  const cart = getCart();
  const idx = cart.findIndex((item) => item.id === productId);

  if (idx >= 0) {
    quantity <= 0 ? cart.splice(idx, 1) : (cart[idx].quantity = quantity);
  }

  saveCart(cart);
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new CustomEvent<CartItem[]>("cart-updated", { detail: [] }));
}

export function getCartTotal(): number {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartCount(): number {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}