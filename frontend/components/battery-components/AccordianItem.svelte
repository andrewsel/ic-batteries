<script>
  import Eyes from "./Eyes.svelte"
  import Hands from "./Hands.svelte"
  import Mouths from "./Mouths.svelte"
  import Bodies from "./Bodies.svelte"
  import { bgUrl } from "../../scripts/helpers.js"

  export let itemSet
  export let optionNumber
  export let selected
  export let headColor
  export let bodyColor
  export let colors
</script>

{#if itemSet == "Eyes"}
  <svg
    class={selected ? "selected" : ""}
    viewBox="240 100 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Eyes {optionNumber} />
  </svg>
{/if}

{#if itemSet == "Body"}
  <svg
    class={selected ? "selected" : ""}
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Bodies {optionNumber} {headColor} {bodyColor} {colors} />
  </svg>
{/if}

{#if itemSet == "Hands"}
  <svg
    class={selected ? "selected" : ""}
    viewBox="50 50 900 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Hands {optionNumber} />
  </svg>
{/if}

{#if itemSet == "Mouth"}
  <svg
    class={selected ? "selected" : ""}
    viewBox="400 290 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Mouths {optionNumber} />
  </svg>
{/if}

{#if itemSet == "Background"}
  <div
    class="bg {selected ? 'selected' : ''}"
    style="background-image: url({bgUrl[optionNumber]})"
  />
{/if}

<style lang="scss">
  svg,
  .bg {
    width: 100%;
    background-color: #555555; //#aaaaaa;;
    border-radius: 12px;
    border: 3px solid transparent;
    &.selected {
      border-color: #74ff75;
    }
  }

  .bg {
    height: 140px;
    background-position: center;
    background-size: cover;
  }
</style>
