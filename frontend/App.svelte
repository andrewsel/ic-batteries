<script>
  import {
    isWalletConnected,
    getPrincipal,
    connectPlug,
    getTotalBootcampTokens,
    sendBootcampTokens,
  } from "./scripts/plug.js"
  import { getQueryParam } from "./scripts/getQueryParam.js"
  // @ts-ignore
  import { nft } from "canisters/nft"
  import { onMount } from "svelte"
  import Header from "./components/Header.svelte"
  import Home from "./screens/Home.svelte"
  import Mint from "./screens/Mint.svelte"

  const screens = {
    HOME: "HOME",
    NFT: "NFT",
    MINT: "MINT",
    GALLERY: "GALLERY",
    VIP: "VIP",
    ABOUT: "ABOUT",
  }

  let screen = screens.MINT
  let welcome = "loading..."
  let principalId = ""

  const sayHello = async () => {
    const res = await nft.sayHello()
    const name = await nft.name()
    welcome = res + name
  }

  async function setPrincipalId(id) {
    principalId = id
  }

  async function handleConnectPlug() {
    const plugConnected = await connectPlug()
    if (plugConnected) {
      principalId = await getPrincipal()
    }
  }

  function updateScreen(newScreen) {
    screen = newScreen
  }

  async function doOnMount() {
    const tokenId = getQueryParam("tokenid")
    if (tokenId) {
      console.log(tokenId)
      screen = screens.NFT
    }
  }

  onMount(doOnMount)
</script>

<div class="container">
  {#if screen == screens.LOADING}
    <div class="loading">Loading...</div>
  {:else if screen == screens.NFT}
    <div class="nft">Todo: Show NFT</div>
  {:else}
    <Header
      {principalId}
      {handleConnectPlug}
      {updateScreen}
      {screens}
      {screen}
    />
    <main>
      {#if screen == screens.HOME}
        <Home {updateScreen} {screens} />
      {:else if screen == screens.MINT}
        <Mint {handleConnectPlug} {principalId} {updateScreen} {screens} />
      {:else}
        Page not found
      {/if}
    </main>
  {/if}
</div>

<style global lang="scss">
  @use "./styles/global.scss" as *;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    .loading,
    .nft {
      color: white;
      display: flex;
      height: 100vh;
      width: 1005;
      justify-content: center;
      align-items: center;
    }
  }

  main {
    color: white;
  }
</style>
