<script>
  // @ts-ignore
  import { nft } from "canisters/nft"
  import Battery from "../components/battery-components/Battery.svelte"
  import { sampleNfts } from "../scripts/helpers.js"
  // import { getAllMintedTokens, mint } from "../scripts/plug.js"
  import { onMount } from "svelte"
  import ExternalLink from "../components/icons/ExternalLink.svelte"
  import PlugButton from "../components/PlugButton.svelte"

  let nfts = []
  let loading = true
  let showAll = true
  export let principalId = ""
  export let handleConnectPlug

  function getDesignCodeFromUri(uri) {
    const code = uri.slice(uri.length - 7, uri.length)
    return code
  }

  async function getNfts() {
    try {
      nfts = await nft.allMinted()
      if (nfts.length < 1) {
        nfts = sampleNfts
      }
      loading = false
      console.log(nfts)
    } catch (e) {
      console.log(e)
    }
  }

  onMount(getNfts)
</script>

<h1>Gallery</h1>
{#if loading}
  <p>Loading...</p>
{/if}
<div class="switcher">
  <div
    on:click={() => (showAll = true)}
    class={showAll ? "selected" : ""}
    id="all"
  >
    Show All
  </div>
  <div
    on:click={() => (showAll = false)}
    class={!showAll ? "selected" : ""}
    id="mine"
  >
    Show Mine
  </div>
</div>
{#if !showAll && !principalId}
  <p class="plug">Connect your plug wallet to see your IC Battery NFTs</p>
  <PlugButton {handleConnectPlug} {principalId} />
{/if}
<div class="grid">
  {#each nfts as nft}
    {#if showAll || nft.principalId == principalId}
      <div class="nft">
        <Battery designOptions={getDesignCodeFromUri(nft.uri[0])} />
        <div class="row">
          <h2>#{nft.tokenId}</h2>
          <button on:click={() => window.open(nft.uri[0], "_blank")?.focus()}>
            <span style="margin-right: 5px"> View </span>
            <ExternalLink />
          </button>
        </div>
        <p>Owned by: {nft.principalId.slice(0, 20)}...</p>
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  button {
    border: 0;
    border-radius: 40px;
    background-color: #fa51d3;
    color: black;
    padding: 2px 12px;
    font-size: 12px;
    height: 20px;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .switcher {
    margin-top: 20px;
    display: flex;
    > div {
      padding: 10px 30px;
      border: 1px solid #fa51d3;
      user-select: none;
      cursor: pointer;
      &.selected {
        background-color: #fa51d3;
        color: black;
      }
      &#all {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }
      &#mine {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
  }

  .grid {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }

  p {
    font-size: 13px;
    color: #cccccc;
  }

  p.plug {
    margin-bottom: 10px;
    font-size: 20px;
    margin-top: 40px;
  }

  @media (max-width: 800px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
