export const BASE_URL = import.meta.env.BASE_URL;

/**
 * Formats a path relative to the base URL.
 * Handles trailing slashes and ensures correct concatenation.
 * 
 * @example
 * formatUrl('/') // returns '/base/'
 * formatUrl('/catalog') // returns '/base/catalog'
 * formatUrl('cart') // returns '/base/cart'
 * 
 * @param {string} path - The path to format
 * @returns {string} - The full URL including base
 */

export const formatUrl = (path) => {
    if (!path) return BASE_URL;

    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    if (BASE_URL === '/') return cleanPath;

    if (cleanPath === '/') return BASE_URL;

    if (BASE_URL.endsWith('/')) {
        return `${BASE_URL}${cleanPath.substring(1)}`;
    }

    return `${BASE_URL}${cleanPath}`;
};
