<script>
  import AccordianItem from "./battery-components/AccordianItem.svelte"
  import Body from "./battery-components/Body.svelte"
  import Eyes from "./battery-components/Eyes.svelte"
  import Eyes_1 from "./battery-components/Eyes_1.svelte"
  import Eyes_2 from "./battery-components/Eyes_2.svelte"

  let itemSets = {
    Eyes: {
      numOptions: 2,
      selected: 1,
    },
  }

  function updateSelected(itemSet, itemNum) {
    const updatedSet = { ...itemSets }
    updatedSet[itemSet].selected = itemNum
    itemSets = { ...updatedSet }
  }
</script>

<div class="slim-container">
  <section>
    <div id="col1">
      <Body>
        <Eyes selected={itemSets.Eyes.selected} />
      </Body>
    </div>
    <div id="col2">
      <h1>Design your IC Battery</h1>
      <button>Random Reset</button>
      <div class="accordian">
        {#each Object.entries(itemSets) as itemSet}
          <div class="heading">{itemSet[0]}</div>
          <div class="items">
            {#each Array(itemSet[1].numOptions) as item, index}
              <div
                class="item"
                on:click={() => updateSelected(itemSet[0], index + 1)}
              >
                <AccordianItem
                  itemSet={itemSet[0]}
                  index={index + 1}
                  selected={itemSet[1].selected == index + 1}
                />
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  .slim-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
  }

  h1 {
    font-size: 30px;
    color: #fa51d3;
    text-transform: uppercase;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
</style>
