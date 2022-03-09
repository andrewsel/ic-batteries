<script>
  import {
    isWalletConnected,
    getPrincipal,
    connectPlug,
    getTotalBootcampTokens,
    sendBootcampTokens,
  } from "./auth/plug.js"
  // @ts-ignore
  import { nft } from "canisters/nft"
  import { onMount } from "svelte"
  import Header from "./Header.svelte"
  import Designer from "./Designer.svelte"

  let welcome = "loading..."
  let plugInstalled = false
  let plugConnected = false
  let principalId = false

  // const sayHello = async () => {
  //   const res = await nft.sayHello()
  //   welcome = res.toString()
  // }

  async function handleConnectPlug() {
    plugConnected = await connectPlug()
    principalId = await getPrincipal()
  }

  async function checkIfPlugInstalled() {
    // @ts-ignore
    plugInstalled = window.ic && window.ic.plug ? true : false
  }

  onMount(checkIfPlugInstalled)
</script>

<Header {principalId} />
<main>
  <p>
    Plug Installed: {plugInstalled}
  </p>
  <p>
    Plug Wallet Connected: {plugConnected}
  </p>
  <p>
    Logged in: {principalId}
  </p>
  <button on:click={handleConnectPlug}> Connect Plug Wallet </button>
  <button on:click={getTotalBootcampTokens}> Get Total </button>
  <button on:click={sendBootcampTokens}> Send Tokens </button>
  <!-- <Designer /> -->
</main>

<style global lang="scss">
  body {
    background-color: red;
    padding: 200px;
  }

  @media (max-width: 600px) {
    body {
      padding: 20px;
    }
  }
</style>
