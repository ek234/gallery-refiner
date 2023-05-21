<script lang="ts">
    import { username } from '../store';
</script>

<nav>
    <a href="/">home</a>
    <a href="/dashboard">dashboard</a>
    {#if $username}
        <a href="/logout">logout</a>
    {:else}
        <a href="/login">login</a>
    {/if}
</nav>

<slot></slot>