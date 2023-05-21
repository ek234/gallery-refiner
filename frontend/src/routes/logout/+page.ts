import { username } from '../../store';
import { goto } from '$app/navigation';

export const ssr = false;
export const csr = true;

export async function load() {
    username.set(null);
    goto('/login');
}