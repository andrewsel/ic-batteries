<script>
  // @ts-ignore
  import { nft } from "canisters/nft"
  import Battery from "../components/battery-components/Battery.svelte"
  // import { getAllMintedTokens, mint } from "../scripts/plug.js"
  import { onMount } from "svelte"
  import { colors } from "../scripts/helpers.js"

  let nfts = []

  function getDesignCodeFromUri(uri) {
    const code = uri.slice(uri.length - 7, uri.length)
    return code
  }

  async function getNfts() {
    try {
      nfts = await nft.allMinted()
      console.log(nfts)
    } catch (e) {
      console.log(e)
    }
  }

  onMount(getNfts)
</script>

<h1>Gallery</h1>

<div class="grid">
  {#each nfts as nft}
    <div class="nft">
      <Battery designOptions={getDesignCodeFromUri(nft.uri[0])} />
      <h3>#{nft.tokenId}</h3>
      <p>Owned by: {nft.principalId.slice(0, 20)}...</p>
    </div>
  {/each}
</div>

<style lang="scss">
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
</style>
