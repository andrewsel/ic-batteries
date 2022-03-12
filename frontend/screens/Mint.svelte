<script>
  import { onMount } from "svelte"

  // @ts-ignore
  import { nft } from "canisters/nft"
  import AccordianGroup from "../components/battery-components/AccordianGroup.svelte"
  import Battery from "../components/battery-components/Battery.svelte"
  import Reset from "../components/icons/reset.svelte"
  import Checkout from "../components/Checkout.svelte"

  export let handleConnectPlug
  export let principalId
  export let updateScreen
  export let screens

  let nftsLeft
  let sunglassesLeft

  let itemSets = {
    Body: {
      numOptions: 3,
      selected: 1,
      headColor: 1,
      bodyColor: 2,
    },
    Eyes: {
      numOptions: 5,
      selected: 1,
    },
    Mouth: {
      numOptions: 5,
      selected: 1,
    },
    Hands: {
      numOptions: 3,
      selected: 1,
    },
    Background: {
      numOptions: 6,
      selected: 1,
    },
  }

  let icBatteryId = ""

  $: if (itemSets) {
    icBatteryId =
      "" +
      itemSets.Body.headColor +
      itemSets.Body.bodyColor +
      itemSets.Body.selected +
      itemSets.Eyes.selected +
      itemSets.Mouth.selected +
      itemSets.Hands.selected +
      itemSets.Background.selected
  }

  async function getRemaining() {
    try {
      nftsLeft = await nft.nftsLeft()
      sunglassesLeft = await nft.sunglassesLeft()
    } catch (e) {
      console.log(e)
    }
  }

  function randomReset() {
    const updatedSet = { ...itemSets }
    for (const [group, details] of Object.entries(updatedSet)) {
      updatedSet[group].selected = Math.floor(
        Math.random() * details.numOptions + 1,
      )
      updatedSet.Body.headColor = Math.floor(Math.random() * 8 + 1)
      updatedSet.Body.bodyColor = Math.floor(Math.random() * 8 + 1)
    }
    itemSets = { ...updatedSet }
  }

  function updateSelected(itemSet, itemNum) {
    const updatedSet = { ...itemSets }
    updatedSet[itemSet].selected = itemNum
    itemSets = { ...updatedSet }
  }

  function updateBodyColor(col = 1) {
    const updatedSet = { ...itemSets }
    updatedSet.Body.bodyColor = col
    itemSets = { ...updatedSet }
  }

  function updateHeadColor(col = 1) {
    const updatedSet = { ...itemSets }
    updatedSet.Body.headColor = col
    itemSets = { ...updatedSet }
  }

  let readyToMint = false

  function backToDesigner() {
    readyToMint = false
  }

  onMount(getRemaining)
</script>

<div class="slim-container">
  <section>
    <div id="col1">
      <Battery designOptions={icBatteryId} />
    </div>
    <div id="col2">
      {#if readyToMint}
        <Checkout
          {handleConnectPlug}
          {principalId}
          {backToDesigner}
          {updateScreen}
          {screens}
          {icBatteryId}
        />
      {:else}
        <h1 class="pink">Design your IC Battery</h1>
        <p><strong>{nftsLeft}</strong>/2000 IC Batteries remaining</p>
        <div class="buttons">
          <button id="reset" on:click={randomReset}>
            <Reset />
            <div>Random Reset</div>
          </button>
          <button id="mint" on:click={() => (readyToMint = true)}>
            <div>I'm Ready To Mint →</div>
          </button>
        </div>

        <div class="accordian">
          {#each Object.entries(itemSets) as itemSet}
            <AccordianGroup
              groupName={itemSet[0]}
              numOptions={itemSet[1].numOptions}
              selectedItem={itemSet[1].selected}
              {updateSelected}
              {updateBodyColor}
              {updateHeadColor}
              bodyColor={itemSets.Body.bodyColor}
              headColor={itemSets.Body.headColor}
              {sunglassesLeft}
            />
          {/each}
        </div>
      {/if}
    </div>
  </section>
</div>

<style lang="scss">
  .slim-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 30px 0 40px 0;
  }

  button {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 12px;
    padding: 6px;
    cursor: pointer;
    &#reset {
      border-color: white;
      color: white;
      background-color: transparent;
      &:hover {
        background-color: #222222;
      }
    }
    &#mint {
      border-color: #74ff75;
      color: black;
      background-color: #74ff75;
      &:hover {
        background-color: #51ff51;
      }
    }
  }

  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 20px;
    }

    .buttons {
      grid-template-columns: 100%;
    }
  }

  @media (max-width: 680px) {
    section {
      grid-template-columns: 1fr 2fr;
      grid-column-gap: 20px;
    }
  }
</style>
