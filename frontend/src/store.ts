import { browser } from "$app/environment";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const username: Writable<string|null> = writable(browser && localStorage.getItem("username") || null);

if ( browser )
    username.subscribe(val => {
            if ( val !== null )
                localStorage.setItem("username", val);
            else
                localStorage.removeItem("username");
    })