<script>
  import AccordianItem from "./AccordianItem.svelte"
  import { colors } from "../../scripts/helpers.js"

  export let groupName
  export let numOptions
  export let selectedItem
  export let updateSelected
  export let updateBodyColor
  export let updateHeadColor
  export let bodyColor
  export let headColor
  export let sunglassesLeft = -1

  let expanded = false
</script>

<article>
  <div class="heading-row" on:click={() => (expanded = !expanded)}>
    <div class="heading">{groupName}</div>
    <div class="caret">{expanded ? "▲" : "▼"}</div>
  </div>
  {#if expanded}
    {#if groupName == "Body"}
      <div class="items colors">
        <p>Head Color</p>
        {#each colors as color, i}
          <div
            on:click={() => updateHeadColor(i + 1)}
            style="background-color: #{color}"
            class={headColor == i + 1 ? "selected" : ""}
          />
        {/each}
        <p>Body Color</p>
        {#each colors as color, i}
          <div
            on:click={() => updateBodyColor(i + 1)}
            style="background-color: #{color}"
            class={bodyColor == i + 1 ? "selected" : ""}
          />
        {/each}
        <p style="margin-bottom: -20px">Body style</p>
      </div>
    {/if}
    <div class="items">
      {#each Array(numOptions) as item, index}
        <div class="item" on:click={() => updateSelected(groupName, index + 1)}>
          <AccordianItem
            itemSet={groupName}
            optionNumber={index + 1}
            selected={selectedItem == index + 1}
            {headColor}
            {bodyColor}
            {colors}
          />
          {#if groupName == "Eyes" && index == 2 && sunglassesLeft > -1}
            <div class="sunglasses">
              <strong>{sunglassesLeft}</strong> remaining
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</article>

<style lang="scss">
  .sunglasses {
    text-align: center;
    margin-top: -40px;
    font-size: 14px;
  }

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
    grid-gap: 10px;
    &.colors {
      grid-template-columns: repeat(8, 1fr);
      p {
        grid-column: span 8;
        margin-top: 10px;
      }
      div {
        width: 100%;
        height: 36px;
        border-radius: 6px;
        border: 3px solid transparent;
        &.selected {
          border-color: #74ff75;
        }
      }
    }
  }
</style>
