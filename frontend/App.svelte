<script>
  import {
    isWalletConnected,
    getPrincipal,
    connectPlug,
    getTotalBootcampTokens,
    sendBootcampTokens,
  } from "./scripts/plug.js"
  import { getQueryParam } from "./scripts/getQueryParam.js"
  import { onMount } from "svelte"
  import Header from "./components/Header.svelte"
  import Home from "./screens/Home.svelte"
  import Mint from "./screens/Mint.svelte"
  import NFT from "./screens/NFT.svelte"
  import Gallery from "./screens/Gallery.svelte"
  import Vips from "./screens/Vips.svelte"
  import About from "./screens/About.svelte"

  const screens = {
    HOME: "HOME",
    NFT: "NFT",
    MINT: "MINT",
    GALLERY: "GALLERY",
    VIP: "VIP",
    ABOUT: "ABOUT",
    PROCESSING: "PROCESSING",
  }

  let screen = screens.HOME
  let principalId = ""
  let icBatteryId = ""

  async function setPrincipalId(id) {
    principalId = id
  }

  async function handleConnectPlug() {
    principalId = await connectPlug()
  }

  function updateScreen(newScreen) {
    screen = newScreen
  }

  async function doOnMount() {
    icBatteryId = getQueryParam("icbatteryid")
    if (icBatteryId) {
      console.log(icBatteryId)
      screen = screens.NFT
    }
  }

  onMount(doOnMount)
</script>

{#if screen == screens.NFT}
  <NFT {icBatteryId} />
{:else}
  <div class="container">
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
      {:else if screen == screens.GALLERY}
        <Gallery {handleConnectPlug} {principalId} />
      {:else if screen == screens.VIP}
        <Vips {handleConnectPlug} {principalId} />
      {:else if screen == screens.ABOUT}
        <About />
      {:else}
        Page not found
      {/if}
    </main>
  </div>
{/if}

<style global lang="scss">
  @use "./styles/global.scss" as *;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px;
  }

  main {
    color: white;
    margin: 40px 0;
  }
</style>
