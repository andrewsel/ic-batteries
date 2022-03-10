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
  import Mint from "./screens/Mint.svelte"

  const userStates = {
    NO_PLUG: "NO_PLUG",
    PLUG_NOT_CONNECTED: "PLUG_NOT_CONNECTED",
    NFT_NOT_MINTED: "NFT_NOT_MINTED",
    NFT_MINTED: "NFT_MINTED",
  }

  const screens = {
    LOADING: "LOADING",
    NFT: "NFT",
    MINT: "MINT",
    GALLERY: "GALLERY",
    VIP: "VIP",
    ABOUT: "ABOUT",
  }

  let screen = screens.LOADING
  let welcome = "loading..."
  let principalId = ""
  let userState = userStates.NO_PLUG

  const sayHello = async () => {
    const res = await nft.sayHello()
    const name = await nft.name()
    welcome = res + name
  }

  async function handleConnectPlug() {
    const plugConnected = await connectPlug()
    if (plugConnected) {
      principalId = await getPrincipal()
      userState = await getUserState()
    }
  }

  async function isNftMinted() {
    return false
  }

  async function getUserState() {
    // @ts-ignore
    if (!window.ic || !window.ic.plug) {
      return userStates.NO_PLUG
    }
    if (!principalId) {
      return userStates.PLUG_NOT_CONNECTED
    }
    const nftMinted = await isNftMinted()
    if (nftMinted) {
      return userStates.NFT_MINTED
    } else {
      return userStates.NFT_NOT_MINTED
    }
  }

  async function doOnMount() {
    const tokenId = getQueryParam("tokenid")
    if (tokenId) {
      console.log(tokenId)
      screen = screens.NFT
    } else {
      userState = await getUserState()
      screen = screens.MINT
    }
  }

  $: console.log(screen)

  onMount(doOnMount)
</script>

<div class="container">
  {#if screen == screens.LOADING}
    <div class="loading">Loading...</div>
  {:else if screen == screens.NFT}
    <div class="nft">Todo: Show NFT</div>
  {:else}
    <Header {principalId} {handleConnectPlug} />
    <main>
      <!-- {welcome} -->
      <Mint {userState} {userStates} {handleConnectPlug} />
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
