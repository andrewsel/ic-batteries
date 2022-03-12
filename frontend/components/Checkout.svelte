<script>
  import { onMount } from "svelte"
  import { sendBootcampTokens, mint } from "../scripts/plug.js"
  import Spinner from "./icons/Spin.svelte"

  export let handleConnectPlug
  export let principalId
  export let backToDesigner
  export let updateScreen
  export let screens
  export let icBatteryId

  const userStates = {
    NO_PLUG: "NO_PLUG",
    PLUG_NOT_CONNECTED: "PLUG_NOT_CONNECTED",
    PLUG_CONNECTED: "PLUG_CONNECTED",
    NFT_MINTED: "NFT_MINTED",
  }

  let userState = userStates.NO_PLUG

  let processing = false

  const messages = [
    "Processing payment...",
    "Doing daily challenges...",
    "Dreaming about Motoko...",
    "Going down the IC rabbit hole...",
    "Checking the Motoko docs...",
    "Minting cool NFT...",
    "Catching up on Discord...",
    "Becoming an SVG wizard...",
    "Watching Bootcamp lectures at 1.5x speed...",
    "Joining the 8 year gang...",
  ]
  let message = messages[0]
  let messageShowing = 0
  let messageInterval
  $: if (processing) {
    if (!messageInterval) {
      messageInterval = setInterval(() => {
        messageShowing =
          messageShowing == messages.length - 1 ? 0 : messageShowing + 1
        message = messages[messageShowing]
      }, 2500)
    }
  } else {
    clearInterval(messageInterval)
  }

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

  $: if (principalId && userState == userStates.PLUG_NOT_CONNECTED) {
    userState = userStates.PLUG_CONNECTED
  }

  async function handlePayAndMint() {
    processing = true
    const tokensSent = await sendBootcampTokens()
    if (tokensSent) {
      console.log("tokens sent, starting minting")
      try {
        const tokenId = await mint(
          "https://wo25k-iqaaa-aaaan-qacda-cai.raw.ic0.app/?icbatteryid=" +
            icBatteryId,
        )
        console.log("Token Minted: " + tokenId)
        userState = userStates.NFT_MINTED
      } catch (e) {
        console.log(e)
      }
    }
    processing = false
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

{#if processing}
  <div class="processing">
    <Spinner />
    <p>
      {message}
    </p>
  </div>
{:else}
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
        <p>🥳 You've minted an IC Batteries NFT</p>
        <button on:click={() => updateScreen(screens.GALLERY)}>
          View NFT in Gallery →
        </button>
      {:else}
        Something went wrong...
      {/if}

      <p class="back" on:click={backToDesigner}>← Back to design</p>
    </div>
  </section>
{/if}

<style lang="scss">
  .processing {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
  }

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

  @media (max-width: 800px) {
    button {
      font-size: 20px;
    }
  }
</style>
