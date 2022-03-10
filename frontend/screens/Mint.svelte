<script>
  import Designer from "../components/Designer.svelte"
  import { sendBootcampTokens } from "../scripts/plug.js"

  export let userState = ""
  export let userStates = {}
  export let handleConnectPlug

  async function handlePayment() {
    const tokensSent = await sendBootcampTokens()
    if (tokensSent) {
      // Mint NFT
    }
  }
</script>

<section>
  <div class="next-action">
    <Designer />
    <!-- {#if userState == userStates.NO_PLUG}
      <p>To get started, you need to install plug 👇</p>

      <button>Install Plug</button>
    {:else if userState == userStates.PLUG_NOT_CONNECTED}
      <button on:click={handleConnectPlug}>Connect Plug Wallet</button>
    {:else if userState == userStates.PAYMENT_NOT_RECEIVED}
      <p>🎉 Your plug wallet is connected</p>
      <p>Next step: pay 100 Bootcamp Tokens to unlock minter</p>
      <button on:click={handlePayment}>Pay 100 Bootcamp Tokens</button>
    {:else if userState == userStates.PAYMENT_RECEIVED}
      <Designer />
    {:else if userState == userStates.NFT_MINTED}
      <p>🥳 You've minted a IC Batteries NFT</p>
      <button>View your NFT in the Gallery</button>
    {:else}
      Something went wrong...
    {/if} -->
  </div>
</section>

<style lang="scss">
  section {
    padding: 40px;
    color: white;
  }

  .next-action {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    text-align: center;
  }

  button {
    margin-top: 20px;
    background-color: #74ff75;
    border: 0;
    border-radius: 12px;
    width: 460px;
    max-width: 100%;
    font-weight: bold;
    font-size: 30px;
    padding: 12px 20px;
    &:hover {
      cursor: pointer;
    }
  }
</style>
