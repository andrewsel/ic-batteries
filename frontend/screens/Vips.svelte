<script>
  // @ts-ignore
  import { nft } from "canisters/nft"
  import PlugButton from "../components/PlugButton.svelte"
  import { sampleNfts } from "../scripts/helpers.js"

  export let handleConnectPlug

  export let principalId = ""
  let hasNft = false
  let hasSunglasses = false
  let inRoom1 = false
  let inRoom2 = false
  let checking = false

  async function checkIfOnList(p) {
    try {
      let nfts = await nft.allMinted()
      if (nfts.length < 1) {
        nfts = sampleNfts
      }
      console.log(nfts)
      console.log(p)
      nfts.forEach((n) => {
        if (p === n.principalId) {
          hasNft = true
          const uri = n.uri[0]
          const code = uri.slice(uri.length - 7, uri.length)
          if (code[3] == 3) {
            hasSunglasses = true
          }
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  $: if (principalId) {
    checkIfOnList(principalId)
  }
</script>

{#if inRoom1}
  <div class="inside-room">
    <h2>Welcome to Room 1</h2>
    <img
      src="https://media.giphy.com/media/hKYigb3Djp8pa/giphy.gif"
      alt="Waynes World Backstage Pass"
    />
    <p on:click={() => (inRoom1 = false)}>Leave Room</p>
  </div>
{/if}

{#if inRoom2}
  <div class="inside-room">
    <h2>Welcome to Room 2</h2>
    <img
      src="https://media.giphy.com/media/k7vVF6G7AIeJgui8yF/giphy.gif"
      alt="Waynes World Backstage Pass"
    />
    <p on:click={() => (inRoom2 = false)}>Leave Room</p>
  </div>
{/if}

<h1>VIP Rooms</h1>

{#if !principalId}
  <p class="plug">Connect plug wallet to see if you can enter a VIP room</p>
  <PlugButton {handleConnectPlug} {principalId} />
{/if}

{#if checking}
  Checking if you're on the list...
{/if}

<div class="rooms">
  <div class="room">
    <div style="font-size: 40px">🔋</div>
    <h2>Room 1</h2>
    <h4>IC Battery NFT required to access</h4>
    <div class="door">
      {#if principalId && hasNft}
        <p>✅ You have an IC Battery NFT</p>
      {:else if principalId && !hasNft}
        <p>❌ You do not have an IC Battery NFT</p>
      {/if}
      <button
        on:click={() => (inRoom1 = hasNft)}
        class={hasNft ? "" : "disabled"}>Enter Room 1 →</button
      >
    </div>
  </div>
  <div class="room two">
    <div style="font-size: 40px">😎</div>
    <h2>Room 2</h2>
    <h4>IC Battery NFT with Sunglasses required to access</h4>
    <div class="door">
      {#if principalId && hasSunglasses}
        <p>✅ You have an IC Battery NFT with sunglasses</p>
      {:else if principalId && !hasSunglasses}
        <p>❌ You do not have an IC Battery NFT with sunglasses</p>
      {/if}

      <button
        on:click={() => (inRoom2 = hasSunglasses)}
        class={hasSunglasses ? "" : "disabled"}>Enter Room 2 →</button
      >
    </div>
  </div>
</div>

<style lang="scss">
  .inside-room {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      max-width: 30vw;
      max-height: 50vh;
    }
    p {
      margin-top: 40px;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  h1 {
    margin-bottom: 30px;
  }

  h2 {
    margin-bottom: 10px;
  }

  p.plug {
    margin-bottom: 10px;
  }

  .rooms {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  .room {
    border: 3px solid #fa51d3;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .door {
    margin-top: 30px;
    width: 100%;
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
    &.disabled {
      background-color: #cccccc;
      cursor: not-allowed;
      color: #777777;
    }
  }

  @media (max-width: 800px) {
    .rooms {
      margin-top: 40px;
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 40px;
    }
  }
</style>
