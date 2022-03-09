<script>
  export let principalId
  import Logo from "./assets/logo.svelte"
</script>

<header>
  <Logo />
  <p>{principalId}</p>
</header>

<style>
  header {
    background-color: black;
  }
</style>
