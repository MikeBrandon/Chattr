import { writable } from "svelte/store";

export const AUTH_TOKEN = writable<string>("");

export const updateAuth = (value = "") => {
    AUTH_TOKEN.set(value);
    localStorage.setItem('auth_token', value);
}