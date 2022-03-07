<script>
	import { onMount } from 'svelte';
  // @ts-ignore
  import { nft } from "canisters/nft";

  let welcome = "loading..."

  const sayHello = async () => {
    const res = await nft.sayHello()
    welcome = res.toString()
  }

  onMount(sayHello)
</script>

<header class="App-header">
  <p>
    { welcome }
  </p>
</header>

<style>
</style>
