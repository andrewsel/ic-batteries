<script>
  import AccordianGroup from "../components/battery-components/AccordianGroup.svelte"
  import Body from "../components/battery-components/Body.svelte"
  import Eyes from "../components/battery-components/Eyes.svelte"
  import Hands from "../components/battery-components/Hands.svelte"
  import Reset from "../components/icons/reset.svelte"
  import Checkout from "../components/Checkout.svelte"

  export let handleConnectPlug
  export let principalId
  export let updateScreen
  export let screens

  let itemSets = {
    Eyes: {
      numOptions: 3,
      selected: 1,
    },
    Hands: {
      numOptions: 3,
      selected: 1,
    },
  }

  let icBatteryId = ""

  $: if (itemSets) {
    icBatteryId = "" + itemSets.Eyes.selected + itemSets.Hands.selected
  }

  function randomReset() {
    const updatedSet = { ...itemSets }
    for (const [group, details] of Object.entries(updatedSet)) {
      updatedSet[group].selected = Math.floor(
        Math.random() * details.numOptions + 1,
      )
    }
    itemSets = { ...updatedSet }
  }

  function updateSelected(itemSet, itemNum) {
    const updatedSet = { ...itemSets }
    updatedSet[itemSet].selected = itemNum
    itemSets = { ...updatedSet }
  }

  let readyToMint = true

  function backToDesigner() {
    readyToMint = false
  }
</script>

<div class="slim-container">
  <section>
    <div id="col1">
      <Body>
        <Eyes optionNumber={itemSets.Eyes.selected} />
        <Hands optionNumber={itemSets.Hands.selected} />
      </Body>
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
    grid-column-gap: 20px;
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
</style>
