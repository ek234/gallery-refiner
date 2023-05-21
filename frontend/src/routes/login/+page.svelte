<title>Login</title>
<h1>Login</h1>

<script lang="ts">
    import { username } from '../../store';
    import { goto } from '$app/navigation';
    let name: string|null = null;

    export async function handleLogin(event: Event) {
        event.preventDefault();
        username.set(name);
        goto('/dashboard');
    }
</script>

<form on:submit={handleLogin}>
    <label for="username">Username</label>
    <input type="text" bind:value="{name}" name="uname" id="uname"/>
    <button type="submit">Login</button>
</form>