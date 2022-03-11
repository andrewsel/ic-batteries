<script>
  // @ts-ignore
  import { nft } from "canisters/nft"
  // import { getAllMintedTokens, mint } from "../scripts/plug.js"
  import { onMount } from "svelte"

  let nfts = []

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
      {nft.tokenId}
      {nft.principalId}
    </div>
  {/each}
</div>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }
</style>
