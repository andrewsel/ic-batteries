<script>
  import AccordianItem from "./AccordianItem.svelte"

  export let groupName
  export let numOptions
  export let selectedItem
  export let updateSelected

  let expanded = false
</script>

<article>
  <div class="heading-row" on:click={() => (expanded = !expanded)}>
    <div class="heading">{groupName}</div>
    <div class="caret">{expanded ? "▲" : "▼"}</div>
  </div>
  {#if expanded}
    <div class="items">
      {#each Array(numOptions) as item, index}
        <div class="item" on:click={() => updateSelected(groupName, index + 1)}>
          <AccordianItem
            itemSet={groupName}
            optionNumber={index + 1}
            selected={selectedItem == index + 1}
          />
        </div>
      {/each}
    </div>
  {/if}
</article>

<style lang="scss">
  article {
    border: 1px solid white;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .heading-row {
    width: 100%;
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
    user-select: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: #222222;
    }
    .caret {
      font-size: 0.8rem;
      margin-right: 4px;
    }
  }

  .items {
    margin-top: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
</style>
