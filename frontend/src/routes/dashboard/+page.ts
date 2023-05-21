import { username } from "../../store";
import { goto } from "$app/navigation";

export const ssr = false;
export const csr = true;

let name: string | null = null;
const unsub_name = username.subscribe(val => name = val);

export async function load() {
    if ( name === null )
        goto("/login");
}