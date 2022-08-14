import { writable } from 'svelte/store';

export const completedCount = writable(0);
export const count = writable(0);