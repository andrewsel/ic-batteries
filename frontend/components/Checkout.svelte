<script>
  import { onMount } from "svelte"
  import { sendBootcampTokens } from "../scripts/plug.js"
  // @ts-ignore
  import { nft } from "canisters/nft"

  export let handleConnectPlug
  export let principalId
  export let backToDesigner
  export let updateScreen
  export let screens
  export let itemSets

  const userStates = {
    NO_PLUG: "NO_PLUG",
    PLUG_NOT_CONNECTED: "PLUG_NOT_CONNECTED",
    PLUG_CONNECTED: "PLUG_CONNECTED",
    NFT_MINTED: "NFT_MINTED",
  }

  let userState = userStates.NO_PLUG

  async function isPlugConnected() {
    // @ts-ignore
    if (!window.ic || !window.ic.plug) {
      return userStates.NO_PLUG
    }
    if (!principalId) {
      return userStates.PLUG_NOT_CONNECTED
    } else {
      return userStates.PLUG_CONNECTED
    }
  }

  function getTokenId() {
    return "" + itemSets.Eyes.selected + itemSets.Hands.selected
  }

  async function handlePayAndMint() {
    const tokensSent = await sendBootcampTokens()
    if (tokensSent) {
      console.log("tokens sent, starting minting")
      try {
        const tokenId = getTokenId()
        console.log("minting" + tokenId)
        nft.mint("http://localhost:3000/?tokenid=" + tokenId)
        userState = userStates.NFT_MINTED
      } catch (e) {
        console.log(e)
      }
    }
  }

  async function handleConnectPlugClick() {
    await handleConnectPlug()
    if (principalId) {
      userState = userStates.PLUG_CONNECTED
    }
  }

  async function doOnMount() {
    userState = await isPlugConnected()
  }

  onMount(doOnMount)
</script>

<section>
  <h1>Mint your IC Battery</h1>
  <div class="next-action">
    {#if userState == userStates.NO_PLUG}
      <p>To mint your NFT, you need to install plug 👇</p>
      <button>Install Plug</button>
    {:else if userState == userStates.PLUG_NOT_CONNECTED}
      <button on:click={handleConnectPlugClick}>Connect Plug Wallet</button>
    {:else if userState == userStates.PLUG_CONNECTED}
      <p>🎉 Your plug wallet is connected</p>
      <p>💰 Minting an IC Battery NFT costs 100 Bootcamp Tokens</p>
      <button on:click={handlePayAndMint}> Pay 100 Tokens & Mint NFT </button>
    {:else if userState == userStates.NFT_MINTED}
      <p>🥳 You've minted a IC Batteries NFT</p>
      <button on:click={() => updateScreen(screens.GALLERY)}>
        View NFT in Gallery →
      </button>
    {:else}
      Something went wrong...
    {/if}

    <p class="back" on:click={backToDesigner}>← Back to design</p>
  </div>
</section>

<style lang="scss">
  .next-action {
    margin-top: 40px;
  }

  p {
    text-align: left;
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
    background-color: #74ff75;
    border: 0;
    border-radius: 12px;
    width: 100%;
    font-weight: bold;
    font-size: 28px;
    padding: 12px 20px;
    &:hover {
      cursor: pointer;
    }
  }

  h1 {
    font-size: 30px;
    color: #74ff75;
    text-transform: uppercase;
  }

  .back {
    color: lightgray;
    font-size: 14px;
    margin-top: 60px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
