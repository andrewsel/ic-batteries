<script>
  // @ts-ignore
  // import { nft } from "canisters/nft"
  import { getAllMintedTokens, mint } from "../scripts/plug.js"
  import { onMount } from "svelte"

  let nfts = []

  async function getNfts() {
    try {
      nfts = await getAllMintedTokens() // nft.allMinted()
      console.log(nfts)
    } catch (e) {
      console.log(e)
    }
  }

  async function mintNft() {
    try {
      const response = await mint()
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  // onMount(getNfts)
</script>

<h1>Gallery</h1>

<button on:click={getNfts}>GET NFTs</button>
<button on:click={mintNft}>MINT NFT</button>

<div class="grid">
  {#each nfts as nft}
    {#if nft.tokenId > 10}
      <div class="nft">
        {nft.tokenId}
        {nft.principalId}
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }
</style>
